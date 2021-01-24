/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap" >
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 ">
            <div className="pt-32 sm:pt-0 ">
              <h2 className="font-semibold text-4xl text-green-600 text-center">
                A life for farmers.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-green-600 text-right">
                This is a information site for farmers to their cultivations.
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 mt-6 sm:mt-0 w-10/12 max-h-860px"
          src={require("assets/img/farmer.jpg")}
          alt="..."/>
      </section>

      <section className="md:mt-0 pb-40 relative ">
        <div className="container mx-auto bg-green-200" >
          <div className="flex flex-nowrap items-center">
            <div className="w-full md:w-full px-4">
              <div className="flex flex-nowrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-row mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-green-900 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-mobile-alt fa-2x"></i>
                      </div>
                      <h6 className="text-3xl mb-1 font-semibold">
                      <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                className="font-bold text-gray-800 hover:text-black ease-linear transition-all duration-150"
              >Leafi</a> </h6>
                      <p className="mb-4 text-green-600">
                        It is a Mobile application to connect farmers and regional agricultural officers.
                      </p>
                    </div>
                  </div>
                 
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-row min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-green-900 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-tractor fa-2x"></i>
                      </div>
                      <h6 className="text-3xl mb-1 font-semibold"><a
                href="/landing"
                target="_blank"
                className="font-bold text-gray-800 hover:text-black ease-linear transition-all duration-150"
              >Cultivation</a></h6>
                      <p className="mb-4 text-green-600">
                        What is the best way to start farming ?<a href="">Let's see how.</a> 
                      </p>
                    </div>
                  </div>
                 
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-row min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-green-900 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-leaf fa-2x"></i>
                      </div>
                      <h6 className="text-3xl mb-1 font-semibold">
                      <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                className="font-bold text-gray-800 hover:text-black ease-linear transition-all duration-150"
              >Crop Diseases</a>
                      </h6>
                      <p className="mb-4 text-green-600">
                        When doing cultivation we have to have a good idea about cultivation. 
                      </p>
                    </div>
                  </div>
            
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-row min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-green-900 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-wine-bottle fa-2x"></i>
                      </div>
                      <h6 className="text-3xl mb-1 font-semibold">
                      <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                className="font-bold text-gray-800 hover:text-black ease-linear transition-all duration-150"
              >Fertilizers</a>
                      </h6>
                      <p className="mb-4 text-green-600">
                        Have to know about fertilizer and methods. 
                      </p>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-mobile-alt text-5xl"></i>
              </div>
              <div className="text-4xl mb-2 font-semibold leading-normal text-green-800">
              Leafi
              </div>
              <p className="text-xl font-light leading-relaxed mt-4 mb-4 text-green-700">
                Simple Mobile Application.
              </p>
              <a
                href="/Mobile_app"
                target="_blank"
                className="font-semibold text-green-800 hover:text-gray-600 ease-linear transition-all duration-150"
              >
                View All{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-6/12 px-0 mr-auto ml-auto mt-0">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <img
                      className="absolute top-0 b-auto right-10 pt-0 sm:w-11/12 mt-4 sm:mt-0 w-11/12 max-h-980px item-center"
                      src={require("assets/img/Leafii.jpg")}
                      alt="..."/>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/cultivation_n.jpg")}
                      alt="..."
                />
              </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-24">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-tractor text-5xl"></i>
              </div>
              <div className="text-4xl mb-2 font-semibold leading-normal text-green-800">
                Cultivation
              </div>
              <p className="text-xl font-light leading-relaxed mt-4 mb-4 text-green-700">
                How to cultivate.
              </p>
              <p className="text-xl font-light leading-relaxed mt-4 mb-4 text-green-700">
                We created a set of Components that are dynamic and come to help
                you.
              </p>
              <a
                href="/landing"
                target="_blank"
                className="font-semibold text-green-800 hover:text-green-600 ease-linear transition-all duration-150"
              >
                View All{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-32">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-leaf text-5xl"></i>
                </div>
                <h3 className="text-4xl font-semibold text-green-800">
                  Leaf Diseases
                </h3>
                <p className="mt-4 text-xl font-light leading-relaxed text-green-700">
                  Know about diseases.
                </p>
                <a
                href="/diseases"
                target="_blank"
                className="font-semibold text-green-800 hover:text-green-600 ease-linear transition-all duration-150"
              >
                View All{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
              </div>
            </div>

            <div className="w-full md:w-5/12 px-0 mr-auto ml-auto mt-0">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-0 md:mt-0">
              <img
                      className="absolute top-0 b-auto right-10 pt-4 sm:w-full mt-2 sm:mt-0 w-10/12 max-h-full item-center"
                      src={require("assets/img/dise_3.jpg")}
                      alt="..."/>
              </div>
            </div>

            {/* <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <img
                      className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 mt-6 sm:mt-0 w-10/12 max-h-860px"
                      src={require("assets/img/leaf_2.jpg")}
                      alt="..."/>
            </div> */}
          </div>

          <div className="flex flex-wrap items-center pt-32">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/fertilizer.jpg")}
                      alt="..."
                />
              </div>
            {/* <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative"> */}
                {/* <div className="my-4 w-full lg:w-6/12 px-4"> */}
                  {/* <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <img
                      className="absolute top-0 b-auto right-0 pt-0 sm:w-9/12 mt-6 sm:mt-0 w-10/12 max-h-900px"
                      src={require("assets/img/fertilizer.jpg")}
                      alt="..."/>
                  </a> */}
                {/* </div> */}
              {/* </div>
            </div> */}

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-8">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-wine-bottle text-5xl"></i>
              </div>
              <div className="text-4xl mb-2 font-semibold leading-normal text-green-800">
                Fertilizers
              </div>
              <p className="text-xl font-light leading-relaxed mt-4 mb-4 text-green-800">
                Can we use fertilizers
              </p>
              <p className="text-xl font-light leading-relaxed mt-4 mb-4 text-green-700">
                We created a set of Components that are dynamic and come to help
                you.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                className="font-semibold text-green-800 hover:text-green-600 ease-linear transition-all duration-150"
              >
                View all{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
