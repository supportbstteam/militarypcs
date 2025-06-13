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
      <div className="flex flex-col md:flex-row items-stretch md:gap-14 mb-10 " >
        <div className="md:w-1/2  h-full">
          <Image src="/images/img1.webp" alt="militarypcs" width={300} height={100} className="w-full h-full object-cover" unoptimized />
        </div>
        <div className="md:w-1/2">
          <h2 className="h2 mt-8">LOOKING FOR VA LOAN EXPERTS?</h2>
          <p className="text-xl text-gray-700 mb-8 leading-8">Get pre-approved with confidence from vetted mortgage professionals who understand your military journey.</p>

          <p className="text-gray-700 mb-6 leading-8">Navigating the VA loan process can feel overwhelming — but it doesn’t have to be.
            <br />
            Our VA Loan Experts are <span className='font-bold'> military veterans and spouses </span> who will guide you step-by-step through the VA home loan process.
          </p>
          <ul className="space-y-4 mb-10 ">
            {[
              'Check your eligibility',
              'Know your buying power and receive pre-approval',
              'Receive competitive VA rates',
              'Save Big with lower closing cost',
              'Move smoothly with expert support and care',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-green-400 text-base"><FaCheckCircle /></span>
                <span className="font-medium text-black">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-gray-700 mb-8 leading-8">Start your VA Loan journey with trusted experts who lived the military lifestyle just like you!</p>

          <Button variant="outlineColor" href="/">
            Find a VA Loan Expert <IoIosArrowRoundForward className=" text-black text-lg" />
          </Button>

        </div>

      </div>


      <div className="flex flex-col md:flex-row-reverse items-center  md:gap-14 mb-10">
        <div className="md:w-6/12">
          <Image src="/images/img2.webp" alt="militarypcs" width={300} height={60} className="w-full mb-8" unoptimized />
        </div>
        <div className="md:w-6/12">
          <h2 className="h2">LOOKING FOR REAL ESTATE AGENTS? </h2>
          <p className="text-xl text-gray-700 mb-8 leading-8">Buy or Sell your home with vetted real estate agents who understand PCS moves.</p>

          <p className="text-gray-700 mb-6 leading-8">
            Military relocations can be stressful — but having the right real estate agent makes all the difference. <br />
            Our Real Estate Agents are <span className='font-bold'> military veterans or spouses</span>, who specialize in helping service members and their families navigate the transition with confidence.
          </p>
          <ul className="space-y-4 mb-10 ">
            {[
              'Local Market Experts Near Your Base',
              'Skilled in VA Loan Transactions ',
              'Some of the Best Negotiators in the Real Estate Industry',
              ' Dedicated Support Throughout Your PCS Journey',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-green-400 text-base"><FaCheckCircle /></span>
                <span className="font-medium text-black">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-gray-700 mb-8 leading-8">Find a real estate agent who truly understands your military lifestyle — because they’ve lived it too!</p>

          <Button variant="outlineColor" href="/">
            Find a Real Estate Agent <IoIosArrowRoundForward className=" text-black text-lg" />
          </Button>

        </div>

      </div>

      <div className="flex flex-col md:flex-row items-center md:gap-14 md:mb-12 " >
        <div className="md:w-1/2 rounded-2xl "   
        >
          <Image src="/assets/InsuranceAgent.jpg" alt="militarypcs" width={300} height={100} className="w-full h-full object-cover rounded-2xl" unoptimized />
        </div>
        <div className="md:w-1/2">
          <h2 className="h2 mt-8">LOOKING FOR HOMEOWNERS INSURANCE AGENTS?</h2>
          <p className="text-xl text-gray-700 mb-8 leading-8">Protect your home with coverage tailored to military families—provided by trusted, verified insurance experts</p>

          <p className="text-gray-700 mb-6 leading-8">Searching for the right homeowner’s insurance policy can be daunting, but it doesn’t have to be.
            <br />
            Our network of Licensed Insurance Agents are <span className='font-bold'> military veterans and spouses </span> who understand the unique needs of service members. Whether you’re buying a new home or looking to update your existing policy after a PCS move, we’ve got you covered.
          </p>
          <ul className="space-y-4 mb-10 ">
            {[
              'Customized Insurance Coverage for Military Families',
              'Verified, Trusted Insurance Professionals',
              'Bundle Insurance Policies to Save Big',
              'Support Through Every Step of the Process',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-green-400 text-base"><FaCheckCircle /></span>
                <span className="font-medium text-black">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-gray-700 mb-8 leading-8">Get the home protection you deserve today — from insurance experts who understand your service.</p>

          <Button variant="outlineColor" href="/">
            Find a Homeowners Insurance <IoIosArrowRoundForward className=" text-black text-lg" />
          </Button>

        </div>

      </div>





    </section>
  );
}
export default TextMediaHome;