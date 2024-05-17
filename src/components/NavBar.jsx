import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="bg-light-green text-cream shadow-md ">
      <div className="w-[90%] sm:w-[70%] text-lg mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="transition-colors duration-300">
            <span className="hover:text-tan ">Home</span>
          </Link>
          <a
            href="#exercises"
            className="hover:text-tan transition-colors duration-300"
          >
            Exercises
          </a>
          <Link to="/about-us" className="transition-colors duration-300">
            <span className="hover:text-tan ">About us</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
