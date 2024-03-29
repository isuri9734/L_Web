import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [navbarOpen,setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-green-800 text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
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
            id="example-navbar-warning"
          >
            
             <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-green-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="/Index"
                  target="_blank"
                >
                  Home
                </a>
              </li>

              
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="/mobileapp"
                  target="_blank"
                >
                 Leafi App
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="/cultivatecrop"
                  target="_blank"
                >
                 Cultivation
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-green-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="/Diseasecrop"
                  target="_blank"
                >
                   Diseases
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-green-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="/Diseasecrop"
                  target="_blank"
                >
                  Furtilizers
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-green-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="/about"
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
