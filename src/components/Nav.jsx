import { useState } from "react";
import { Link } from "react-router-dom";
import { hamburger } from "../assets/icons";
import vantageLogo from "../assets/images/vantage-logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="padding-x py-4 fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <nav className="flex justify-between items-center max-container w-full relative">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-coral-red flex justify-center items-center bg-black">
            <img
              src={vantageLogo}
              alt="Vantage"
              className="w-full h-full object-cover scale-125"
            />
          </div>

          <span className="text-2xl font-bold font-palanquin tracking-tighter uppercase">
            VANTAGE.
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="flex-1 flex justify-center items-center gap-12 max-lg:hidden">
          <li>
            <Link to="/" className="font-montserrat text-lg text-slate-gray hover:text-coral-red transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="font-montserrat text-lg text-slate-gray hover:text-coral-red transition">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/products" className="font-montserrat text-lg text-slate-gray hover:text-coral-red transition">
              Products
            </Link>
          </li>

          <li>
            <Link to="/contact" className="font-montserrat text-lg text-slate-gray hover:text-coral-red transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="max-lg:hidden">
          <Link
            to="/products"
            className="bg-coral-red text-white px-8 py-2 rounded-full hover:bg-black transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Hamburger / Close Button */}
        <button className="max-lg:block" onClick={toggleMenu}>
          {isOpen ? (

            /* CLOSE ICON */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

          ) : (

            <img src={hamburger} alt="menu" width={25} height={25} />

          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-white shadow-xl border-t lg:hidden z-50">
            <ul className="flex flex-col items-center gap-8 py-10 font-montserrat text-xl">

              <li onClick={closeMenu}>
                <Link to="/">Home</Link>
              </li>

              <li onClick={closeMenu}>
                <Link to="/about">About Us</Link>
              </li>

              <li onClick={closeMenu}>
                <Link to="/products">Products</Link>
              </li>

              <li onClick={closeMenu}>
                <Link to="/contact">Contact Us</Link>
              </li>

              <li onClick={closeMenu}>
                <Link
                  to="/products"
                  className="bg-coral-red text-white px-10 py-3 rounded-full"
                >
                  Shop Now
                </Link>
              </li>

            </ul>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Nav;