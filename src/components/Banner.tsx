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
        backgroundImage: ` ${bgImage}`,
      }}
    >
      <img
        src="/assets/bgnew.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      {/* <div className="absolute inset-0 bg-[linear-gradient(135deg,_#b43141,_#274768)] opacity-40 z-0"></div> */}
      <div className="relative z-10 max-w-5xl mx-auto flex items-center">
        <div className="md:flex flex-col md:flex-row justify-end items-center my-32">
          {/* <div className="w-[45%] md:max-h-[30vh] "></div> */}
          <div className="md:w-[65%]  md:mt-0 flex flex-col gap-6">
            <h1 className="h1 ">
              Connecting <br /> Military Families with <br /> <span className="text-[#CDC5A7] ">Trusted Professionals</span>
            </h1>
            <p className="text-white font-semibold text-xl ">
              Find top-rated, verified military veterans and spouses for real estate, VA loans, home services, and more.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 ">
              <Button  href="/auth/signup" size="lg">Find a Service Provider</Button>
              <Button variant="secondary" size="lg" href="/auth/signup">Join as a Professional</Button>
            </div>
          </div>
          <div className="w-[35%]  "></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
