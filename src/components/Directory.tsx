import React from "react";
import Button from './ui/Button';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Image from 'next/image';

import { GoArrowRight } from "react-icons/go";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { fetchDirectory } from "@/lib/query/Query";
import slugify from "slugify";

const Directory = async (directoryData: any) => {
  const data = await directoryData

  // console.log(data.directoryData)

  return (
    <section className="bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] py-8 md:py-16 ">
      {/* <section className="bg-primary py-16 "> */}
      <div className="max-w-[1420px] mx-auto px-4">

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {data.directoryData.map((directory: any) => (
            <Link key={directory.id} href={`/directories/${slugify( directory.title)}-${directory.id}`}>
              <div
                className="bg-white text-center rounded-3xl overflow-hidden  hover:shadow-lg transition"
              >
                {/* <Image src={directory.image} alt={directory.title} width={300} height={100} className="w-full" unoptimized /> */}
                <h5 className="text-sm font-medium text-black my-3">
                  {directory.title}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directory;
