import { useState } from "react";
import { Link } from "react-router-dom";
import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(shoes[0].bigShoe);

  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full px-6 pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          New Season Arrivals
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The Latest Arrivals
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Vantage</span>
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Vantage arrivals, quality comfort, and elite innovation for
          your active life.
        </p>

        <Link to="/products">
          <Button label="Shop now" iconURL={arrowRight} />
        </Link>

        <div className="flex flex-wrap gap-16 mt-20">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen py-24 bg-primary bg-hero bg-cover bg-center">
        
        {/* BIG SHOE IMAGE */}
        <Link to="/contact">
          <img
            src={bigShoeImg}
            alt="Vantage Shoe Display"
            className="object-contain relative z-10 max-w-full cursor-pointer hover:scale-105 transition duration-300"
          />
        </Link>

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
