import React from "react";
import ReactPlayer from 'react-player'

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer_white from "components/Footers/Footer_white";

export default function Mobile_app() {
  return (
    <>
      <Navbar />
      <main className="Leafi_app">
        <section className="relative block h-500-px bg-green-200">
        <div class="p-20">
        {/* <div class="text-black px-8 py-2 text-center w-40 font-bold text-xl">
       Want annimation
        </div> */}
        </div>

          <div className="absolute w-full h-full text-green-900 pt-32 pb-16 py-2 text-center w-40 font-bold text-xl" >
            <p>What is Leafi-app ?</p>
            <p>How we can use it?</p>
            <p>Why we want to use Leafi?</p>
            <p>Let's see how the app works!</p>
            <p>This video will give you a basic idea about Leafi and how to use.</p>
        
            {/* <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span> */}
          </div>
          {/* <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          > */}
            {/* <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg> */}
          {/* </div> */}
        </section>
        <section className="relative py-16 bg-green-200">
          <div className="container mx-auto px-4 ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                {/* <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"> */}
                    {/* <div className="relative"> */}
                      {/* <img
                        alt="..."
                        src={require("assets/img/team-2-800x800.jpg")}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      /> */}
                    {/* </div> */}
                  {/* </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0"> */}
                      {/* <button
                        className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button> */}
                    {/* </div>
                  </div> */}
                  {/* <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          22
                        </span>
                        <span className="text-sm text-gray-500">Friends</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-gray-500">Photos</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-gray-500">Comments</span>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    University of Computer Science
                  </div>
                </div> */}
                <div className="mt-0 py-10 px-4 text-center">
                  <div className="flex justify-center">
                    {/* <div className="w-full px-4 my-4"> */}
                      <ReactPlayer
                      controls 
                      url='https://www.youtube.com/watch?v=7sDY4m8KNLc'/>
                      {/* <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-blue-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block h-500-px bg-green-200">
          <div class="flex flex-nowrap text-green-800 text-center font-bold text-xl px-4 mx-4 ">
            <div class="mx-4 px-4">
            <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/cultivation_n.jpg")}
                      alt="..."
                />
              Easy to use
            </div>
            <div class="mx-4 px-4">
            <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/cultivation_n.jpg")}
                      alt="..."
                />
              Simply discribe details
            </div>
            <div class="mx-4 px-4">
            <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/cultivation_n.jpg")}
                      alt="..."
                />
              Fast and Flesxible
            </div>

          </div>
        {/* <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <p>fytuvhbkbk</p>
              </div>

              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <p>fytuvhbkbk</p>
              </div>
              </div>
              </div>
              </div> */}
        </section>

      </main>
      <Footer_white/>
    </>
  );
}
