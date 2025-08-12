import Image from 'next/image';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Button from './ui/Button';
import { BiArrowFromLeft } from 'react-icons/bi';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { fetchHome } from '@/lib/query/Query';
import { IMAGE_BASE_URL } from '@/lib/constants';

const TextMediaHome: React.FC<{
  title?: string;
  subtitle?: string;
  media?: React.ReactNode;
}> = async ({ title, subtitle, media }) => {

         const data = await fetchHome();
        //  console.log(data , "data")

    const section3 = await data.section3.section3;
    // console.log(section3 , "text-media-3")
    const section4 = await data.section4[0];
    const section5 = await data.section5[0];
    console.log(section4 , "text-media-5")

  return (
    <>
      <section className="max-w-[1420px] mx-auto">
        <div className="flex flex-col md:flex-row items-stretch md:gap-14 py-8 md:py-16 px-4 md:px-0" >
          <div className=" md:w-1/2 rounded-2xl  bg-contain bg-top bg-no-repeat md:bg-cover overflow-hidden "
            style={{ backgroundImage: `url('${IMAGE_BASE_URL}${section3.image}')` }}
            >
            <Image src={`${IMAGE_BASE_URL}${section3.image}`} alt="militarypcs" width={300} height={100} className="w-full h-full object-cover" unoptimized />
          </div>
         
          <div className="md:w-1/2">
            
            <h2 className="h2 mt-8">{section3.title}</h2>
            <div className="text-black mb-4 md:mb-8 text-left" dangerouslySetInnerHTML={{ __html: section3.description }} />

            <Button variant="primary" href="/auth/signup">
              Find a VA Loan Expert <IoIosArrowRoundForward className=" text-black text-lg" />
            </Button>

          </div>

        </div>
      </section>
      <section className="bg-[#f9f9f9]">
        <div className="max-w-[1420px] mx-auto px-4 md:px-0 py-8 md:py-16 ">


          <div className="flex flex-col md:flex-row-reverse items-stretch  md:gap-14 ">
            <div className=" md:w-1/2 rounded-2xl bg-left bg-contain bg-no-repeat md:bg-cover overflow-hidden "
            style={{ backgroundImage: `url('${IMAGE_BASE_URL}${section4.image}')` }}
              >
              <Image src={`${IMAGE_BASE_URL}${section4.image}`} alt="militarypcs" width={300} height={100} className="w-full h-full object-cover" unoptimized />

            </div>
            <div className="md:w-6/12">
            <h2 className="h2 mt-8">{section4.title}</h2>
            <div className="text-black mb-4 md:mb-8 text-left" dangerouslySetInnerHTML={{ __html: section4.description }} />

              <Button variant="primary" href="/auth/signup">
                Find a Real Estate Agent <IoIosArrowRoundForward className=" text-black text-lg" />
              </Button>

            </div>
          </div>
        </div>

      </section>
      <section className="max-w-[1420px] mx-auto px-4 md:px-0 py-8 md:py-16">

        <div className="flex flex-col md:flex-row items-stretch md:gap-14  " >
          <div className=" md:w-1/2 rounded-2xl  bg-contain bg-right bg-no-repeat md:bg-cover overflow-hidden  "
            style={{ backgroundImage: `url('${IMAGE_BASE_URL}${section5.image}')` }}
            >
            <Image src={`${IMAGE_BASE_URL}${section5.image}`} alt="militarypcs" width={300} height={100} className="w-full h-full object-cover" unoptimized />

          </div>
   
          <div className="md:w-1/2">
             <h2 className="h2 mt-8">{section5.title}</h2>
            <div className="text-black mb-4 md:mb-8 text-left" dangerouslySetInnerHTML={{ __html: section5.description }} />
            <Button variant="primary" href="/auth/signup">
              Find a Homeowners Insurance <IoIosArrowRoundForward className=" text-black text-lg" />
            </Button>

          </div>

        </div>
      </section>
    </>

  );
}
export default TextMediaHome;