import { SuperQuality } from "../sections";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="pt-28 w-full">

      {/* Top Section */}
      <section className="padding-t padding-b">
        <SuperQuality />
      </section>

      {/* Brand Story */}
      <section className="padding bg-pale-blue">
        <div className="max-container flex flex-col items-center text-center">

          <h2 className="text-4xl font-palanquin font-bold">
            The <span className="text-coral-red">Vantage</span> Story
          </h2>

          <p className="mt-6 font-montserrat text-slate-gray max-w-3xl text-lg leading-8">
            Vantage was founded with one goal in mind: to create footwear that
            combines elite athletic performance with modern street style.
            Built for athletes, creators, and everyday champions, every pair
            of Vantage shoes is designed to deliver unmatched comfort,
            durability, and confidence in every step.
          </p>

          <p className="mt-4 font-montserrat text-slate-gray max-w-3xl text-lg leading-8">
            From our earliest designs to our latest innovations, we remain
            committed to pushing the boundaries of what footwear can achieve.
            Whether you're training, exploring, or simply expressing your
            personal style, Vantage is built to move with you.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex gap-6 flex-wrap justify-center">

            <Link
              to="/products"
              className="bg-coral-red text-white px-8 py-4 rounded-full font-montserrat font-bold hover:shadow-xl hover:scale-105 transition-all"
            >
              Explore Our Collection
            </Link>

            <Link
              to="/contact"
              className="border border-slate-gray text-slate-gray px-8 py-4 rounded-full font-montserrat font-bold hover:bg-black hover:text-white transition-all"
            >
              Contact Our Team
            </Link>

          </div>

        </div>
      </section>

      {/* Brand Values */}
      <section className="padding-x py-24">
        <div className="max-container grid lg:grid-cols-3 gap-12">

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold font-palanquin">
              Innovation
            </h3>

            <p className="text-slate-gray font-montserrat leading-7">
              We constantly explore new materials, technologies, and designs
              to ensure every Vantage product delivers peak performance and
              modern style.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold font-palanquin">
              Quality
            </h3>

            <p className="text-slate-gray font-montserrat leading-7">
              Each pair of shoes is carefully crafted and tested to meet the
              highest standards of durability, comfort, and long-lasting
              performance.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold font-palanquin">
              Community
            </h3>

            <p className="text-slate-gray font-montserrat leading-7">
              Vantage is more than footwear — it's a movement. Our community
              includes athletes, creatives, and innovators who believe in
              pushing boundaries every single day.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;