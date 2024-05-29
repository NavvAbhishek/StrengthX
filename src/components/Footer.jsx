import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-green text-cream py-8 mt-14 ">
      <div className="w-[100%] sm:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center gap-5">
          <Link to="/">
            <img src={logo} alt="logo" className="w-14 h-14" />
          </Link>
          <h1 className="text-2xl font-bold">StrengthX</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 sm:flex-row items-center md:mb-0">
          <a href="#" className="mx-2 text-tan hover:text-brown">
            Home
          </a>
          <a href="#" className="mx-2 text-tan hover:text-brown">
            About
          </a>
          <a href="#" className="mx-2 text-tan hover:text-brown">
            Classes
          </a>
          <a href="#" className="mx-2 text-tan hover:text-brown">
            Contact
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center">
          <a href="#" className="mx-2 text-light-green hover:text-tan">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-..."></path>
            </svg>
          </a>
          <a href="#" className="mx-2 text-light-green hover:text-tan">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-..."></path>
            </svg>
          </a>
          <a href="#" className="mx-2 text-light-green hover:text-tan">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-..."></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
