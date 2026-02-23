import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  CustomerReviews,
} from "./sections";

const App = () => {
  return (
    <main className='relative w-full overflow-x-hidden'>
      <Nav />
     <section className='xl:padding-l wide:padding-r padding-b overflow-x-hidden'>
        <Hero />
      </section>
      <section className='w-full overflow-x-hidden padding'>
        <PopularProducts />
      </section>
      <section className='w-full overflow-x-hidden padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      {<section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>}


      {/* // <section className='padding-x sm:py-32 py-16 w-full'>
      //   <Subscribe />
      // </section>
      // <section className=' bg-black padding-x padding-t pb-8'>
      //   <Footer />
      // </section> */}
      {/* {<section className='padding'>
        <SpecialOffer />
      </section> */}
    </main>
  );
};

export default App;
