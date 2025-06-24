import { IMAGE_BASE_URL } from '@/lib/constants';
import { fetchHome } from '@/lib/query/Query';
import Image from 'next/image';
import React from 'react'

const Intro = async () => {

    const { data, isLoading, error } = await fetchHome();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading content</div>;
    if (!data) return <div>No content found</div>;

    const section1 = await data.section1[0];
      console.log(section1)
    //   console.log(data.section1[0])

    //   const section2 = data.data.section2[0];
    //   const section3 = data.data.section3[0];
    //   const section4 = data.data.section4[0];
    //   const section5 = data.data.section5[0];

    return (
        <section className="py-8 md:py-16 bg-white">
            <div className="max-w-[1420px] mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="h2 mb-4">
                        {/* Welcome to MilitaryPCS.com — Built by Military, for Military */}
                        {section1.section1_title}
                    </h2>

                    <div className="text-black mb-4 md:mb-8 text-left" dangerouslySetInnerHTML={{ __html: section1.section1_description1 }} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
                    <div className="bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] text-center rounded-3xl overflow-hidden  hover:shadow-lg transition px-7 py-4 text-white" dangerouslySetInnerHTML={{ __html: section1.section1_description2 }}></div>
                    <div className="bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] text-center rounded-3xl overflow-hidden  hover:shadow-lg transition px-7 py-4 text-white" dangerouslySetInnerHTML={{ __html: section1.section1_description3 }}></div>
                    <div className="bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] text-center rounded-3xl overflow-hidden  hover:shadow-lg transition px-7 py-4 text-white" dangerouslySetInnerHTML={{ __html: section1.section1_description4 }}></div>
                    <div className="bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] text-center rounded-3xl overflow-hidden  hover:shadow-lg transition px-7 py-4 text-white" dangerouslySetInnerHTML={{ __html: section1.section1_description5 }}></div>
                    <div className="bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] text-center rounded-3xl overflow-hidden  hover:shadow-lg transition px-7 py-4 text-white" dangerouslySetInnerHTML={{ __html: section1.section1_description6 }}></div>
                    <div className="bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] text-center rounded-3xl overflow-hidden  hover:shadow-lg transition px-7 py-4 text-white" dangerouslySetInnerHTML={{ __html: section1.section1_description7 }}></div>
                </div>




                <div className="text-center ">

                    <div className="text-black mb-4 md:mb-8 text-left" dangerouslySetInnerHTML={{ __html: section1.section1_description8 }} />

                </div>


            </div>
        </section>
    )
}

export default Intro