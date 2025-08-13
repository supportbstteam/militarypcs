"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Button from './ui/Button';
import { BiArrowFromLeft } from 'react-icons/bi';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { fetchHome } from '@/lib/query/Query';
import { IMAGE_BASE_URL } from '@/lib/constants';
import { Check } from 'lucide-react';



const list = [
  "Check your eligibility",
  "Know your buying power and receive pre-approval",
  "Receive competitive VA rates",
  "Save Big with lower closing cost",
  "Move smoothly with expert support and care",
]
const list2 = [
  "Local Market Experts Near Your Base",
  "Skilled in VA Loan Transactions",
  "Some of the Best Negotiators in the Real Estate Industry",
  "Dedicated Support Throughout Your PCS Journey",
]
const list3 = [
  "Customized Insurance Coverage for Military Families",
  "Verified & Trusted Insurance Professionals",
  "Bundle Insurance Policies to Save Big",
  "Support Through Every Step of the Process",
]

const TextMediaHome: React.FC<{
  title?: string;
  subtitle?: string;
  media?: React.ReactNode;
}> =  ({ title, subtitle, media }) => {



  const [activeTab, setActiveTab] = useState("loan")


  return (
    <>
      <section className=" bg-primary pt-16">
        <div className=" max-w-5xl mx-auto text-center mb-10 flex justify-center items-center flex-col">
          <h2 className="h2 text-white">
            Find a Professional
          </h2>
          <Image src="/assets/stars.png" alt=' ' width={300} height={100} />
          <div className="mt-12 mb-4 h-4  flex justify-center items-center ">
            <p className="w-3/5 psm text-white">Our homeownership experts save military families a lot of money and time - by delivering lower rates, lower cost and superior service. We got your six!</p>
          </div>
        </div>
        <div className='max-w-5xl mx-auto grid grid-cols-3 bg-[#c1c1c1] rounded-t-3xl overflow-hidden '>
          <span className={` px-8 py-8 flex items-center hover:bg-white cursor-pointer ${activeTab ==="loan" ? "bg-white font-semibold" : ""} `} onClick={()=>setActiveTab("loan")}><h4 className='h4 text-lg text-black'>Looking for <br /> VA Loan Experts?</h4></span>
          <span className={` px-8 py-8 flex items-center hover:bg-white cursor-pointer ${activeTab ==="estate" ? "bg-white font-semibold" : ""} `} onClick={()=>setActiveTab("estate")}><h4 className='h4 text-lg text-black'>Looking for <br /> Real Estate Agents?</h4></span>
          <span className={` px-8 py-8 flex items-center hover:bg-white cursor-pointer ${activeTab ==="insurance" ? "bg-white font-semibold" : ""} `} onClick={()=>setActiveTab("insurance")}><h4 className='h4 text-lg text-black'>Looking for Homeowners Insurance Agents?</h4></span>
        </div>


      </section>
      {activeTab==="loan" && 


      <section className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:gap-14 py-8 md:py-16 px-4 md:px-0" >
          <div className=" md:w-1/2 rounded-2xl  bg-contain bg-top bg-no-repeat md:bg-cover overflow-hidden flex justify-center items-center"
          // style={{ backgroundImage: `url('${IMAGE_BASE_URL}${section3.image}')` }}
          >
            <Image src="/assets/loan.png" alt="militarypcs" width={400} height={100} className=" object-cover" unoptimized />
          </div>

          <div className="md:w-1/2 ">

            <div className=" divide-y-2 divide-[#c1c1c1] flex flex-col gap-8"  >
              <div className='pb-8 flex flex-col gap-6'>
                <h3 className="h3">Get pre-approved with confidence from vetted mortgage professionals who understand your military journey.</h3>

                <p><span className='psm font-semibold'>Navigating</span>  the VA loan process can feel overwhelming — but it doesn’t have to be.</p>
                <p> <span className='psm font-semibold'>Our VA Loan Experts are military veterans and spouses</span> who will guide you step-by-step through the VA home loan process.</p>
              </div>
              <ul className='flex flex-col gap-2 pb-8'>
                {
                  list.map((li, i) => (

                    <li key={i} className='flex gap-2 font-semibold'> <Check color="#5F9037" strokeWidth={3} /> {li}</li>
                  ))
                }
              </ul>
              <div >
                <p className='mb-8'><span className='psm font-semibold'>Start your VA Loan journey </span>with trusted experts who lived the military lifestyle just like you!</p>

                <Button variant="primary" href="/auth/signup">
                  Search for Professionals
                </Button>
              </div>

            </div>


          </div>

        </div>
      </section>
      }
      {activeTab==="estate" && 


      <section className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:gap-14 py-8 md:py-16 px-4 md:px-0" >
          <div className=" md:w-1/2 rounded-2xl  bg-contain bg-top bg-no-repeat md:bg-cover overflow-hidden flex justify-center items-center"
          // style={{ backgroundImage: `url('${IMAGE_BASE_URL}${section3.image}')` }}
          >
            <Image src="/assets/estate.png" alt="militarypcs" width={400} height={100} className=" object-cover" unoptimized />
          </div>

          <div className="md:w-1/2 ">

            <div className=" divide-y-2 divide-[#c1c1c1] flex flex-col gap-8"  >
              <div className='pb-8 flex flex-col gap-6'>
                <h3 className="h3">Buy or Sell your home with vetted real estate agents who understand PCS moves.</h3>

                <p><span className='psm font-semibold'>Military relocations can be stressful —</span>  but having the right real estate agent makes all the difference.</p>
                <p> <span className='psm font-semibold'>Our Real Estate Agents are military veterans or spouses,</span> who specialize in helping service members and their families navigate the transition with confidence.</p>
              </div>
              <ul className='flex flex-col gap-2 pb-8'>
                {
                  list2.map((li, i) => (

                    <li key={i} className='flex gap-2 font-semibold'> <Check color="#5F9037" strokeWidth={3} /> {li}</li>
                  ))
                }
              </ul>
              <div >
                <p className='mb-8'><span className='psm font-semibold'>Find a real estate agent </span>who truly understands your military lifestyle — because they’ve lived it too!</p>

                <Button variant="primary" href="/auth/signup">
                  Search for Professionals
                </Button>
              </div>

            </div>


          </div>

        </div>
      </section>
      }
      {activeTab==="insurance" && 

      <section className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:gap-14 py-8 md:py-16 px-4 md:px-0" >
          <div className=" md:w-1/2 rounded-2xl  bg-contain bg-top bg-no-repeat md:bg-cover overflow-hidden flex justify-center items-center"
          // style={{ backgroundImage: `url('${IMAGE_BASE_URL}${section3.image}')` }}
          >
            <Image src="/assets/insurance.png" alt="militarypcs" width={400} height={100} className=" object-cover" unoptimized />
          </div>

          <div className="md:w-1/2 ">

            <div className=" divide-y-2 divide-[#c1c1c1] flex flex-col gap-8"  >
              <div className='pb-8 flex flex-col gap-6'>
                <h3 className="h3">Protect your home with coverage tailored to military families—provided by trusted, verified insurance experts.</h3>

                <p><span className='psm font-semibold'>Searching</span>  for the right homeowner’s insurance policy can be daunting, but it doesn’t have to be.</p>
                <p> <span className='psm font-semibold'>Our network of Licensed Insurance Agents are military veterans and spouses</span> who understand the unique needs of service members. Whether you’re buying a new home or looking to update your existing policy after a PCS move, we’ve got you covered.</p>
              </div>
              <ul className='flex flex-col gap-2 pb-8'>
                {
                  list3.map((li, i) => (

                    <li key={i} className='flex gap-2 font-semibold'> <Check color="#5F9037" strokeWidth={3} /> {li}</li>
                  ))
                }
              </ul>
              <div >
                <p className='mb-8'><span className='psm font-semibold'>Get the home protection</span>you deserve today — from insurance experts who understand your service.</p>

                <Button variant="primary" href="/auth/signup">
                  Search for Professionals
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      }
    </>

  );
}
export default TextMediaHome;