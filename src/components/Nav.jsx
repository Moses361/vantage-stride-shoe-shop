import { useState } from "react";
import { Link } from "react-router-dom";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container relative">
        {/* Logo */}
        <Link to="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="w-[129px] h-[29px]"
          />
        </Link>

        {/* Desktop Menu */}
         <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          <li><Link to="/products" className="nav-link">Products</Link></li>
          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
        </ul>

        {/* Desktop Auth */}
        <div className="flex gap-2 text-lg font-montserrat max-lg:hidden wide:mr-24">
          <Link to="/">Sign in</Link>
          <span>/</span>
          <Link to="/">Explore now</Link>
        </div>

        {/* Hamburger */}
        <button
          className="hidden max-lg:block"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={hamburger} alt="menu" width={25} height={25} />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-4 w-full bg-white shadow-lg rounded-xl max-lg:block">
            <ul className="flex flex-col items-center gap-6 py-6">
              <li onClick={() => setIsOpen(false)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link to="/about">About Us</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link to="/products">Products</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;