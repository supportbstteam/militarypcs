import Image from 'next/image';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Button from './ui/Button';
import { BiArrowFromLeft } from 'react-icons/bi';
import { IoIosArrowRoundForward } from 'react-icons/io';

const TextMediaHome: React.FC<{
  title?: string;
  subtitle?: string;
  media?: React.ReactNode;
}> = ({ title, subtitle, media }) => {
  return (
    <section className="max-w-[1420px] mx-auto px-4 py-8 ">
      <div className="flex flex-col md:flex-row items-center md:gap-14 mb-10" >
        <div className="md:w-1/2">
          <Image src="/images/img1.webp" alt="militarypcs" width={300} height={100} className="w-full h-full mb-8" unoptimized />
        </div>
        <div className="md:w-1/2">
          <h2 className="h2">LOOKING FOR VA LOAN EXPERTS?</h2>
          <p className="text-xl text-gray-700 mb-8 leading-8">Get pre-approved with confidence from professionals who understand your military journey.</p>

          <p className="text-gray-700 mb-6 leading-10">
            Navigating VA loans can be confusing — but it doesn’t have to be.
            <br />
            Our verified VA Loan Experts are veterans and military spouses who guide you step-by-step through the VA home loan process.
          </p>
          <ul className="space-y-4 mb-10 ">
            {[
              'Check your eligibility',
              'Get competitive VA rates',
              'Move smoothly with expert support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-green-400 text-base"><FaCheckCircle /></span>
                <span className="font-medium text-black">{item}</span>
              </li>
            ))}
          </ul>
          <Button variant="outlineColor" href="/">
            Find a VA Loan Expert <IoIosArrowRoundForward className=" text-black text-lg" />
          </Button>

        </div>

      </div>
      <div className="flex flex-col md:flex-row-reverse items-center  md:gap-14 ">
        <div className="md:w-6/12">
          <Image src="/images/img2.webp" alt="militarypcs" width={300} height={60} className="w-full mb-8" unoptimized />
        </div>
        <div className="md:w-6/12">
          <h2 className="h2">LOOKING FOR REAL ESTATE AGENTS?</h2>
          <p className="text-xl text-gray-700 mb-8 leading-8">Buy or sell your home with trusted agents who understand PCS moves.</p>

          <p className="text-gray-700 mb-6 leading-10">
            Military relocations are stressful — but the right agent makes all the difference. <br />
            Our verified Real Estate Agents are veterans or military spouses who specialize in helping service members and their families transition smoothly.
          </p>
          <ul className="space-y-4 mb-10 ">
            {[
              'Local experts near your base',
              'Experienced in VA loan transactions',
              'Supportive throughout your PCS journey',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-green-400 text-base"><FaCheckCircle /></span>
                <span className="font-medium text-black">{item}</span>
              </li>
            ))}
          </ul>
          <Button variant="outlineColor" href="/">
            Find a Real Estate Agent <IoIosArrowRoundForward className=" text-black text-lg" />
          </Button>

        </div>

      </div>







    </section>
  );
}
export default TextMediaHome;