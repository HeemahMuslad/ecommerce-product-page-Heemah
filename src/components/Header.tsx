import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface Props {
  products: any[];
  openCart: boolean;
  onToggleCart: () => void;
  onCloseCart: () => void;
  removeProduct: (productId: number) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
  isActive: boolean;
}
const Header = ({
  openCart,
  onToggleCart,
  products,
  onCloseCart,
  removeProduct,
  toggleMenu,
  closeMenu,
  isActive,
}: Props) => {
  const totalProducts = products.filter(
    (product) => product.quantity > 0
  ).length;

  return (
    <>
      <nav
        className="flex items-center  w-xlg mx-auto  border-b py-5 border-light 
      "
      >
        <div
          onClick={toggleMenu}
          className={`hamburger hover:bg-orange cursor-pointer hidden rounded ${
            isActive ? "active" : ""
          } w-auto p-1 border-none  `}
        >
          <span className="bar block bg-dark  w-xsm my-1 mx-auto h-xsm"></span>
          <span className="bar block bg-dark  w-xsm my-1 mx-auto h-xsm"></span>
          <span className="bar block bg-dark  w-xsm my-1 mx-auto h-xsm"></span>
        </div>
        <div className="   mx-10 lg:ml-5">
          <img className="" src="./images/logo.svg" alt="" />
        </div>
        <div className={`w-md navLinks ${isActive ? "active" : ""} `}>
          <ul className="flex gap-5 text-dark ">
            <li
              onClick={closeMenu}
              className="link hover:text-orange transition delay-150 ease-in-out"
            >
              <a href="#">Collections</a>
            </li>
            <li onClick={closeMenu} className="link hover:text-orange">
              <a href="#">Men</a>
            </li>
            <li onClick={closeMenu} className="link hover:text-orange">
              <a href="#">Women</a>
            </li>
            <li onClick={closeMenu} className="link hover:text-orange">
              <a href="#">About</a>
            </li>
            <li onClick={closeMenu} className="link hover:text-orange">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex  items-center justify-between w-sm lg:w-md lg:justify-end gap-10">
          <div className="flex items-center relative  ">
            <button onClick={onToggleCart} className="cursor-pointer w-7 ">
              <img src="./images/icon-cart.svg" alt="" />
            </button>

            {
              <p className=" flex items-center justify-center  text-white rounded-full px-3 bg-orange absolute -top-4 -right-5">
                {totalProducts}
              </p>
            }
          </div>

          <img
            className="w-10 cursor-pointer hover:border-orange hover: "
            src="./images/image-avatar.png"
            alt=""
          />
        </div>
      </nav>

      {openCart && (
        <div className="flex flex-col fixed right-7  w-60 shadow-md shadow-slate-500 z-50  bg-pale">
          <div
            onClick={onCloseCart}
            className={`rounded-full w-5 p-3 flex items-center justify-center absolute -top-3 -right-2 bg-orange 
                         cursor-pointer text-white
                      h-3   hover:text-black  `}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <p className="border-b py-3 pl-4 font-bold border-light w-full">
            Cart
          </p>
          {products
            .filter((product: any) => product.quantity > 0)
            .map((product: any) => (
              <>
                <div className="flex flex-col p-5 gap-5">
                  <div
                    key={product.id}
                    className="flex items-center gap-2  text-xs "
                  >
                    <img
                      className="rounded w-sm h-sm  "
                      src={product.image}
                      alt=""
                    />
                    <div className="flex flex-col gap-1 font-bold">
                      <p className="text-dark">{product.title}</p>
                      <div className=" flex gap-2">
                        <p className="text-dark">
                          ${product.price}.00 x {product.quantity}
                        </p>
                        <p>${product.price * product.quantity}.00</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        product.quantity = 0;
                        removeProduct(product.id);
                      }}
                      className="cursor-pointer hover:bg-dark p-1 rounded transition delay-150 ease-in-out"
                    >
                      <img src="./images/icon-delete.svg" alt="" />
                    </button>
                  </div>
                  <button className="flex bg-orange text-white text-xs font-bold w-full justify-center items-center p-3 gap-3 rounded-xl cursor-pointer hover:bg-dark hover:text-orange transition delay-150 ease-in-out">
                    <a href="#">Checkout</a>
                  </button>
                </div>
              </>
            ))}
          {products.filter((product: any) => product.quantity > 0).length ===
            0 && (
            <p className="text-dark text-xs font-bold text-center py-12">
              Your cart is empty.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
