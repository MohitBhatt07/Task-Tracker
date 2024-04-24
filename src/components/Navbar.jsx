import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { DarkModeContext } from "../context/DarkModeContext";

const Navbar = ({ setIsModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-10 top-0 bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                href="/"
                className="text-white font-bold text-xl transition duration-300 hover:text-indigo-400"
              >
                TODO LIST
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-gray-300 hover:bg-indigo-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Home
                </a>
                <button
                  onClick={() => setIsModal(true)}
                  className="text-gray-300 hover:bg-indigo-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Add Task
                </button>
                <a
                  href="/about"
                  className="text-gray-300 hover:bg-indigo-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div
            className="p-2 max-md:hidden bg-indigo-500 cursor-pointer rounded-md"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? 
              <MdOutlineDarkMode className="justify-self-end font-bold text-white text-2xl" />
                :
                <MdOutlineLightMode className="justify-self-end font-bold text-white text-2xl"/>
              }
          </div>
          <div className="-mr-2 flex md:hidden">
            <div
              className="p-2 md:hidden bg-indigo-500 cursor-pointer rounded-md"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? 
              <MdOutlineDarkMode className="justify-self-end font-bold text-white text-2xl" />
                :
                <MdOutlineLightMode className="justify-self-end font-bold text-white text-2xl"/>
              }
            </div>
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-indigo-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white transition duration-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="text-gray-300 hover:bg-indigo-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300"
          >
            Home
          </a>
          <a
            href="/tasks"
            className="text-gray-300 hover:bg-indigo-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300"
          >
            Tasks
          </a>
          <a
            href="/about"
            className="text-gray-300 hover:bg-indigo-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
