
import { IMAGE_BASE_URL } from '@/lib/constants';
import { fetchHome } from '@/lib/query/Query';
import Image from 'next/image';
import React from 'react'

const Intro = async () => {

    const section1 = await fetchHome();

    const data = section1.section1.data
    const title = section1.section1.titleData[0]
    const section1_descriptionbottom = section1.section1.titleData[0].section1_descriptionbottom
    const section1_descriptiontop =section1.section1.titleData[0].section1_descriptiontop



    console.log(section1)
    console.log(section1_descriptionbottom)
    // console.log(title, "title ")



    return (
        <section className="py-8 md:py-16 bg-[#f9f9f9]">
            <div className="max-w-[1420px] mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="h2 mb-4">
                        {/* Welcome to MilitaryPCS.com — Built by Military, for Military */}
                        {title.section1_title}
                    </h2>

                    <div className="text-black mb-4 md:mb-8 text-left" >
                        {/* {title.section1_descriptiontop} */}
                        <div className="text-black mb-4 md:mb-8 text-left" dangerouslySetInnerHTML={{ __html:section1_descriptiontop}} />
                        
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
                    {
                        data.map((card: any) => (

                            <div key={card.id} className="bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] text-left rounded-3xl overflow-hidden  hover:shadow-lg transition px-8 py-6 text-white" >
                                <h3 className='h3 mb-4'>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        ))
                    }
                    
                </div>   
                <>
                </>
                    <div className="text-center ">

                        <div className="text-black text-left" >
                        {/* {title.section1_descriptionbottom} */}
                        <div className="text-black mb-4 md:mb-8 text-left" dangerouslySetInnerHTML={{ __html:section1_descriptionbottom}} />


                        </div>

                    </div>


                </div>
        </section>
    )
}

export default Intro