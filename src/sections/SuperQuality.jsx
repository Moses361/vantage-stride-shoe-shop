// src/sections/SuperQuality.jsx
import { Link } from "react-router-dom";
import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You <span className='text-coral-red'>Super Quality</span> Vantage Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear 
          is designed to elevate your experience.
        </p>
        <div className='mt-11'>
          <Link to="/details/nike-aero-boost">
            <Button label='View details' />
          </Link>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt='Vantage Shoe Detail' width={570} height={522} className='object-contain' />
      </div>
    </section>
  );
};

export default SuperQuality;
