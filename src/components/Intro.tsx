import Image from 'next/image';
import React from 'react'

const Intro = () => {
    const data = [
        {
            id: 1,
            title: "Exclusive Military-Only Network",
            description: "We only promote military-affiliated professionals (veterans and spouses) to serve our members. No other platform holds this standard of loyalty and connection.",
        },
        {
            id: 2,
            title: "Empowering Military Professionals",
            description: "Whether you’re a realtor, loan officer, plumber, or contractor — MilitaryPCS.com helps you grow your business and income by serving those who share your values, without taking a cut of your hard-earned commission.",
        },
        {
            id: 3,
            title: "Saving Families Thousands",
            description: "Our mortgage partners must commit to eliminating junk fees like origination, underwriting, and processing fees. This alone can save military families thousands when buying a home.",
        },
        {
            id: 4,
            title: "Raising Industry Standards",
            description: "As our member base grows, we will influence service industries near every base, forcing competitors to either match our standards or lose business.",
        },
        {
            id: 5,
            title: "Free Tools & Education",
            description: "From credit building to VA loan strategies, we deliver free resources to help military families build wealth and navigate PCS moves with confidence.",
        },
        {
            id: 6,
            title: "Protecting Our Own",
            description: "We advocate against predatory companies and support military families with nonprofit-backed initiatives like closing cost assistance and job transition opportunities.",
        }
    ];
    return (
        <section className="py-8 md:py-16 bg-white">
            <div className="max-w-[1420px] mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="h2 mb-4">
                        Welcome to MilitaryPCS.com — Built by Military, for Military
                    </h2>
                    <p className="text-black mb-4 md:mb-8 text-left">
                        At MilitaryPCS.com, we believe in the power of our community to create something bigger than ourselves. This isn’t just another resource platform — it’s a mission-driven movement to transform how military families connect, move, thrive and are served by others.
                        <br />
                        <br />
                        When you share MilitaryPCS.com with other military families, you help build a powerful network of members and professionals who understand the unique challenges and lifestyle of military life. The more we grow together, the more impact we make — saving time, money, and bringing peace of mind to every military family that joins.

                    </p>
                    <p className="text-black mb-4 md:mb-8 text-left">
                        Here’s how MilitaryPCS.com delivers unmatched value:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
                    {data.map((d) => (
                        <div
                            key={d.id}
                            className="bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] text-center rounded-3xl overflow-hidden  hover:shadow-lg transition px-7 py-4 "
                        >
                            <h3 className="text-xl font-semibold text-white my-3">
                                {d.title}
                            </h3>
                            <p className="text-sm text-white mb-3">
                                {d.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center ">
                    <p className="text-black mb-4 md:mb-8">
                        Together, we are creating something powerful — a trusted ecosystem where military serves military, and everyone wins.

                    </p>
                    <p className="text-black mb-4 md:mb-8 font-semibold">
                        Invite a fellow military family to join today — the bigger we grow, the stronger we become.
                    </p>
                </div>


            </div>
        </section>
    )
}

export default Intro