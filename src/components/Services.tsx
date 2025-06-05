import React from "react";
import Button from './ui/Button';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Image from 'next/image';

import { GoArrowRight } from "react-icons/go";


const Services = () => {
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
    <section className="bg-[linear-gradient(135deg,_#b43141,_#274768)] py-16 ">
      <div className="max-w-[1420px] mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="h2White uppercase">
            Need Trusted Home Services Pros?
          </h2>
          <p className="text-white mt-2 mb-16 ">
            Connect with verified veteran and military spouse professionals for everything from plumbing to painting — all near your base.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white text-center rounded-2xl overflow-hidden  hover:shadow-lg transition"
            >
            <Image src={service.image} alt={service.title} width={300} height={100} className="w-full                   " unoptimized />
                
              <h5 className="text-sm font-medium text-black my-3">
                {service.title}
              </h5>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Button variant="outline" href="/">
            View All Home Services <IoIosArrowRoundForward className=" text-white text-lg" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
