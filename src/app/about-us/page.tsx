export const dynamic = 'force-dynamic';


import Breadcrumbsbanner from '@/components/shared/Breadcrumbsbanner'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import { fetchAbout } from '@/lib/query/Query'
import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'

const page = async() => {
  const about = await fetchAbout()
  // console.log(about.data)
  const data = await about.data

  return (
    <>
      <Breadcrumbsbanner />
      <section className="max-w-[1420px] mx-auto px-4 py-8 ">
        <div className="flex flex-col md:flex-row items-center md:gap-14 mb-10" >
          <div className="md:w-1/2">
            <Image src="/team/About_us.jpg" alt="militarypcs" width={300} height={100} className="w-full h-full mb-8 rounded-3xl" unoptimized />
          </div>
          <div className="md:w-1/2">
            {/* <h1 className="h2 mb-6">Welcome to MilitaryPCS.com where Military Families come first!</h1> */}
            <h1 className="h2 mb-6">{data.heading1}</h1>
            <div className="text-black mb-4 md:mb-8 text-left" dangerouslySetInnerHTML={{ __html: data.description1 }} />

            {/* <p className="text-base text-gray-700 mb-6 leading-8">Founded in 2022 by Army Veteran and Mortgage Executive Jonathan Mullins—bringing over 23 years of real estate and VA loan expertise. MilitaryPCS.com was built with one clear mission: To connect military families with trusted, vetted professionals who understand their journey.
              <br />
              We are a dedicated team of military veterans and spouse professionals, and small business owners committed to delivering education, advocacy, and real value to the community we proudly serve. </p>

            <p className="text-gray-700 mb-6 leading-8">

            </p>
            <p className='mb-2'>What We Stand For:</p>
            <ul className="space-y-4 mb-6 ">
              {[
                'Putting Military Families First—its not just a statement, it’s a requirement',
                'Military Serving Military—because shared experience matters',
                'Accountability—holding companies and professionals to the highest standard when serving those who serve',
                'Creating Lasting Impact—making real positive change for military families everywhere.',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-400 text-base"><FaCheckCircle /></span>
                  <span className="font-medium text-black">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mb-6 leading-8">
              Whether you’re settling into a new duty station or preparing for a PCS move, we’re here to make your transition smoother and your experience better
            </p> */}
            <Button variant="primary" href="/">
              Conatact Us <IoIosArrowRoundForward className=" text-black text-lg" />
            </Button>
          </div>
        </div>
      </section>
      <section className="max-w-[1420px] mx-auto px-4 mb-14">
        {/* <h2 className='h2'>Connect with Verified Military Veteran & Spouse Professionals:</h2> */}
          <h1 className="h2 mb-6">{data.heading2}</h1>
            <div className="text-black mb-4 md:mb-8 text-left" dangerouslySetInnerHTML={{ __html: data.description2 }} />


        {/* <p className='mb-2'>Connect with Verified Professionals:</p> */}

        {/* <ul className="space-y-4 mb-10 ">
          {[
            'VA Loan Experts',
            'Real Estate Agents',
            'Homeowners Insurance Agents ',
            'Home Service Providers',
            'Local Small Business Owners',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-green-400 text-base"><FaCheckCircle /></span>
              <span className="font-medium text-black">{item}</span>
            </li>
          ))}
        </ul>
        <p className='mb-2'>Explore our network, discover resources, and experience the difference we can make, together. Military serving Military is our passion!
        </p> */}

      </section>

    </>

  )
}

export default page