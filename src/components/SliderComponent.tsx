"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/sponsors/sponsor1.webp",
  "/sponsors/sponsor2.webp",
  "/sponsors/sponsor3.webp",
  "/sponsors/sponsor4.webp",
  "/sponsors/sponsor5.webp",
  "/sponsors/sponsor6.webp",
  "/sponsors/sponsor7.webp",
  "/sponsors/sponsor8.webp",
];

const SliderComponent: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
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
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-[1420px] mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold bg-[linear-gradient(135deg,#b43141,#274768)] bg-clip-text text-transparent mb-12">
          Our Corporate Sponsors <br /> Fueling Resources for Military Families
        </h2>
        <div className=" w-[96%]">

        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i} className="px-4">
              <div className="bg-white rounded-full w-35 h-35 mx-auto flex items-center justify-center ">
                <img src={src} alt={`Logo ${i + 1}`} className="h-25 object-contain" />
              </div>
            </div>
          ))}
        </Slider>
          </div>
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
    className="absolute right-[-32px] top-1/2 transform -translate-y-1/2 pr-4 cursor-pointer text-gray-600 hover:text-black"
    onClick={onClick}
  >
    <FaChevronRight size={24} />
  </div>
);

const PrevArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="absolute left-[-32px] top-1/2 transform -translate-y-1/2 pl-4 cursor-pointer text-gray-600 hover:text-black"
    onClick={onClick}
  >
    <FaChevronLeft size={24} />
  </div>
);

export default SliderComponent;