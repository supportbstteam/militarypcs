import Image from 'next/image'
import React from 'react'
import CountersSection from './ui/CounterSection';

const MilitryBasesMap = () => {
    return (
       

            <div className='bg-[linear-gradient(135deg,_#b43141,_#274768)] w-full mb-24'>
                <section
                    className="max-w-[1420px] relative mx-auto flex items-center justify-center flex-col py-18 px-4 xl:px-0"

                >   <h2 className='text-xl sm:text-3xl font-semibold text-white uppercase mb-16'> Explore Militry Bases Across The U.S.</h2>
                    <Image src="/images/map-image.png" alt="militarypcs" width={300} height={60} quality={100} className="w-[75%]" />

                    <div className='md:absolute bottom-[-100px]'>

                        <CountersSection />
                    </div>
                </section>
            </div>
        
    )
}

export default MilitryBasesMap;