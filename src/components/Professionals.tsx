import React from "react";
import Button from './ui/Button';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

const Professionals = () => {
  const professionals = [
    {
      id: 1,
      image: "/services/roofer.png",
      name: "Hendry Thompson",
      title: "Plumber",
    },
    {
      id: 2,
      image: "/services/plumber.png",
      name: "William Patterson",
      title: "Plumber",
    },
    {
      id: 3,
      image: "/services/electrician.png",
      name: "Lorenzo Verduzco",
      title: "Plumber",
    },
    {
      id: 4,
      image: "/services/home-inspector.png",
      name: "Rafael Smith",
      title: "Plumber",
    },
    {
      id: 5,
      image: "/services/builder.png",
      name: "Robert Boyd",
      title: "Plumber",
    },
    {
      id: 6,
      image: "/services/appraiser.png",
      name: "Joe Fletcher",
      title: "Plumber",
    },
    {
      id: 7,
      image: "/services/landscaper.png",
      name: "Benjamin Wade",
      title: "Plumber",
    },
    {
      id: 8,
      image: "/services/carpenter.png",
      name: "William Hughes",
      title: "Plumber",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-[1420px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="h2 mb-4">
            POPULAR MILITARY PROFESSIONALS
          </h2>
          <p className="text-black mb-4 md:mb-16">
            Recognized for outstanding service, trusted by military families nationwide.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {professionals.map((pro) => (
            <div key={pro.id} className="bg-white flex items-center gap-4 p-4">
              <Image src={pro.image} alt={pro.name} width={300} height={60} className="w-16 h-16 rounded-full object-cover" />
              
              <div>
                <h5 className="font-semibold text-gray-800">{pro.name}</h5>
                <p className="text-sm text-gray-500">{pro.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 md:mt-16 text-center">
          <Button variant="outlineColor" href="/professionals">
            Find More Professionals <IoIosArrowRoundForward className=" text-black text-lg" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Professionals;
