"use client"
import React from "react";
import Button from './ui/Button';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Image from 'next/image';

import { GoArrowRight } from "react-icons/go";
import { usePathname } from "next/navigation";
import Link from "next/link";


const Services = () => {
  const path = usePathname();
  const servicesData = [
    {
      id: 1,
      image: "/services/roofer.png",
      title: "Roofer",
      description: "Find trusted plumbers for all your home needs.",
    },
    {
      id: 2,
      image: "/services/plumber.png",
      title: "Plumber",
      description: "Hire certified Plumber for safe and reliable service.",
    },
    {
      id: 3,
      image: "/services/electrician.png",
      title: "Electrician",
      description: "Hire certified Plumber for safe and reliable service.",
    },
    {
      id: 4,
      image: "/services/home-inspector.png",
      title: "Home Inspector",
      description:
        "Transform your yard with professional landscaping services.",
    },
    {
      id: 5,
      image: "/services/builder.png",
      title: "Builder",
      description: "Get your home sparkling clean with expert cleaners.",
    },
    {
      id: 6,
      image: "/services/appraiser.png",
      title: "Appraiser",
      description: "Get your home sparkling clean with expert cleaners.",
    },
    {
      id: 7,
      image: "/services/landscaper.png",
      title: "Landscaper",
      description: "Get your home sparkling clean with expert cleaners.",
    },
    {
      id: 8,
      image: "/services/carpenter.png",
      title: "Carpenter",
      description: "Get your home sparkling clean with expert cleaners.",
    },
    {
      id: 9,
      image: "/services/cabinet-installer.png",
      title: "Cabinet Installer",
      description: "Get your home sparkling clean with expert cleaners.",
    },
    {
      id: 10,
      image: "/services/general-contractor.png",
      title: "General Contractor",
      description: "Get your home sparkling clean with expert cleaners.",
    },
  ];

  return (
    <section className=" py-8 md:py-16 bg-[#F8F8F8]">
      {/* <section className="bg-primary py-16 "> */}
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Heading */}
        {path === "/" ?
          <div className="text-center mb-10 flex justify-center items-center flex-col">
            <h2 className="h2">
              Need Trusted Home Services Pros?
            </h2>
            <Image src="/assets/stars.png" alt=' ' width={300} height={100} />
            <div className="mt-12 mb-4 h-4  flex justify-center items-center ">
              <p className=" psm">Connect with verified military veterans and spouse professionals for everything from home inspections, plumbing, painting - and much more, all near your base.</p>
            </div>
          </div>
          : ""}

        {/* Services Grid */}
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"> */}
      <div className="grid grid-cols-10  justify-center items-center ">
        {servicesData.map((service, i) => (
          <section
            className="relative bg-contain bg-top bg-no-repeat md:bg-cover flex justify-center items-end h-48 p-4 "
            style={{
              // backgroundImage: `url('/images/Hero-1.webp'), linear-gradient(135deg, #b43141, #274768)`,
              // backgroundImage: ` ${"url('/assets/bgnew.png')"}`,
              // backgroundImage: ` ${"url({`{service.image}`})"}`,
              backgroundImage: `url(${service.image})`,
            }}>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_theme('colors.primary'),_theme('colors.secondary'))] hover-bg-primary opacity-80 z-0"></div>
            <></>
            <div className="relative z-10 flex items-center">
            {/* 
              <div className="flex justify-center items-center  bg-green-500 h-48"> */}

                  <p className="text-white font-semibold text-xs text-center ">
                    {service.title}
                  </p>

               
              {/* </div>
             */}
             </div>
          </section>
        ))}
      </div>


      {/* CTA Button */}
      {path === "/" ?
        <div className="mt-8 md:mt-16 text-center">
          <Button variant="primary" href="/services">
            View All Home Services <IoIosArrowRoundForward className=" text-white text-lg" />
          </Button>
        </div>
        : ""}
    </section>
  );
};

export default Services;
