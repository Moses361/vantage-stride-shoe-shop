import { Routes, Route } from "react-router-dom";
import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
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
      <Subscribe />
    </section>
  </>
);

const About = () => (
  <section className="padding pt-16 sm:pt-28">
    <SuperQuality />
  </section>
);

const Products = () => (
  <section className="padding pt-16 sm:pt-28">
    <PopularProducts />
  </section>
);

const Contact = () => (
  <section className="padding pt-16 sm:pt-28">
    <Subscribe />
  </section>
);

const Details = () => (
  <section className="padding pt-16 sm:pt-28 flex flex-col items-center">
    <h1 className="text-4xl font-bold font-palanquin mb-6">
      Shoe Details
    </h1>

    <p className="text-slate-gray font-montserrat text-center max-w-md mb-8">
      Experience premium Nike comfort and elite performance built for
      everyday excellence.
    </p>

    <a
      href="/contact"
      className="bg-coral-red text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
    >
      Contact Us To Buy Shoes
    </a>
  </section>
);

const App = () => {
  return (
    <main className="relative">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
      </Routes>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;