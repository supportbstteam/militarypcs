// components/HowItWorks.tsx

"use client"
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuNotebookPen, LuUserRoundPlus } from "react-icons/lu";
import { PiNetworkLight, PiSpeakerSimpleHighLight } from "react-icons/pi";
import { SlBadge, SlBell, SlBubble, SlChart, SlEvent, SlLocationPin, SlNotebook, SlUserFollowing } from "react-icons/sl";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Button from "./ui/Button";




type Step = {
    title: string;
    description: string;
    linkText: string;

};

const HowItWorks: React.FC = () => {
    const [toggle, setToggel] = useState<"members" | "professionals">("members")
    const data = [
        {
            "tab": "members",
            "icon": PiNetworkLight,
            "title": "Join for Free",
            "text": "Verify your military status and unlock exclusive access to verified professionals.",
            "button": "Register Today",
        },
        {
            "tab": "members",
            "icon": LuUserRoundPlus,
            "title": "Search for Professionals",
            "text": "Wherever you’re stationed, find reliable and trusted, military vetted experts ready to help.",
            "button": "Find Professionals",
        },
        {
            "tab": "members",
            "icon": SlLocationPin,
            "title": "Connect & Track",
            "text": "Message professionals directly and manage your service requests easily.",
            "button": "Connect Now",
        },
        {
            "tab": "members",
            "icon": SlBubble,
            "title": "A Platform with Purpose",
            "text": "Created by Military to connect, support, protect and serve military families nationwide.",
            "button": "Join a Platform With Purpose",
        },
        {
            "tab": "professionals",
            "icon": SlBadge,
            "title": "Affordable, Transparent Membership",
            "text": "Unlock access to our military network for a low monthly subscription—significantly less than other platforms. We never take commissions or cut any of your revenue. You keep 100% of what you earn.",
            "button": "Become a Professional",
        },
        {
            "tab": "professionals",
            "icon": PiSpeakerSimpleHighLight,
            "title": "Promote Your Business ",
            "text": "Showcase your professional profile, build your reputation within the military community, and grow your presence near bases across the country.",
            "button": "Grow Your Business",
        },
        {
            "tab": "professionals",
            "icon": SlBell,
            "title": "Receive Service Request",
            "text": "Email notifications will be sent to professionals that are selected by military members in need of their service — track and manage service request in one convenient place.",
            "button": "Connect Now",
        },
        {
            "tab": "professionals",
            "icon": SlChart,
            "title": "Make a Real Impact",
            "text": "This isn’t just another lead platform—it’s a chance to give back, provide support and help make positive changes for military families. Grow your business with purpose!",
            "button": "Connect Now",
        },

    ]

    const TitleData = [
        {
            "tab": "members",
            "h2": "HOW IT WORKS",
            "subTitle": "Supporting military families through simple and secure connections with professionals who understand military life."
        },
        {
            "tab": "professionals",
            "h2": "HOW IT WORKS",
            "subTitle": "We provide PCS resources and match military families with verified, mission-aligned professionals in real estate, VA lending, insurance, home services, and more. Military Serving Military isn’t just our motto—it’s the heart of what we do."
        }
    ]

    return (
        <section className="max-w-[1420px] mx-auto px-4 xl:px-0  py-8 md:py-16">
            <div className="lg:flex justify-between items-start ">

                {TitleData.filter(title => title.tab === toggle).map((title, i) => (
                    <div className="lg:w-[50%]  " key={i}>
                        <h2 className="h2   ">
                            {title.h2}
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mt-2 mb-4">
                            {title.subTitle}
                        </p>
                    </div>
                ))}
                <div className="sm:flex items-center rounded-xl items">
                    <span
                        onClick={() => setToggel("members")}
                        className={` rounded-t-xl sm:rounded-t-none sm:rounded-l-xl cursor-pointer flex items-center justify-center gap-2   text-base font-semibold px-12 py-3  transition duration-100 ${toggle === "members" ? "bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] text-white " : " text-black bg-[#DEDEDE]"}`}

                    >
                        For Military Members
                    </span>
                    <span
                        onClick={() => setToggel("professionals")}
                        className={` rounded-b-xl sm:rounded-b-none sm:rounded-r-xl sm:rounded-br-xl  cursor-pointer flex  items-center justify-center gap-2   text-base font-semibold px-12 py-3 transition duration-100 ${toggle === "professionals" ? "bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] text-white " : " text-black bg-[#DEDEDE]"}`}
                    >
                        For Professionals
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {data
                    .filter(card => card.tab === toggle)
                    .map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <div key={i} className="group hover:transform hover:scale-105 transition-all duration-300">
                                <Icon className="text-4xl text-primary transition-colors group-hover:text-secondary" />
                                <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-0">
                                    {card.title}
                                </h4>
                                <p className="text-base md:text-base leading-8 text-gray-600 mt-2 mb-8">
                                    {card.text}
                                </p>
                                <a
                                    href="/auth/signup"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-sm hover:opacity-80 transition-opacity"
                                >
                                    {card.button}
                                    <IoIosArrowRoundForward className="text-primary text-lg" />
                                </a>
                            </div>
                        );
                    })}
            </div>
            <div className="grid">
                <p className="my-4">Military serving Military matters!</p>
                <Button variant="primary" href="/auth/signup">Join Today</Button>

            </div>







        </section>
    );
};

export default HowItWorks;
