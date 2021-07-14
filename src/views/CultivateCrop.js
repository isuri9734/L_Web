import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function CultivateCrop() {
  return (
    <>
       <IndexNavbar fixed />
      <main>
        <section className="relative block h-500-px bg-gray-200 ">
          <div
            className="absolute w-full h-full bg-center bg-cover mt-850 pt-40"
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/vectors/crop-growing-flat-design-vector-id900395712?k=6&m=900395712&s=612x612&w=0&h=ZSYDZ4AAN-4zTLDQqxuZDr8AezQYaclSeJnycgJgGcY=')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
            </div>
          <div className="container relative mx-auto mt-850 pt-40">
            <div className="items-center flex flex-wrap content-center">
              <div className="md:w-full lg:w-6/12 text center">
                  <div className="mt-32 pt-8 ">
                  <h1 className="text-white font-semibold text-5xl ">
                    Cultivation
                  </h1>
                  <p className="mt-4 text-lg text-white">
                  Agriculture is the science and art of cultivating plants and livestock. 
                  Agriculture was the key development in the rise of sedentary 
                  human civilization, whereby farming of domesticated species 
                  created food surpluses that enabled people to live in cities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 bg-green-200">
                <div className="flex flex-nowrap ml-20 bg-white">
                <div className="w-full md:w-6/12 px-4 ml-3">
                  <div className="relative flex flex-row mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-green-900 p-8 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-lg rounded-full bg-green-200">
                      <a
                href="/Method"
                target="_blank">
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
                      <a href="/Method" target="_blank">
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
                      <a href="/Method" target="_blank">
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
                      <a href="/Method" target="_blank">
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
                      <a href="/Method" target="_blank">
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
                      <a href="/Method" target="_blank">
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

          <section className="relative block h-500-px bg-white ">
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap content-center">
              <div className="md:w-full text center">
                  <div className="mt-10 pt-2 mb-10">
                  <h1 className="text-green-800  text-2xl  font-semibold">
                    Importance of Cultivation ....
                  </h1>
                  <p className="mt-4 text-lg text-green-300">
                  Agriculture is the science and art of cultivating plants and livestock. 
                  Agriculture was the key development in the rise of sedentary 
                  human civilization, whereby farming of domesticated species 
                  created food surpluses that enabled people to live in cities.
                  </p>
                  <p className="mt-4 text-lg text-green-300">
                  Modern agronomy, plant breeding, agrochemicals such as pesticides and fertilizers, 
                  and technological developments have sharply increased yields, 
                  while causing widespread ecological and environmental damage. 
                  Selective breeding and modern practices in animal 
                  husbandry have similarly increased the output of meat,
                   but have raised concerns about animal welfare and environmental damage. 
                   Environmental issues include contributions to global warming, 
                   depletion of aquifers, deforestation, antibiotic resistance, 
                   and growth hormones in industrial meat production. 
                   Genetically modified organisms are widely used, 
                   although some are banned in certain countries.
                   </p>
                    <p className="mt-4 text-lg text-green-300">
                      The major agricultural products can be broadly grouped into foods, 
                    fibers, fuels and raw materials (such as rubber). 
                    Food classes include cereals (grains), vegetables,
                    fruits, oils, meat, milk, fungi and eggs. 
                    Over one-third of the world's workers are employed in agriculture,
                    second only to the service sector, although the number of agricultural
                    workers in developed countries has decreased significantly over the centuries. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
