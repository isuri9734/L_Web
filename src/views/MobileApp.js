import React from "react";
import ReactPlayer from 'react-player'

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer_white from "components/Footers/Footer_white";
import video1 from "D:/DLE/Year_3/L_Web/src/assets/video.mp4";

export default function Mobile_app() {
  return (
    <>
      <Navbar />
      <main className="Leafi_app">
        <section className="relative block h-500-px bg-green-200">
        <div class="p-20">
        
        </div>

          <div className="absolute w-full h-full text-green-900 pt-32 pb-16 py-2 text-center w-40 font-bold text-xl" >
            <p>What is Leafi-app ?</p>
            <p>How we can use it?</p>
            <p>Why we want to use Leafi?</p>
            <p>Let's see how the app works!</p>
            <p>This video will give you a basic idea about Leafi and how to use.</p>

          </div>
          
        </section>
        <section className="relative py-16 bg-green-200">
          <div className="container mx-auto px-4 ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 mb-2">
              <div className="px-6">
                <div className="mt-0 py-10 px-4 text-center">
                  <div className="flex justify-center">
                  <video src={video1} width="200" height="20" controls="controls" autoplay="true"  />
                      {/* <ReactPlayer
                      controls 
                      url='D:\DLE\Year_3\Final_Project\MY\Viva\Leafi\L_Web\src\assets\video.mp4'/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block h-500-px pt-0 bg-green-200">
          <div class="flex flex-nowrap text-green-800 text-center font-bold text-xl px-4 mx-4 pt-0 ">
            <div class="mx-4 px-4">
            <img
                  alt="..."
                  className="mx-auto h-32 rounded-lg shadow-lg"
                  src={require("assets/img/cultivation_n.jpg")}
                      alt="..."
                />
              Knowledgable
            </div>
            <div class="mx-4 px-4">
            <img
                  alt="..."
                  className="mx-auto h-34 rounded-lg shadow-lg"
                  src={require("assets/img/userf.jpg")}
                      alt="..."
                />
              User Friendly UI
            </div>
            <div class="mx-4 px-4">
            <img
                  alt="..."
                  className="mx-auto h-32 rounded-lg shadow-lg"
                  src={require("assets/img/farmer.jpg")}
                      alt="..."
                />
              Fast and Flesxible
            </div>
          </div>

          {/* <div class="flex flex-nowrap text-green-800 text-center font-bold text-xl px-4 mx-4 ">
            <div class="mx-4 px-4">
            <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/cultivation_n.jpg")}
                      alt="..."
                />
              
            </div>
            <div class="mx-4 px-4">
            <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/cultivation_n.jpg")}
                      alt="..."
                />
              No Internet
            </div>
            <div class="mx-4 px-4">
            <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/cultivation_n.jpg")}
                      alt="..."
                />
              Maintanable
            </div> */}

          {/* </div> */}

      
        </section>

      </main>
      <Footer_white/>
    </>
  );
}
