import React, { useRef, useState } from "react";
import Menu from "../assets/images/icon-menu.svg";
import Close from "../assets/images/icon-close.svg";
import Title from "../assets/images/logo.svg";
import Cart from "../assets/images/icon-cart-black.svg";
import Avatar from "../assets/images/image-avatar.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { productThumbnail } from "../components/cardSource.js";

const Header = () => {
  const x = productThumbnail[0].shoe;
  const image = Object.values(x)[0];
  const price = 125;

  const count = useSelector((store) => store.count.value);
  const product = useSelector((store) => store.product.value[0]);
  // console.log(product.name);

  const showCartDetail = useRef();
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    toggle && count > 0
      ? (showCartDetail.current.style.display = "block")
      : (showCartDetail.current.style.display = "none");
    setToggle(!toggle);
  };
  const total = count * price;

  return (
    <div>
      <header
        className="flex items-center w-[90vw] m-auto h-[5rem] md:w-[95vw] lg:w-[80vw] 
      "
      >
        {/* title and menu wrapper */}
        <div
          className="title-menu-wrapper flex  justify-start
        "
        >
          <div
            className=" menu-wrapper menu absolute shrink-0 top-[2.2rem]
            lg:hidden
          "
          >
            <div className="">
              <img src={Menu} alt="menu" />
            </div>
            <div
              className="Close-icon  absolute top-[1px] hidden
            "
            >
              <img src={Close} alt="close" />
            </div>
          </div>
          <div
            className="title  shrink-0 ml-[2rem] lg:ml-0
          "
          >
            <img className="" src={Title} alt="title" />
          </div>
        </div>

        <div
          className="navigation-avatar-wrapper flex justify-between min-w-[70vw]
        "
        >
          <nav
            className="hidden 
            lg:block lg:ml-[4rem] lg:my-auto 
            "
          >
            <ul
              className="flex justify-between min-w-[25rem] w-[25rem] p-6 text-gray-400
                "
            >
              <li className=" ">
                <Link className="hover:border-b-4 py-[1.8rem] hover:border-[#fd7d14] transition-colors duration-[1s] ease-out">
                  Collection
                </Link>
              </li>
              <li>
                <Link className="hover:border-b-4 py-[1.8rem] hover:border-[#fd7d14] transition-colors duration-[1s] ease-out">
                  Men
                </Link>
              </li>
              <li>
                <Link className="hover:border-b-4 py-[1.8rem] hover:border-[#fd7d14] transition-colors duration-[1s] ease-out">
                  Women
                </Link>
              </li>
              <li>
                <Link className="hover:border-b-4 py-[1.8rem] hover:border-[#fd7d14] transition-colors duration-[1s] ease-out">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:border-b-4 py-[1.8rem] hover:border-[#fd7d14] transition-colors duration-[1s] ease-out">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className="avatar-cart-wrapper flex justify-end items-center w-[18rem] relative md:w-[32rem]
            "
          >
            <div
              className="absolute w-[21rem] h-[14rem] lg:w-[18rem] lg:h-[12rem] bg-slate-50 lg:top-[3.5rem] top-[2.5rem] rounded-lg hidden z-10
            "
              ref={showCartDetail}
            >
              <h1 className="p-2 mb-3 font-bold">Cart</h1>
              <hr />
              <div className="flex items-center mt-4 p-4">
                <div className="w-[2.5rem] ">
                  <img className="rounded-sm" src={image} alt="" />
                </div>
                <h1 className="ml-2 text-black/50">
                  {product.decription} <br />
                  {price} x {count} <span className="font-bold text-black">&#36;{total}</span>
                </h1>
              </div>
              <div className="lg:w-[20Vw] flex justify-center w-[90%] ">
                <button
                  className="bg-[#fd7d14] w-[90%] py-2 rounded-md text-white font-bold
              "
                >
                  Checkout
                </button>
              </div>
            </div>
            <div className="cart shrink-0 mr-5">
              <img
                src={Cart}
                alt=""
                className="cursor-pointer"
                onClick={toggleHandler}
              />
            </div>
            <div
              className="absolute bg-[#fd7d14] top-[0rem] rounded-full w-6 h-4  text-center text-white text-xs font-bold right-11 
              md:top-[-0.2rem] md:right-[2.8rem] lg:top-4
            
            "
            >
              {count}
            </div>
            <div
              className="avartar w-[2.5rem] shrink-0
                "
            >
              <img
                src={Avatar}
                alt=""
                className="cursor-pointer"
                onClick={toggleHandler}
              />
            </div>
          </div>
        </div>
      </header>
      <div>
        <hr
          className="hidden lg:block lg:bg-gray-300 lg:h-[2px] lg:w-[80vw] lg:mx-auto 
    "
        />
      </div>
    </div>
  );
};

export default Header;
