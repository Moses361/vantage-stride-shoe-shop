import { useParams } from "react-router-dom";
import { products } from "../constants";

const Details = () => {
  const { id } = useParams();

  const product = products.find(
    (item) =>
      item.name.replace(/\s+/g, "-").toLowerCase() === id
  );

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold">Product Not Found</h2>
      </div>
    );
  }

  return (
    <section className="max-container py-20 px-6">
      <div className="flex flex-col lg:flex-row gap-12 items-center">

        <img
          src={product.imgURL}
          alt={product.name}
          className="w-full max-w-md object-contain"
        />

        <div>
          <h1 className="text-5xl font-bold font-palanquin">
            {product.name}
          </h1>

          <p className="mt-4 text-2xl text-coral-red font-bold">
            {product.price}
          </p>

          <p className="mt-6 text-slate-gray font-montserrat max-w-md">
            Premium Nike comfort and elite performance design built
            for both everyday wear and athletic excellence.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-coral-red text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Contact Us To Buy Shoes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Details;