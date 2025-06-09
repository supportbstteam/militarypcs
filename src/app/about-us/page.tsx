import Breadcrumbsbanner from '@/components/shared/Breadcrumbsbanner'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'

const page = () => {
  return (
    <>
      <Breadcrumbsbanner/>
    <section className="max-w-[1420px] mx-auto px-4 py-8 ">
      <div className="flex flex-col md:flex-row items-center md:gap-14 mb-10" >
        <div className="md:w-1/2">
          <Image src="/team/About_us.jpg" alt="militarypcs" width={300} height={100} className="w-full h-full mb-8 rounded-3xl" unoptimized />
        </div>
        <div className="md:w-1/2">
          <h1 className="h2 mb-6">Welcome to MilitaryPCS.com</h1>
          <p className="text-xl text-gray-700 mb-6 leading-8">Founded in 2022 by Army Veteran and mortgage executive Jonathan Mullins—bringing over 23 years of real estate and VA loan expertise—MilitaryPCS.com was built with one clear mission:</p>

          <p className="text-gray-700 mb-6 leading-8">
            To connect military families with trusted, vetted professionals who understand their journey.
            <br />
            We are a dedicated team of military professionals committed to delivering education, advocacy, and real value to the community we proudly serve.
          </p>
          <p className='mb-2'>What We Stand For:</p>
          <ul className="space-y-4 mb-10 ">
            {[
              'Military Families First',
              'Military Serving Military—because shared experience matters',
              'Accountability—holding companies and professionals to the highest standard when serving those who serve',
              'Creating Lasting Impact—making real, positive change for military families everywhere',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-green-400 text-base"><FaCheckCircle /></span>
                <span className="font-medium text-black">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mb-6 leading-8">

          </p>
          <Button variant="outlineColor" href="/">
            Conatact Us <IoIosArrowRoundForward className=" text-black text-lg" />
          </Button>
        </div>
      </div>
    </section>
    <section className="max-w-[1420px] mx-auto px-4 ">
      <h2 className='h2'>Whether you’re settling into a new duty station or preparing for a PCS move, we’re here to make your transition smoother and your experience better.</h2>
          <p className='mb-2'>Connect with Verified Professionals:</p>

      <ul className="space-y-4 mb-10 ">
            {[
              'VA Loan Experts',
              'Real Estate Agents',
              'Home Service Providers',
              'Local Small Business Owners',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-green-400 text-base"><FaCheckCircle /></span>
                <span className="font-medium text-black">{item}</span>
              </li>
            ))}
          </ul>
          <p className='mb-2'>All Military Veterans & Military Spouses <br />
          We’re glad you’re here—explore our network, discover your resources, and see the difference we can make, together.
          <br />
          MilitaryPCS.com
          <br />
          Where Military Families Come First.
          </p>

    </section>

    </>

  )
}

export default page