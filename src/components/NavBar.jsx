import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Make sure to update this with your actual logo path

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-cream border-tan dark:bg-dark-green">
      <div className="w-[95%] sm:w-[75%] flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </Link>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-tan focus:outline-none focus:ring-2 focus:ring-tan dark:text-gray-400 dark:hover:bg-tan dark:focus:ring-dark-green"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <div className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 border border-tan rounded-lg bg-light-green md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-cream dark:bg-dark-green md:dark:bg-dark-green dark:border-brown">
            <Link to="/">
              <span
                className="block py-2 px-3 text-brown bg-tan rounded md:bg-transparent md:text-tan md:p-0 dark:text-cream md:dark:text-tan"
                aria-current="page"
              >
                Home
              </span>
            </Link>
            <a
              href="#exercises"
              className="block py-2 px-3 text-brown rounded hover:bg-tan md:hover:bg-transparent md:border-0 md:hover:text-tan md:p-0 dark:text-cream md:dark:hover:text-tan dark:hover:bg-brown dark:hover:text-cream md:dark:hover:bg-transparent"
            >
              Exercises
            </a>

            <Link to="/about-us">
              <span
                href="#"
                className="block py-2 px-3 text-brown rounded hover:bg-tan md:hover:bg-transparent md:border-0 md:hover:text-tan md:p-0 dark:text-cream md:dark:hover:text-tan dark:hover:bg-brown dark:hover:text-cream md:dark:hover:bg-transparent"
              >
                About
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
