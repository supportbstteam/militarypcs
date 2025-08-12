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
      location: "Camp Lejeune"
    },
    {
      id: 2,
      image: "/services/plumber.png",
      name: "William Patterson",
      title: "Plumber",
      location: "Oceana Naval Air Station"

    },
    {
      id: 3,
      image: "/services/electrician.png",
      name: "Lorenzo Verduzco",
      title: "Plumber",
      location: "Fort Hood"

    },
    {
      id: 4,
      image: "/services/home-inspector.png",
      name: "Rafael Smith",
      title: "Cabinet Installer",
      location: "Camp Lejeune"

    },
    {
      id: 5,
      image: "/services/builder.png",
      name: "Robert Boyd",
      title: "Plumber",
    },
    
    {
      id: 6,
      image: "/services/builder.png",
      name: "Robert Boyd",
      title: "Roofer",
      location: "Fort Belvoir"

      
    },
    {
      id: 7,
      image: "/services/appraiser.png",
      name: "Joe Fletcher",
      title: "Roofer",
      location: "Fort Benning"

    },
    {
      id: 8,
      image: "/services/landscaper.png",
      name: "Benjamin Wade",
      title: "Landscaper",
      location: "Hunter Army Airfield"

    },
    {
      id: 9,
      image: "/services/carpenter.png",
      name: "William Hughes",
      title: "Carpenter",
      location: "Fort Belvoir"

    },
    ,
    {
      id: 10,
      image: "/services/landscaper.png",
      name: "Robert Boyd",
      title: "Roofer",
      location: "Fort Belvoir"

    }
  ];

  return (
    <section className="py-8 md:py-16 bg-white"

    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}

        <div className="text-center mb-10 flex justify-center items-center flex-col">
          <h2 className="h2">
            Popular Military Professionals
          </h2>
          <Image src="/assets/stars.png" alt=' ' width={300} height={100} />
          <div className="mt-12 mb-4 h-4  flex justify-center items-center ">
            <p className=" psm">Recognized for outstanding service, trusted by military families nationwide.</p>
          </div>
        </div>

        {/* Grid */}  
        <div className="grid grid-cols-[2fr_4fr] gap-8">
          <Image src="/assets/professionals.png" alt="militarypcs" width={400} height={100} className=" object-cover" unoptimized />


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            {professionals.map((pro) => (
              <div key={pro?.id} className=" grid grid-cols-[3fr_7fr] rounded-2xl overflow-hidden hover:shadow-lg transition">
                <Image src={pro?.image ?? "/placeholder.png"} alt={pro?.name ?? "Professional"} width={100} height={60} className="w-full h-full object-cover bg-green-500 " />
                <div className=" group bg-[#F8F8F8] hover:bg-white pl-4 flex item-center flex-col justify-center cursor-pointer">
                  <h5 className="font-semibold text-gray-800 group-hover:text-primary text-xl">{pro?.name}</h5>
                  <p className=" text-black text-base">{pro?.title}</p>
                  <p className="text-sm text-gray-500">{pro?.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Button */}
        <div className="mt-8 md:mt-16 text-center">
          <Button variant="primary" href="/professionals">
            Find More Professionals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Professionals;
