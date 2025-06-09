import React from "react";
import backgroundImage from "images/Hero-1.webp";
import Button from "./ui/Button";

type BannerProps = {
  title?: string;
  subtitle?: string;
};

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <section
      className=" bg-contain bg-top bg-no-repeat md:bg-cover  bg-position-[20%_80%] md:bg-position-[20%_80%]"
style={{
  backgroundImage: `url('/images/Hero-1.webp'), linear-gradient(135deg, #b43141, #274768)`,
}}

>
      <div className="max-w-[1420px] mx-auto flex items-center">
      <div className="w-full md:flex flex-col md:flex-row justify-end items-center my-6 md:my-36 md:mx-8 px-4 py-8 md:px-0 md:py-0">
        {/* <div className="w-[45%] md:max-h-[30vh] "></div> */}
        <div className="w-[45%]  "></div> 
        <div className="md:w-[55%] mt-[35%] md:mt-0">
          <h1 className="lg:w-11/12 text-2xl md:text-[42px] sm:leading-14  font-poppins font-extrabold text-shadow-2xs text-shadow-gray-600 mb-2 text-white">
            Empowering Military Families with Trusted Services
          </h1>
          <p className="text-base md:text-xl mb-8 xl:w-8/12 text-white sm:leading-10">
            Find top-rated, verified military professionals for real estate, home services, and more.
          </p>

          <div className="flex flex-col lg:flex-row gap-6">
            <Button variant="outlineWhite" href="/">Find a Service Provider</Button>
            <Button variant="outlineWhite" href="/">Join as a Professional</Button>
          </div>
        </div>
      </div>
      </div>

    </section>
  );
};

export default Banner;
