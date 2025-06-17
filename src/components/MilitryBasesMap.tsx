import Image from 'next/image'
import React from 'react'
import CountersSection from './ui/CounterSection';

const MilitryBasesMap = () => {
    return (


        <div className="bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] w-full py-8 md:py-16 md:mb-24">
            <section
                className="max-w-[1420px] relative mx-auto "
            >
                <div className='flex items-center justify-center flex-col  px-4 xl:px-0 mb-8 '>
                    <h2 className='h2White text-center'> Explore Military Bases Across The U.S.</h2>
                    <p className="text-base md:text-lg text-white mt-2 mb-4">Explore Military Bases—get Resources and Connect with Professionals</p>
                    <Image src="/images/map-image.png" alt="militarypcs" width={300} height={60} quality={100} className="w-[75%]" unoptimized />
                </div>
                    <div className='md:absolute bottom-[-210px] w-full '>
                        <CountersSection />
                    </div>
            </section>
        </div>

    )
}

export default MilitryBasesMap;