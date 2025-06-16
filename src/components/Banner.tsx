import React from "react";
import backgroundImage from "images/Hero-1.webp";
import Button from "./ui/Button";

type BannerProps = {
  title?: string;
  subtitle?: string;
  bgImage?: string
};

const Banner: React.FC<BannerProps> = ({ title, subtitle, bgImage }) => {
  return (
    <section
      className="relative bg-contain bg-top bg-no-repeat md:bg-cover  "
      style={{
        // backgroundImage: `url('/images/Hero-1.webp'), linear-gradient(135deg, #b43141, #274768)`,
        // backgroundImage: ` url('/assets/Homepage1.png')`,
        backgroundImage: ` ${bgImage}, linear-gradient(135deg, #b43141, #274768)`,
      }}
    >
      <img
        src="/assets/Homepage1.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_#b43141,_#274768)] opacity-40 z-0"></div>
      <div className="relative z-10 max-w-[1420px] mx-auto flex items-center">
        <div className="w-full md:flex flex-col md:flex-row justify-end items-center mt-6 md:my-36 md:mx-8 px-4 py-8 md:px-0 md:py-0">
          {/* <div className="w-[45%] md:max-h-[30vh] "></div> */}
          <div className="w-[40%]  "></div>
          <div className="md:w-[50%] mt-[50%] md:mt-0">
            <h1 className="lg:w-12/12 text-2xl md:text-[42px] sm:leading-14  font-poppins font-extrabold text-shadow-2xs text-shadow-gray-600 mb-2 text-white">
              Empowering Military Families with Trusted Professionals
            </h1>
            <p className="text-base md:text-xl mb-8 xl:w-12/12 text-white sm:leading-10">
              Connect with top-rated, verified military veterans and spouses for real estate, VA loans, home services, and more.
            </p>
            <div className="flex flex-col lg:flex-row gap-6">
              <Button variant="outlineWhite" href="/auth/signup">Find a Service Provider</Button>
              <Button variant="outlineWhite" href="/auth/signup">Join as a Professional</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
