import React from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer_white from "components/Footers/Footer_white.js";

export default function Diseases() {
  return (
    
    <main class="w-full"> 
    <IndexNavbar fixed />
        <section class="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mt-4 py-20 text-center">
      <div class="mt-2">
        <h2 class="text-3xl leading-tight font-bold">Diseases</h2>
      </div>
      <div class="flex flex-col md:flex-row items-start justify-between mt-12">
        <div class="w-full bg-green-200 shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mr-4">
          <img src={require("assets/img/tomato_bacterial_spot.jpeg")} alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Bacterial Spot</h4>
          <p class="text-gray-700 mt-2">Bacterial spot of tomato is a potentially devastating disease that, in severe cases, can lead to unmarketable fruit and even plant death. Bacterial spot can occur wherever tomatoes are grown, but is found most frequently in warm, wet climates, as well as in greenhouses.</p>
        </div>

        <div class="w-full bg-green-200 shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src={require("assets/img/tomato_early_blight.jpeg")} alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Early Blight</h4>
          <p class="text-gray-700 mt-2">Early blight can be caused by two different closely related fungi, Alternaria tomatophila and Alternaria solani. Alternaria tomatophila is more virulent on tomato than A. solani, so in regions where A. tomatophila is found, it is the primary cause of early blight on tomato..</p>
        </div>

        <div class="w-full bg-green-200 shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src={require("assets/img/tomato_leaf_mold.jpeg")} alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Leaf Mold</h4>
          <p class="text-gray-700 mt-2">Cladosporium fulvum is an Ascomycete called Passalora fulva, a non-obligate pathogen that causes the disease on tomato known as the Tomato leaf mold. P. fulva only attacks tomato plants, especially the foliage, and it is a common disease in greenhouses,</p>
        </div>

        {/* <div class="w-full bg-green-200 shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src="assets/img/Leafii.jpg" alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Choose the fair rate</h4>
          <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div> */}
      </div> 

      
<div class="flex flex-col md:flex-row items-start justify-between mt-12">
        <div class="w-full bg-green-200 rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mr-4">
          <img src={require("assets/img/lateblight.JPG")} alt="" class="mx-auto h-24"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Late Blight</h4>
          <p class="text-gray-700 mt-2">Late blight is caused by the oomycete Phytophthora infestans. Oomycetes are fungus-like organisms also called water molds, but they are not true fungi. There are many different strains of P. infestans. These are called clonal lineages and designated by a number code</p>
        </div>

        <div class="w-full bg-green-200 shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src={require("assets/img/virus.JPG")} alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Virus</h4>
          <p class="text-gray-700 mt-2">ToMV infects tomato most commonly, but the virus can also infect pepper, potato, apple, pear, cherry and numerous weeds, including pigweed and lamb's quarters. Symptoms may differ on different hosts. TMV has a very wide host range, affecting numerous crops, ornamentals and weeds</p>
        </div>

        <div class="w-full bg-green-200 shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 mr-4">
          <img src={require("assets/img/targetspot.JPG")} alt="" class="mx-auto h-32"/>
          <h4 class="text-xl font-bold leading-tight mt-8">Target Spot</h4>
          <p class="text-gray-700 mt-2">Also known as early blight, target spot of tomato is a fungal disease that attacks a diverse assortment of plants, including papaya, peppers, snap beans, potatoes, cantaloupe, and squash as well as passion flower and certain ornamentals.</p>
        </div>
</div>   
    </section>
    <Footer_white/>
    </main>
    
    
  );
}
