
import React from "react";
import { Link } from "react-router-dom";


import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen,setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white opacity-75 bg-black shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-gray-800 text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
            >
             Leafi
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning">
    
             <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-green-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="/landing"
                  target="_blank"
                >
                  Home
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
                  target="_blank"
                >
                 Cultivation
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-green-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar"
                  target="_blank"
                >
                  Diseases
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-green-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar"
                  target="_blank"
                >
                  Furtilizers
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-green-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
