import { Link } from "react-router-dom";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";
import vantageLogo from "../assets/images/vantage-logo.png";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          {/* VANTAGE CIRCULAR LOGO BADGE */}
          <Link to='/' className="flex items-center gap-3">
             <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white flex justify-center items-center bg-black p-1">
                <img 
                  src={vantageLogo} 
                  alt="Vantage Logo" 
                  className="w-full h-full object-contain scale-110" 
                />
             </div>
             <span className="text-white text-3xl font-bold font-palanquin tracking-tighter">
                VANTAGE<span className="text-coral-red">.</span>
             </span>
          </Link>
          
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Vantage store. Experience the peak of footwear innovation and performance.
          </p>
          
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer hover:bg-coral-red transition-all'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-coral-red'
                    key={link.name}
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved by Vantage Shoes.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
