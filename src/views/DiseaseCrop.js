import React from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer_white from "components/Footers/Footer_white.js";

export default function DiseaseCrop() {
    return (
        <>
            <IndexNavbar fixed />
            <main class="bg-white pt-48">
            <div className="absolute w-full h-full text-green-900 pt-8 pb-16 py-2 text-center w-40 font-bold text-3xl" >
            <p>Select the crop</p>
            </div>

            <section className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mt-12 py-20 text-center">
                <div className="flex flex-nowrap ml-20 bg-white">
                <div className="w-full md:w-6/12 px-4 ml-3">
                  <div className="relative flex flex-row mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-green-900 p-8 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-lg rounded-full bg-green-200">
                      <a href="/Diseases" target="_blank">
                        <i className="fas fa-apple-alt fa-3x "></i></a>
                      </div>
                      <h5 className="text-2xl mb-1 ml-3 font-semibold">
                       Tomato
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-row mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-green-900 p-8 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-lg rounded-full bg-green-200">
                      <a href="/Diseases" target="_blank">
                        <i className="fas fa-carrot fa-3x "></i></a>
                      </div>
                      <h4 className="text-2xl mb-1 ml-3 font-semibold ">
                        Carrot 
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-row mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-green-900 p-8 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-lg rounded-full bg-green-200">
                      <a href="/Diseases" target="_blank">
                        <i className="fas fa-seedling fa-3x "></i></a>
                      </div>
                      <h4 className="text-2xl mb-1 ml-3 font-semibold ">
                        Beans
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-row mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-green-900 p-8 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-lg rounded-full bg-green-200">
                      <a href="/Diseases" target="_blank">
                        <i className="fas fa-lemon fa-3x "></i></a>
                      </div>
                      <h3 className="text-2xl mb-1 ml-3 font-semibold">
                        Lemon 
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-row mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-green-900 p-8 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-lg rounded-full bg-green-200">
                      <a href="/Diseases" target="_blank">
                        <i className="fas fa-pepper-hot fa-3x "></i></a>
                      </div>
                      <h2 className="text-2xl mb-1 ml-3 font-semibold">
                        Brinjal 
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-6/12 pl-4">
                  <div className="relative flex flex-row mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-green-900 p-8 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-lg rounded-full bg-green-200">
                      <a href="/Diseases" target="_blank">
                        <i className="fas fa-seedling fa-3x "></i></a>
                      </div>
                      <h3 className="text-2xl mb-1 ml-3 font-semibold">
                        Sala 
                      </h3>
                    </div>
                  </div>
                </div>      
          </div>
        </section>

            </main>
        </>
    );
    }
    