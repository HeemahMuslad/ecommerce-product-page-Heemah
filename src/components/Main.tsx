import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  products: any;
  currentImage: number;
  setCurrentImage: any;
  selectedProduct: number;
  setSelectedProduct: any;
  images: any;
  onQuantityChange: (index: number, calculation: string) => void;
  selectedImage: ReactNode;
  openLightbox: () => void;
  closeLightbox: () => void;
  handlePrevButton: () => void;
  handleNextButton: () => void;
}
const Main = ({
  products,
  images,
  onQuantityChange,
  selectedImage,
  openLightbox,
  closeLightbox,
  currentImage,
  setCurrentImage,
  selectedProduct,
  setSelectedProduct,
  handleNextButton,
  handlePrevButton,
}: Props) => {
  return (
    <>
      {products.map((product: any, index: number) => (
        <>
          <div
            key={product.id}
            className="flex w-lg mx-auto justify-between items-center my-10  md:flex-col md:gap-10"
          >
            <div key={product.id} className="flex flex-col w-half md:w-full gap-4    ">
              {images.map((img: any) => (
                <>
                  <div
                    key={img.id}
                    className={
                      product.id === selectedProduct
                        ? `${
                            img.id - 1 === currentImage
                              ? "w-full z-10 opacity-100 transition-opacity ease-in block  delay-75 "
                              : "absolute left-0 right-0 m-auto  w-0 z-0 opacity-0 transition-opacity ease-out"
                          }   `
                        : `${
                            img.id - 1 === selectedProduct
                              ? "w-full z-10 opacity-100 transition-opacity ease-in block  delay-75 "
                              : "absolute left-0 right-0 m-auto  w-0 z-0 opacity-0 transition-opacity ease-out"
                          }   `
                    }
                  >
                    <img className="rounded-2xl" src={img.img} alt="" />
                  </div>
                </>
              ))}

              <div className="flex justify-between w-xlg mx-auto">
                {images.map((img: any, index: number) => (
                  <>
                    <img
                      key={img.id}
                      onClick={() => {
                        if (product.id === selectedProduct) {
                          setCurrentImage(index);
                          openLightbox();
                        }
                        setSelectedProduct(product.id);
                      }}
                      className={
                        product.id === selectedProduct
                          ? `  ${
                              index === currentImage
                                ? "border-2 border-orange opacity-50 "
                                : ""
                            }   rounded w-sm h-sm  hover:opacity-50 cursor-pointer`
                          : `    rounded w-sm h-sm  hover:opacity-50 cursor-pointer`
                      }
                      src={img.img}
                      alt=""
                    />
                  </>
                ))}
              </div>
            </div>
            <div className="flex  flex-col w-half md:w-full  gap-2">
              <p className=" text-xs font-bold text-orange">{product.brand}</p>
              <h1 className="font-bold text-2xl">{product.title}</h1>
              <p className=" text-xs  text-dark">{product.description}</p>
              <div className="flex gap-5">
                <p className=" font-bold">${product.price}.00</p>
                <p className=" text-xs font-bold text-orange bg-pale p-1 rounded">
                  {product.discountPercent}
                </p>
              </div>
              <p
                className="text-xs font-bold text-light line-through
  "
              >
                ${product.prevPrice}.00
              </p>
              <div className="flex gap-2 lg:flex-col">
                <div className="flex w-half justify-between bg-gray py-2 rounded-xl">
                  <p
                    onClick={() => onQuantityChange(index, "decrement")}
                    className="font-bold text-orange cursor-pointer px-3 hover:bg-pale"
                  >
                    -
                  </p>
                  <p className="font-bold">{product.quantity}</p>
                  <p
                    onClick={() => onQuantityChange(index, "increment")}
                    className="font-bold text-orange cursor-pointer px-3 hover:bg-pale "
                  >
                    +
                  </p>
                </div>
                <div
                  onClick={() => onQuantityChange(index, "addToCart")}
                  className="flex bg-orange text-white text-xs font-bold w-md md:w-full justify-center items-center p-3 gap-3 rounded-xl cursor-pointer hover:bg-pale hover:text-orange"
                >
                  <img src="./images/icon-cart.svg" alt="" />{" "}
                  <p> Add to cart</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      {selectedImage && (
        <>
          {products.map((product: any, ) => (
            <div className="fixed top-0 left-0 w-full  h-full px-20 lg:px-0  bg-black bg-opacity-50 z-40 flex justify-center items-center ">
              <div className="flex flex-col gap-4  w-half mx-auto    ">
                {images.map((img: any) => (
                  <>
                    <div
                      key={img.id}
                      className={`flex    ${
                        img.id - 1 === currentImage
                          ? " z-10 opacity-100 transition-opacity ease-in block  delay-75 "
                          : "absolute left-0 right-0 m-auto  w-0 z-0 opacity-0 transition-opacity ease-out"
                      }   `}
                    >
                      <div className="flex    items-center  relative justify-center">
                        <div
                          onClick={closeLightbox}
                          className={`rounded-full   w-5 p-3 flex items-center justify-center absolute -top-8 right-0 cursor-pointer z-50
                      h-3   hover:text-orange bg-pale  ${
                        img.id - 1 !== currentImage ? "hidden" : "block"
                      }`}
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <div
                          onClick={handlePrevButton}
                          className={`rounded-full w-5 p-3 flex items-center justify-center absolute -left-3 cursor-pointer
                      h-3   bg-pale hover:text-orange ${
                        img.id - 1 !== currentImage ? "hidden" : "block"
                      }`}
                        >
                          <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <img className="    rounded-2xl" src={img.img} alt="" />
                        <div
                          onClick={handleNextButton}
                          className={`rounded-full w-5 p-3 flex items-center justify-center absolute -right-3 cursor-pointer
                      h-3   bg-pale hover:text-orange ${
                        img.id - 1 !== currentImage ? "hidden" : "block"
                      }`}
                        >
                          <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                      </div>
                    </div>
                  </>
                ))}
                <div className="flex justify-between w-xlg mx-auto">
                  {images.map((img: any, index: number) => (
                    <>
                      <img
                        key={img.id}
                        onClick={() => {
                          if (product.id === selectedProduct) {
                            setCurrentImage(index);
                            openLightbox();
                          }
                          setSelectedProduct(product.id);
                        }}
                        className={
                          product.id === selectedProduct
                            ? `  ${
                                index === currentImage
                                  ? "border-2 border-orange opacity-50 "
                                  : ""
                              }   rounded w-sm h-sm  hover:opacity-50 cursor-pointer`
                            : `    rounded w-sm h-sm  hover:opacity-50 cursor-pointer`
                        }
                        src={img.img}
                        alt=""
                      />
                    </>
                  ))}
                 
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Main;
