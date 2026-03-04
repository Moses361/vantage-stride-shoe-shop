import { Link } from "react-router-dom";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  const slug = name.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Link
        to={`/details/${slug}`}
        className="cursor-pointer transition-all duration-300 
                   hover:scale-105 hover:shadow-xl 
                   rounded-xl p-4 block border border-transparent"
      >
        {/* FIXED SQUARE CONTAINER FOR UNSPLASH IMAGES */}
        <div className="w-full aspect-square overflow-hidden rounded-xl bg-slate-100 flex justify-center items-center">
            <img
              src={imgURL}
              alt={name}
              className="w-full h-full object-cover" 
            />
        </div>

        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating icon" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>

        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>

        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
      </Link>
    </div>
  );
};

export default PopularProductCard;
