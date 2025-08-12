"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSponsors } from "@/lib/query/Query";
import Image from "next/image";


// const images = [
//   "/sponsors/sponsor1.webp",
//   "/sponsors/sponsor2.webp",
//   "/sponsors/sponsor3.webp",
//   "/sponsors/sponsor4.webp",
//   "/sponsors/sponsor5.webp",
//   "/sponsors/sponsor6.webp",
//   "/sponsors/sponsor7.webp",
//   "/sponsors/sponsor8.webp",
// ];

const SliderComponent: React.FC = () => {
  const sponsors = useSponsors()
  // console.log(sponsors?.data?.messages, "sponsors");
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <section className=" py-16 pb-20 bg-[#f9f9f9]">
      <div className="max-w-5xl mx-auto ">

        <div className="text-center mb-10 flex justify-center items-center flex-col">
          <h2 className="h2">
            Our Corporate Sponsors <br /> Fueling Resources for Military Families
          </h2>
          <Image src="/assets/stars.png" alt=' ' width={300} height={100} />
          <div className="mt-12 mb-4 h-4  flex justify-center items-center ">
            <p className="w-3/4 psm">Join us to connect service members, veterans, and families, empowering them with resources and community strength.</p>
          </div>
        </div>
        {/* <div className="  "> */}
        <Slider {...settings}>
          {sponsors?.data?.messages.map((sponsor: any) => (
            <div key={sponsor.id} className="px-4">
              <div className=" rounded-[40px] w-40 h-40 mx-auto flex items-center justify-center border border-[#C1C1C1]">
                <img src={sponsor.logo} alt={`Logo ${sponsor.id}`} className="h-30 object-contain" />
              </div>
            </div>
          ))}
        </Slider>
        {/* </div> */}
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
    className="absolute   right-[-150px] top-1/2 transform -translate-y-1/2 pr-4 cursor-pointer text-gray-600 hover:text-black"
    onClick={onClick}
  >
    {/* <FaChevronRight size={24} />  */}
    <Image src="/icons/arrowRight.png" alt="icon" width={60} height={100}></Image>
  </div>
);

const PrevArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="absolute   left-[-150px] top-1/2 transform -translate-y-1/2 pl-4 cursor-pointer text-gray-600 hover:text-black"
    onClick={onClick}
  >
    {/* <FaChevronLeft size={24} /> */}
    <Image src="/icons/arrowLeft.png" alt="icon" width={60} height={100}></Image>
  </div>
);

export default SliderComponent;