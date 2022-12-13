import React, { useState } from "react";
import Plus from "../assets/images/icon-plus.svg";
import Minus from "../assets/images/icon-minus.svg";
import Cart from "../assets/images/icon-cart.svg";
import { useContext } from "react";
import { AgyanimContext } from "../context/UseContext";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../store/slice/countSlice";

const DetailCard = () => {
  const contextVar = useContext(AgyanimContext);
  const [count, setCount] = useState(0);
  // const count = contextVar.count;
  // const setCount = contextVar.setCount;
  const price = contextVar.price;
  const totalCost = contextVar.totalCost;
  const setTotalCost = contextVar.setTotalCost;
  const dispatch = useDispatch();

  // const count = useSelector((store) => store.count.value);

  const plusHandler = () => {
    if (count < 3) {
      setCount((count) => count + 1);

      // dispatch(increaseCount());
    }
  };

  const minusHandler = () => {
    if (count > 0) {
      setCount((count) => count - 1);
      // dispatch(decreaseCount());
    }
  };

  const andToCartHandler = () => {
    dispatch(addCount(count));
  };

  return (
    <div
      className="w-[90vw] m-auto p-4
      md:w-[65vw]
    lg:w-[38vw] lg:mt-10 lg:mr-8 
    xl:w-[35vw] 
    xl:mt-[4rem]
    "
    >
      <div className="">
        <h1
          className="uppercase  text-[#ff6c02]/70 font-bold mb-4
        md:text-lg md:mt-4
        lg:mb-1 lg:mt-0
        xl:text-xl
        "
        >
          Sneaker Company
        </h1>
        <h1
          className="text-[2rem] font-bold mb-8
        lg:text-[2rem] lg:mb-4
        md:text-[2rem] xl:text-[3rem]
        "
        >
          Fall Limited Edition Sneakers
        </h1>
        <p
          className="text-[16px] mb-8 text-black/50
        lg:text-[0.9rem] lg:mb-4 md:text-[1.2rem]
        xl:text-[1.2rem]
        "
        >
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div
          className="flex justify-between items-center
        lg:flex-col lg:items-start
        "
        >
          <div className="flex gap-4 place-items-center">
            <p className="text-[2rem] font-bold">$125.00</p>
            <p className="text-[#ff6c02] font-extrabold text-lg bg-[#fae0c8be] px-1 rounded-md">
              {" "}
              50%
            </p>
          </div>
          <p className="text-black/50 text-lg">
            {" "}
            <s>$250.00</s>
          </p>
        </div>
      </div>

      <div
        className="w-[80%] 
      lg:flex lg:gap-4 lg:w-[25vw] lg:mt-4 lg:items-center lg:h-14
      "
      >
        <div
          className="flex justify-between w-[84vw]  mt-4 bg-[#f8f8f8fa] items-center py-4 rounded-md font-extrabold px-2
        lg:w-[12vw] lg:h-[3rem] lg:mt-0 md:w-[56vw]
        "
        >
          <div>
            <img
              src={Minus}
              alt="-"
              className="cursor-pointer"
              onClick={minusHandler}
            />
          </div>
          <p>{count}</p>
          <div>
            <img
              src={Plus}
              alt="+"
              className="cursor-pointer
            
            "
              onClick={plusHandler}
            />
          </div>
        </div>
        <div className="">
          <button
            className="flex bg-[#ff6c02] mt-8 text-white font-bold w-[84vw] items-center justify-center gap-2 py-4 rounded-md mb-10
         lg:w-[16vw] lg:h-[3rem] lg:mt-[2.5rem] md:w-[56vw]
          "
            onClick={andToCartHandler}
          >
            <span>
              <img src={Cart} alt="" />
            </span>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
