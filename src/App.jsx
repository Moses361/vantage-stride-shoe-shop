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
    <section className="xl:padding-l wide:padding-r padding-b pt-24">
      <Hero />
    </section>

    <section className="padding pt-24">
      <PopularProducts />
    </section>

    <section className="padding pt-24">
      <SuperQuality />
    </section>

    <section className="padding-x py-10 pt-24">
      <Services />
    </section>

    <section className="padding pt-24">
      <SpecialOffer />
    </section>

    <section className="bg-pale-blue padding pt-24">
      <CustomerReviews />
    </section>

    <section className="padding-x sm:py-32 py-16 w-full pt-24">
      <Subscribe />
    </section>
  </>
);

const About = () => (
  <section className="padding pt-24 min-h-[70vh]">
    <SuperQuality />
  </section>
);

const Products = () => (
  <section className="padding pt-24">
    <PopularProducts />
  </section>
);

const Contact = () => (
  <section className="padding pt-24 min-h-[70vh]">
    <Subscribe />
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
      </Routes>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;