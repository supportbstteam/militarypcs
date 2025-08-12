import React from "react";
import backgroundImage from "images/Hero-1.webp";
import Button from "./ui/Button";


const CTA = () => {
  return (
    <section
      // className="max-w-[1420px] mx-auto  bg-cover  bg-position-[20%_80%] md:bg-position-[20%_80%] flex items-center rounded-3xl mx-4 p-none"
      className="relative max-w-[1420px] mx-auto  bg-cover  bg-position-[20%_80%] md:bg-position-[20%_80%]  flex items-center rounded-3xl p-none overflow-hidden"
      style={{ backgroundImage: `url('/assets/CTA.jpg')` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_#b43141,_#274768)] opacity-60 z-0"></div>

      <div className="relative z-10 w-full md:flex flex-col md:flex-row justify-end items-center  md:mt-48 md:mb-8 md:mx-8  md:px-none   ">
        <div className="xl:w-[35%] py-38"></div>
        <div className=" xl:w-[65%] p-4 py-8 md:p-8  bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] rounded-3xl md:bg-transparent" >
          <h3 className=" text-2xl md:text-[42px] sm:leading-12  font-poppins font-semibold text-shadow-2xs text-shadow-gray-600 mb-6 text-white">
            Join our mission to connect and empower the military community.
          </h3>
          <div className="grid md:grid-cols-3 justify-start gap-4">
            <Button variant="primary" href="/auth/signup">Create a Free Account</Button>
            <Button variant="primary" href="/auth/signup">Become a Partner</Button>
            <Button variant="primary" href="/donate">Donate Today</Button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default CTA;
