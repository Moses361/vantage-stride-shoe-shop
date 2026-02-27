import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-6 sm:gap-10 max-container"
    >
      {/* LEFT CONTENT */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-16 sm:pt-28">
        <p className="text-base sm:text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-6 sm:mt-10 font-palanquin text-4xl sm:text-6xl lg:text-8xl leading-tight font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-6">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-2">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-sm sm:text-lg leading-7 mt-4 mb-10 sm:mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-12 sm:mt-20 gap-8 sm:gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-2xl sm:text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-6 sm:leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-24 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
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