
import { IMAGE_BASE_URL } from '@/lib/constants';
import { fetchHome } from '@/lib/query/Query';
import Image from 'next/image';
import React from 'react'
import Button from './ui/Button';

const Intro3 = async () => {
    const section1 = await fetchHome();
    const data = section1.section1.data
    const title = section1.section1.titleData[0]
    const section1_descriptionbottom = section1.section1.titleData[0].section1_descriptionbottom
    const section1_descriptiontop = section1.section1.titleData[0].section1_descriptiontop

    return (
            <section
                  className="relative bg-contain bg-top bg-no-repeat md:bg-cover  "
                  style={{
                    // backgroundImage: `url('/images/Hero-1.webp'), linear-gradient(135deg, #b43141, #274768)`,
                    // backgroundImage: ` url('/assets/Homepage1.png')`,
                    backgroundImage: ` ${"url('/assets/intro3.png')"}`,
                  }}>
            <div className="max-w-5xl mx-auto py-14 ">

                    <div className="w-[55%]" >
                        <div className=" grid gap-6 mb-6" >
                            <h2 className='text-4xl font-extrabold inline-block md:mt-2 text-white '>Invite a fellow military family to join today - the bigger we grow, the stronger we become.</h2>
                            <p className='text-white'>Together, we are creating something powerful - a trusted ecosystem where military serves military, and everyone wins.</p>
                            <>
                            </>
                        </div>
                            <Button size='md'>Join Now</Button>
                    </div>
                    <div className=" w-1/3" ></div>
                    </div>
                    
        </section>
    )
}

export default Intro3