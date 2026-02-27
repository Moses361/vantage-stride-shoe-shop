import { Link } from "react-router-dom";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <Link to="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li>
            <Link to="/" className="font-montserrat text-lg text-slate-gray">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-montserrat text-lg text-slate-gray">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="font-montserrat text-lg text-slate-gray"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-montserrat text-lg text-slate-gray"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Auth Links */}
        <div className="flex gap-2 text-lg font-montserrat max-lg:hidden wide:mr-24">
          <Link to="/">Sign in</Link>
          <span>/</span>
          <Link to="/">Explore now</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;