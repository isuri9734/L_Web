import React from "react";


import Navbar from "components/Navbars/IndexNavbar.js";
import Footer_white from "components/Footers/Footer_white";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="Leafi_app">
        <section className="relative block h-500-px bg-green-200">
        <div class="p-20">
        
        </div>

          <div className="absolute w-full h-full text-green-900 pt-32 pb-16 py-2 text-justify w-40 text-xl px-6" >
            <p class="text-3xl font-bold text-center">ABOUT US......</p>
            <p >Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                 consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                  discovered the undoubtable source. 
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                  written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

            <p class="mt-4 font-bold text-lg pt-2">Contact Details</p> 
              <p>Address : The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32 </p>
              <p>Contact No : 011-2597634, 011-2933457</p>
              <p>Fax : 011-2597634, 011-2933457</p>
          </div>
          
        </section>

      </main>
      <Footer_white/>
    </>
  );
}
