import { useState } from "react";
import { Link } from "react-router-dom";
import { hamburger } from "../assets/icons";
import vantageLogo from "../assets/images/vantage-logo.png"; // Ensure path is correct

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="padding-x py-4 fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <nav className="flex justify-between items-center max-container relative">
        <Link to="/" className="flex items-center gap-2">
          {/* Circular Logo Badge */}
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-coral-red flex justify-center items-center bg-black">
            <img src={vantageLogo} alt="Vantage" className="w-full h-full object-cover scale-125" />
          </div>
          <span className="text-2xl font-bold font-palanquin tracking-tighter">VANTAGE.</span>
        </Link>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          <li><Link to="/" className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors">Home</Link></li>
          <li><Link to="/about" className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors">About Us</Link></li>
          <li><Link to="/products" className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors">Products</Link></li>
          <li><Link to="/contact" className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors">Contact Us</Link></li>
        </ul>

        <div className="flex gap-4 max-lg:hidden">
          <Link to="/products" className="bg-coral-red text-white px-8 py-2 rounded-full hover:bg-black transition-all">
            Shop Now
          </Link>
        </div>

        <button className="hidden max-lg:block" onClick={() => setIsOpen(!isOpen)}>
          <img src={hamburger} alt="menu" width={25} height={25} />
        </button>

        {isOpen && (
          <div className="absolute top-[70px] right-0 w-full bg-white shadow-2xl rounded-2xl border border-slate-100 lg:hidden overflow-hidden">
            <ul className="flex flex-col items-center gap-6 py-10 font-montserrat text-xl">
              <li onClick={() => setIsOpen(false)}><Link to="/">Home</Link></li>
              <li onClick={() => setIsOpen(false)}><Link to="/about">About Us</Link></li>
              <li onClick={() => setIsOpen(false)}><Link to="/products">Products</Link></li>
              <li onClick={() => setIsOpen(false)}>
                <Link to="/products" className="bg-coral-red text-white px-10 py-3 rounded-full">Shop Now</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
