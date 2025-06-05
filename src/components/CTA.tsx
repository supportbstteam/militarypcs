import React from "react";
import backgroundImage from "images/Hero-1.webp";
import Button from "./ui/Button";


const CTA = () => {
  return (
<section
  className="max-w-[1420px] mx-auto relative bg-cover  bg-position-[20%_80%] md:bg-position-[20%_80%] flex items-center rounded-3xl mx-4"
  style={{ backgroundImage: `url('/images/CTA.png')` }}
>
      <div className="w-full md:flex flex-col md:flex-row justify-end items-center my-6 md:my-24 md:mx-8 px-4 py-8 md:px-0 md:py-0">
            <div className="w-[55%] "></div>
            <div className="md:w-[45%]  ">
                <h3 className=" text-2xl md:text-[42px] sm:leading-12  font-poppins font-semibold text-shadow-2xs text-shadow-gray-600 mb-8 text-white">
                    Join our mission to connect and empower the military community.
                </h3>


                 <div className="flex flex-col lg:flex-row gap-6">
                    <Button variant="outline" href="/">Create a Free Account</Button>
                    <Button variant="outline" href="/">Become a Partner</Button>
                 </div>
                 
                
            </div>
        </div>
    </section>
  );
};

export default CTA;
