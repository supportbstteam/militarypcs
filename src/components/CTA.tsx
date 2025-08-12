import React from "react";
import backgroundImage from "images/Hero-1.webp";
import Button from "./ui/Button";
import { CircleArrowRight } from "lucide-react";


const CTA = () => {
  // return (
  //   <section
  //     // className="max-w-[1420px] mx-auto  bg-cover  bg-position-[20%_80%] md:bg-position-[20%_80%] flex items-center rounded-3xl mx-4 p-none"
  //     className="relative max-w-[1420px] mx-auto  bg-cover  bg-position-[20%_80%] md:bg-position-[20%_80%]  flex items-center rounded-3xl p-none overflow-hidden"
  //     style={{ backgroundImage: `url('/assets/CTA.jpg')` }}
  //   >
  //     <div className="absolute inset-0 bg-[linear-gradient(135deg,_#b43141,_#274768)] opacity-60 z-0"></div>
  //     <div className="relative z-10 w-full md:flex flex-col md:flex-row justify-end items-center  md:mt-48 md:mb-8 md:mx-8  md:px-none   ">
  //       <div className="xl:w-[35%] py-38"></div>
  //       <div className=" xl:w-[65%] p-4 py-8 md:p-8  bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] rounded-3xl md:bg-transparent" >
  //         <h3 className=" text-2xl md:text-[42px] sm:leading-12  font-poppins font-semibold text-shadow-2xs text-shadow-gray-600 mb-6 text-white">
  //           Join our mission to connect and empower the military community.
  //         </h3>
  //         <div className="grid md:grid-cols-3 justify-start gap-4">
  //           <Button variant="primary" href="/auth/signup">Create a Free Account</Button>
  //           <Button variant="primary" href="/auth/signup">Become a Partner</Button>
  //           <Button variant="primary" href="/donate">Donate Today</Button>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <section
      className="relative bg-contain bg-top bg-no-repeat md:bg-cover  "
      style={{
        // backgroundImage: `url('/images/Hero-1.webp'), linear-gradient(135deg, #b43141, #274768)`,
        // backgroundImage: ` url('/assets/Homepage1.png')`,
        backgroundImage: ` ${"url('/assets/cta.png')"}`,
      }}>
      <div className="max-w-5xl mx-auto py-14 ">

        <div className="w-[65%]" >
          <div className=" grid gap-6 mb-8" >
            <h2 className='w-[80%] text-4xl font-extrabold inline-block md:mt-2 text-white '>Join our mission to connect and empower the military community</h2>

          </div>
          <div className="flex flex-row gap-4 ">

            <Button variant="icon" size="none" color="white">Create a Free Account
              <CircleArrowRight size={28} strokeWidth={1} color="white" />
            </Button>
            <span className="border border-primary"></span>
            <Button variant="icon" size="none" color="white">Become a Partner
              <CircleArrowRight size={28} strokeWidth={1} color="white" />
            </Button>
            <span className="border border-primary"></span>

            <Button variant="icon" size="none" color="white">Donate Today
              <CircleArrowRight size={28} strokeWidth={1} color="white" />
            </Button>
          </div>

        </div>
        <div className=" w-1/3" ></div>
      </div>

    </section>
  )
};

export default CTA;
