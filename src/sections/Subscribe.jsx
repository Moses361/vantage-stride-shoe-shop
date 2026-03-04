const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Contact Us To
        <span className="text-coral-red"> Buy </span>Your Favorite Nike Shoes
      </h3>

      <div className="lg:max-w-[40%] w-full flex flex-col gap-5 p-6 sm:border sm:border-slate-gray rounded-xl">
        
        <input
          type="text"
          placeholder="Your Name"
          className="input"
        />

        <input
          type="email"
          placeholder="your@email.com"
          className="input"
        />

        <textarea
          placeholder="Which shoe are you interested in?"
          className="input h-24 resize-none"
        />

        <a
          href="/contact"
          className="bg-coral-red text-white px-6 py-3 rounded-lg text-center hover:opacity-90 transition"
        >
          Contact Us To Buy Shoes
        </a>
      </div>
    </section>
  );
};

export default Subscribe;