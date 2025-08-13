"use client"
import React from "react";
import Button from './ui/Button';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Image from 'next/image';
import Slider, { Settings } from "react-slick";


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

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className=" py-8 md:py-16 bg-[#F8F8F8]">
      {/* <section className="bg-primary py-16 "> */}
      <div className="max-w-[1920px] m-auto mx-auto ">
        {/* Section Heading */}
        {path === "/" ?
          <div className="text-center mb-10 flex justify-center items-center flex-col">
            <h2 className="h2">
              Need Trusted Home Services Pros?
            </h2>
            <Image src="/assets/stars.png" alt=' ' width={300} height={100} />
            <div className="mt-12 mb-4 h-4  flex justify-center items-center ">
              <p className=" psm w-2/3">Connect with verified military veterans and spouse professionals for everything from home inspections, plumbing, painting - and much more, all near your base.</p>
            </div>
          </div>
          : ""}

        {/* Services Grid */}
      <div className="">
        <Slider {...settings}>
          {servicesData.map((service, i) => (
            <section
              key={i}
              className="relative flex justify-center items-end h-80 bg-cover bg-center bg-red-400"
              >
              <Image 
                src={service.image} 
                alt=' image' 
                width={300} 
                height={800} 
                className="h-80 object-cover absolute inset-0 z-0" 
                />

              <div className="relative z-1 bg-[linear-gradient(180deg,#00286850,#002868)] hover:bg-[linear-gradient(180deg,#BF0A3010,#BF0A30)]  hover:opacity-70 h-80"></div>
              <div className=" relative bottom-14 z-2 flex items-center justify-center w-full">
                <p className="text-white font-medium text-base text-center ">
                  {service.title}
                </p>
              </div>
            </section>
          ))}
        </Slider>

      </div>


      {/* CTA Button */}
      {path === "/" ?
        <div className="mt-8 md:mt-16 text-center">
          <Button variant="primary" href="/services">
            More Professionals
          </Button>
        </div>
        : ""}
      </div>

      <style jsx global>{`
        .slick-dots {
          margin-top: 1.5rem;
          
        }
        .slick-dots li button:before {
          color: #6b7280;
        }
        .slick-dots li.slick-active button:before {
          color: #b43141;
        }
        .slick-arrow {
          z-index: 10;
        }
      `}</style>
    </section>
  );
};
const NextArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="absolute   right-[500px] top-90 transform -translate-y-1/2 pr-4 cursor-pointer text-gray-600 hover:text-black"
    onClick={onClick}
  >
    {/* <FaChevronRight size={24} />  */}
    <Image src="/icons/arrowRight.png" alt="icon" width={60} height={100}></Image>
  </div>
);

const PrevArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="absolute   left-[500px] top-90 transform -translate-y-1/2 pl-4 cursor-pointer text-gray-600 hover:text-black"
    onClick={onClick}
  >
    {/* <FaChevronLeft size={24} /> */}
    <Image src="/icons/arrowLeft.png" alt="icon" width={60} height={100}></Image>
  </div>
);
export default Services;
