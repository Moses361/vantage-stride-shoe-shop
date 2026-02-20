import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="padding-x py-8 relative z-50 w-full bg-white">
        <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
          />
        </a>

        {/* Desktop Menu */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Auth */}
        <div className="flex gap-2 text-lg font-medium font-montserrat max-lg:hidden">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        {/* Hamburger */}
        <div className="hidden max-lg:block">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src={hamburger}
              alt="menu"
              width={25}
              height={25}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md mt-4 py-6">
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-lg font-montserrat text-slate-gray"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;