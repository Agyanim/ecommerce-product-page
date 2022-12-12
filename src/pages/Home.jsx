import React from "react";
import DetailCard from "../components/DetailCard";
import Header from "../components/Header";
import ShoeCard, {  } from "../components/ShoeCard";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <section className="lg:flex lg:gap-[5rem]
      lg:w-[80vw] lg:mx-auto lg:justify-center mt-4
      ">

        <div className="
        lg: flex justify-center lg:mt-[5rem] lg:mb-[5rem]
        ">
            <ShoeCard />
          </div>
        
        <div className="lg:mt-[4rem]
        ">
          <DetailCard/>
        </div>
          
      </section>
    </>
  );
};

export default Home;
