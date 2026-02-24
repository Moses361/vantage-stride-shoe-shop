import { Nav } from "./components";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  CustomerReviews,
} from "./sections";

const App = () => {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="w-full overflow-x-hidden xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      {/* Popular Products */}
      <section className="w-full overflow-x-hidden padding">
        <PopularProducts />
      </section>

      {/* Super Quality */}
      <section className="w-full overflow-x-hidden padding">
        <SuperQuality />
      </section>

      {/* Services */}
      <section className="w-full overflow-x-hidden padding-x py-10">
        <Services />
      </section>

      {/* Customer Reviews */}
      <section className="w-full overflow-x-hidden bg-pale-blue padding">
        <CustomerReviews />
      </section>
    </main>
  );
};

export default App;