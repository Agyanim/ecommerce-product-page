import React, { useState } from "react";
import cardSource from "../components/cardSource.js";
import { productThumbnail } from "../components/cardSource.js";
import Prev from "../assets/images/icon-previous.svg";
import Next from "../assets/images/icon-next.svg";
import { useRef, useContext, useEffect } from "react";
import { AgyanimContext } from "../context/UseContext.jsx";

const ShoeCard = () => {
// shoe card section
  const myCardItems = cardSource;
  const useStateContexVal = useContext(AgyanimContext);
  const cardIndex = useStateContexVal.myIndex;
  const setCardIndex = useStateContexVal.setMyIndex;

  let shoes = [];
  let timerInterval;

  useEffect(() => {
    cardIndex;
    autoSlideShoes();
    return () => {
      clearInterval(timerInterval);
    };
  }, [cardIndex]);


  myCardItems.map((card, index) => {
    const y = Object.values(card.shoe);
    shoes.push(Object.values(y));
  });

  function autoSlideShoes() {
    timerInterval = setInterval(() => {
      cardIndex === shoes.length - 1
        ? setCardIndex(0)
        : setCardIndex((cardIndex) => cardIndex + 1);
    }, 5000);
  }

  const prevHandler = () => {
    cardIndex === 0
      ? setCardIndex(shoes.length - 1)
      : setCardIndex((cardIndex) => cardIndex - 1);
  };

  const nextHandler = () => {
    cardIndex === shoes.length - 1
      ? setCardIndex(0)
      : setCardIndex((cardIndex) => cardIndex + 1);
  };

  // Thumbnail section
  const myImage = useRef();
  const thumbnail = productThumbnail;
  let shoeThumbnail = [];

  thumbnail.map((shoe, index) => {
    const x = Object.values(shoe.shoe);
    shoeThumbnail.push(Object.values(x));
  });

  const pickImageHandler = (e) => {
    const id = e.currentTarget.id;
    const x = parseInt(id);
    setCardIndex(x);
  };

  const shoeThumbnailRender = shoeThumbnail.map((shoe, index) => {
    return (
      <div
        key={index}
        id={index}
        className="w-[5rem] h-[5rem] rounded-lg group
    cursor-pointer  hover:border-2 hover:border-[#f27113] shrink-0 transition-opacity duration[2s] ease-in
    xl:w-[6rem]
    "
        onClick={pickImageHandler}
      >
        <img
          ref={myImage}
          src={shoe[0]}
          alt="hu"
          className="group-hover:opacity-50 rounded-lg bg-cover w-full"
          key={index}
        />

      </div>
    )
    
  }
    )


  return (
    <div>
      <div
        className="w-[24rem] h-[18rem] bg-[#f08110] transition-all duration-[2s] ease-out relative
        lg:rounded-2xl lg:w-[24rem] lg:h-[24rem] md:w-[80vw] md:h-[28rem] md:rounded-lg xl:w-[28rem] xl:h-[28rem]

"
        style={{
          backgroundImage: `url(${shoes[cardIndex]}) `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="prev absolute top-[50%] ml-2 rounded-full bg-white shrink-0 w-8 h-8 flex justify-center items-center cursor-pointer lg:hidden"
          onClick={prevHandler}
        >
          <img src={Prev} alt="previous" />
        </div>
        <div
          className="next absolute right-0 top-[50%] mr-2 rounded-full bg-white shrink-0 w-8 h-8 flex justify-center items-center cursor-pointer lg:hidden"
          onClick={nextHandler}
        >
          <img src={Next} alt="next" />
        </div>
      </div>
{/*  */}
      <div className=" gap-[1.3rem] my-8 hidden
      lg:flex 
      ">
        {shoeThumbnailRender}
      </div>
    </div>
  );
};

export default ShoeCard;

