import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";



export default function AddDetails() {
    return (
      <>
      <IndexNavbar fixed />
      <main>
        <div className="container mx-auto px-4 h-full mt-16 pt-16 ">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  {/* <div className="text-center mb-3">
                    <h6 className="text-green-600 text-sm font-bold">
                      Sign up with
                    </h6>
                  </div> */}
                  {/* <div className="btn-wrapper text-center"> */}
                    {/* <button
                      className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    > */}
                      {/* <img
                        alt="..."
                        className="w-5 mr-1"
                        src={require("assets/img/github.svg")}
                      /> */}
                      {/* Github
                    </button> */}
                    {/* <button
                      className="bg-white text-green-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src={require("assets/img/google.svg")}
                      />
                      Google
                    </button>
                  </div> */}
                  {/* <hr className="mt-6 border-b-1 border-gray-400" /> */}
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  {/* <div className="text-green-600 text-center mb-3 font-bold">
                    <small>Or sign up </small>
                  </div> */}
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-green-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Disease Name
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 text-green-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        
                      />
                    </div>
  
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-green-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                       Details
                      </label>
                      <textarea
                        className="px-3 py-3 text-green-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      />
                    </div>
  
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-green-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Fertilizers
                      </label>
                      <textarea
                        className="px-3 py-3 text-green-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      />
                    </div>
  
                    <div className="text-center mt-6">
                      <button
                        className="bg-green-400 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        Finish & Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </main>
      </>
    );
  }