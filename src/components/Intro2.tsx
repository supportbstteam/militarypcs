
import { IMAGE_BASE_URL } from '@/lib/constants';
import { fetchHome } from '@/lib/query/Query';
import Image from 'next/image';
import React from 'react'

const Intro2 = async () => {
    const section1 = await fetchHome();
    const data = section1.section1.data
    
    // console.log(section1)
    // console.log(section1_descriptionbottom)
    // console.log(title, "title ")
    return (
        <section className="py-8 md:py-16 bg-[#E8E8E8]">
            <div className="max-w-5xl mx-auto px-4">
                {/* Heading */}

                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 align-items-stretch mb-8">
                    {
                        data.map((card: any) => (

                            <div key={card.id} className="group text-left rounded-xl overflow-hidden  hover:shadow-lg transition px-8 py-12 text-white bg-white min-h-[310px]" >
                                <h3 className='group-hover:text-primary h3 mb-4 text-black border-l-2 border-primary pl-6  font-bold'>{card.title}</h3>
                                <p className='text-black psm'>{card.description}</p>
                            </div>
                        ))
                    }
                </div>
               
            </div>
        </section>
    )
}

export default Intro2