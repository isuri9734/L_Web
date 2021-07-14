import React from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer_white from "components/Footers/Footer_white.js";

export default function Method() {
  return (
    
    <main class="w-full"> 
    <IndexNavbar fixed />
        <section class="relative bg-green-200 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mt-4 py-20 text-center">
      <div class="mt-2">
        <h2 class="text-3xl leading-tight font-bold">How to cultivate ?</h2>
      </div>
      <div class="flex flex-col md:flex-row items-start justify-between mt-12">
        <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mr-4">
          <img src={require("assets/img/c_soil_c.jpg")} alt="" class="mx-auto h-22"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Prepare soil</h4>
          {/* <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </div>

        <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src={require("assets/img/seeds.jpg")} alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Select healthy Tomato seeds</h4>
          <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src={require("assets/img/planting.jpg")} alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Plant Seeds</h4>
          <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src="assets/img/Leafii.jpg" alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Choose the fair rate</h4>
          <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div> */}
      </div> 

<div class="flex flex-col md:flex-row items-start justify-between mt-12">
        <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mr-4">
          <img src={require("assets/img/watering_tomatos.jpg")} alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Water and Fertilize Often</h4>
          <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src={require("assets/img/care.jpg")} alt="" class="mx-auto h-40"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Prune Tomato Plants Regularly</h4>
          <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src={require("assets/img/result.jpg")} alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Harvest</h4>
          <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src="assets/img/Leafii.jpg" alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Choose the fair rate</h4>
          <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div> */}
      </div> 

      {/* <div class="flex flex-col md:flex-row items-start justify-between mt-12">
        <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mr-4">
          <img src="assets/img/Leafii.jpg" alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Apply with your home</h4>
          <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src={require("assets/img/Leafii.jpg")} alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Complete the form</h4>
          <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src={require("assets/img/Leafii.jpg")} alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Complete the form</h4>
          <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div> */}

        {/* <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src="assets/img/Leafii.jpg" alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Choose the fair rate</h4>
          <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div> */}
      {/* </div>  */}

      {/* <div class="mt-12 md:mt-20 w-full md:max-w-3xl mx-auto">
        <p class="text-xl">“FairRate is beautiful, elegant and easy to apply. I’ve been able to apply for an
          amazing rate in just a minutes. Thank you very much for creating this impressive service!”</p>
        <p class="text-xl font-bold text-blue-600 mt-4">Valeria Boltneva</p>
        <p class="text-sm uppercase tracking-wider text-gray-700">Director of Adrian Stefan.Inc</p>
      </div> */}

    </section>
    <Footer_white/>
    </main>
    
    
  );
}
