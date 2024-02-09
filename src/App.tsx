import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { product, images } from "./data";

const App = () => {
  const [products, setProducts] = useState(product);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const handleNextButton = () => {
    currentImage === images.length - 1
      ? setCurrentImage(0)
      : setCurrentImage(currentImage + 1);
  };
  const handlePrevButton = () => {
    currentImage === 0
      ? setCurrentImage(images.length - 1)
      : setCurrentImage(currentImage - 1);
  };
  const removeProduct = (productId: number) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    console.log(updatedProducts);
    setProducts(updatedProducts);
  };
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  const closeMenu = () => {
    setIsActive(false);
  };
  const handleQuantityChange = (index: number, operation: string) => {
    let updatedProducts = [...product];
    if (operation === "increment") {
      updatedProducts[index].quantity += 1;
    } else if (operation === "decrement") {
      if (updatedProducts[index].quantity >= 1) {
        updatedProducts[index].quantity -= 1;
      }
    } else if (operation === "addToCart") {
      updatedProducts[index].quantity = 1;
    }
    setProducts(updatedProducts);
  };

  const openLightbox = () => {
    setSelectedImage(true);
  };
  const closeLightbox = () => {
    setSelectedImage(false);
  };
  const onOpenCart = () => {
    setOpenCart(true);
  };
  const onCloseCart = () => {
    setOpenCart(false);
  };
  return (
    <>
      <Header
        openCart={openCart}
        onOpenCart={onOpenCart}
        onCloseCart={onCloseCart}
        products={product}
        removeProduct={removeProduct}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        isActive={isActive}
      />
      <Main
        products={product}
        onQuantityChange={handleQuantityChange}
        selectedImage={selectedImage}
        openLightbox={openLightbox}
        closeLightbox={closeLightbox}
        images={images}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        handleNextButton={handleNextButton}
        handlePrevButton={handlePrevButton}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      ></Main>
    </>
  );
};

export default App;
