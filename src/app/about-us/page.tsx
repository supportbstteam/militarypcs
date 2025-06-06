import Button from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'

const page = () => {
  return (
    <section className="max-w-[1420px] mx-auto px-4 py-8 ">
      <div className="flex flex-col md:flex-row items-center md:gap-14 mb-10" >
        <div className="md:w-1/2">
          <Image src="/team/image.png" alt="militarypcs" width={300} height={100} className="w-full h-full mb-8 rounded-3xl" unoptimized />
        </div>
        <div className="md:w-1/2">
          <h1 className="h2 mb-6">Welcome to MilitaryPCS where passion meets purpose.</h1>
          <p className="text-xl text-gray-700 mb-6 leading-8">We are a team of dedicated professionals committed to delivering quality, innovation, and value in everything we do.</p>

          <p className="text-gray-700 mb-6 leading-8">

            Founded in 2025, our mission is to provide best services. Over the years, we’ve grown from a small startup into a trusted name, thanks to our loyal customers and talented team.
            <br />
            At MilitaryPCS we believe in:
          </p>
          <ul className="space-y-4 mb-10 ">
            {[
              'Putting people first',
              'Constant improvement',
              'Transparent communication',
              'Creating lasting impact',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-green-400 text-base"><FaCheckCircle /></span>
                <span className="font-medium text-black">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mb-6 leading-8">

            Whether you're a new visitor or a returning client, we’re glad you’re here. Explore our services and see how we can make a difference—together.
          </p>
          <Button variant="outlineColor" href="/">
            Conatact Us <IoIosArrowRoundForward className=" text-black text-lg" />
          </Button>

        </div>

      </div>
    </section>
  )
}

export default page