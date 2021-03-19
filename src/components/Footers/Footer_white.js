import React from "react";

export default function Footer_white() {
  return (
    <>
      <footer className="relative bg-white pt-8 pb-6">

        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-green-800">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-green-700">
                Explore details.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-green-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fas fa-mobile-alt text-2xl"></i>
                </button>
                <button
                  className="bg-white text-green-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fas fa-tractor text-2xl"></i>
                </button>
                <button
                  className="bg-white text-green-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="/about"><i className="fas fa-leaf text-2xl"></i></a>
                </button>
                <button
                  className="bg-white text-green-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fas fa-wine-bottle text-2xl"></i>
                </button>
                <button
                  className="bg-white text-green-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="/about"><i className="fas fa-address-card text-2xl"></i></a>
                </button>
              </div>
            </div>
           
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-green-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Leafi by{" "}
                <a
                  href="https://www.creative-tim.com?ref=nr-footer"
                  className="text-green-600 hover:text-gray-900"
                >
                  Leafi Productions
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
