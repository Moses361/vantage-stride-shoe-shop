import { Routes, Route, useParams, Link } from "react-router-dom"; // Added Link
import { Nav } from "./components";
import { products } from "./constants";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  ContactUs,
  SuperQuality,
} from "./sections";

const Home = () => (
  <>
    <section className="xl:padding-l wide:padding-r padding-b pt-16 sm:pt-28">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <ContactUs />
    </section>
  </>
);

// FINISHED: About Us with Brand Mission Story
const About = () => (
  <section className="padding pt-32 min-h-screen flex flex-col gap-20">
    <div className="max-container">
      <SuperQuality />
    </div>

    {/* The Vantage Story Mission Box */}
    <div className="max-container flex flex-col items-center text-center bg-pale-blue p-16 rounded-3xl mb-20 border border-slate-100 shadow-sm">
      <h2 className="text-4xl font-palanquin font-bold">
        The <span className="text-coral-red">Vantage</span> Story
      </h2>
      <p className="mt-6 font-montserrat text-slate-gray max-w-3xl text-lg leading-8 italic">
        Founded by Moses, Vantage was built on a simple principle: elite performance 
        should never sacrifice style. our mission is to empower athletes and everyday champions with footwear that delivers unparalleled comfort, cutting-edge innovation, and bold design. From our humble beginnings to becoming a global brand, we remain committed to pushing the boundaries of what's possible in footwear, inspiring confidence and excellence in every step.
      </p>
      <div className="mt-10">
        <Link to="/products">
          <button className="bg-coral-red text-white px-8 py-4 rounded-full font-montserrat font-bold hover:bg-black transition-all shadow-lg">
            Explore Our Full Collection
          </button>
        </Link>
      </div>
    </div>
  </section>
);

const Products = () => (
  <section className="padding pt-32">
    <PopularProducts />
  </section>
);

const Contact = () => (
  <section className="padding pt-32">
    <ContactUs />
  </section>
);

const Details = () => {
  const { slug } = useParams();
  const shoe = products.find((p) => p.name.replace(/\s+/g, "-").toLowerCase() === slug);

  if (!shoe) return <div className="p-20 text-center font-bold">Shoe not found!</div>;

  return (
    <section className="padding pt-32 flex flex-col items-center min-h-screen">
      <div className="flex max-lg:flex-col items-start gap-10 max-container">
        <div className="flex-1">
          <img src={shoe.imgURL} alt={shoe.name} className="w-full max-w-[500px] aspect-square object-cover rounded-3xl shadow-2xl" />
        </div>
        <div className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold font-palanquin">{shoe.name}</h1>
          <p className="text-2xl text-coral-red font-montserrat font-semibold mt-4">{shoe.price}</p>
          <p className="text-slate-gray font-montserrat mt-6 leading-7">
            Experience premium comfort and elite performance built for everyday excellence by Vantage.
          </p>
          <div className="mt-10">
             <ContactUs />
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:slug" element={<Details />} />
      </Routes>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
