
import { IMAGE_BASE_URL } from '@/lib/constants';
import { fetchHome } from '@/lib/query/Query';
import Image from 'next/image';
import React from 'react'

const Intro = async () => {

    return (
        <>
        <section className="py-8 md:py-16 bg-[#ffffff]">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-10 flex justify-center items-center flex-col">
                    <p className='text-2xl'><span className='text-primary'>Welcome</span>  to MilitaryPCS.com</p>
                    <h2 className="h2">
                        Built by Military, for Military
                    </h2>
                    <Image src="/assets/stars.png" alt=' ' width={300} height={100} />
                </div>
                <div className='grid grid-cols-2 gap-12'>
                    <Image src="/assets/intro.png" alt=' ' width={300} height={100} className='w-full rounded-2xl' />
                    <div>
                        <p className='psm'>At MilitaryPCS.com, we believe in the power of our community to create something bigger than ourselves.</p>
                        <div className='font-bold border-l-2 border-primary pl-6 my-6 text-sm'> <p> This isn’t just another resource platform - it’s a mission-driven movement to transform how military families connect, move,thrive and are served by others.</p></div>
                        <p className="psm">When you share MilitaryPCS.com with other military families, you help build a powerful network of members and professionals who understand the unique challenges and lifestyle of military life. The more we grow together, the more impact we make - saving time, money, and bringing peace of mind to every military family that joins.</p>

                    </div>
                </div>
            </div>
        </section>
        <section className='bg-primary'>
            <div className="max-w-5xl mx-auto flex justify-center py-10">
                <p className='text-white text-2xl'>Here’s how MilitaryPCS.com delivers <span className='font-bold'>unmatched value:</span></p>
            </div>
        </section>
        </>

    )
}

export default Intro