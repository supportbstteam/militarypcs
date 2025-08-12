
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
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";


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
        <section className="max-w-5xl mx-auto px-4 xl:px-0  py-8 md:py-16">
            <div className=" flex flex-col justify-center items-center">

                {TitleData.filter(title => title.tab === toggle).map((title, i) => (

                    <div key={i} className="text-center mb-10 flex justify-center items-center flex-col">
                        <h2 className="h2">
                            {title.h2}
                        </h2>
                        <Image src="/assets/stars.png" alt=' ' width={300} height={100} />
                        <div className="mt-12 mb-4 h-4  flex justify-center items-center ">

                            <p>{title.subTitle}</p>
                        </div>

                    </div>
                ))}
                <div className="flex items-center justify-center rounded-full  w-fit border border-black">
                    <span
                        onClick={() => setToggel("members")}
                        className={` rounded-full cursor-pointer flex items-center justify-center gap-2   text-base font-semibold px-12 py-3  transition duration-100 ${toggle === "members" ? "bg-primary text-white border border-primary scale-y-104 scale-x-101" : " text-black "}`}

                    >
                        For Military Members
                    </span>
                    <span
                        onClick={() => setToggel("professionals")}
                        className={` rounded-full  cursor-pointer flex  items-center justify-center gap-2   text-base font-semibold px-12 py-3 transition duration-100 ${toggle === "professionals" ? "bg-primary text-white border border-primary scale-y-104 scale-x-103" : " text-black "}`}
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
                            <div key={i} className={`group hover:bg-white bg-[#ececec] p-8 rounded-3xl border-l-4 border-secondary hover:border-primary flex flex-col items-start justify-between hover:shadow-lg transition cursor-pointer`}>
                                <div>

                                    <Icon className="text-6xl text-primary transition-colors" />
                                    <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-0">
                                        {card.title}
                                    </h4>
                                    <p className="psm mt-2 mb-8">
                                        {card.text}
                                    </p>
                                </div>
                                <div className="w-full border-t-1 pt-4 border-gray-400 h-12 ">

                                    <a
                                        href="/auth/signup"
                                        className="flex items-center justify-between gap-2  text-sm group-hover:text-primary"
                                    >
                                        {card.button}
                                        {/* <IoIosArrowRoundForward className="text-primary text-lg" /> */}
                                        <CircleArrowRight size={32} strokeWidth={0.5} />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className="grid justify-center items-center mt-8">
                <p className="my-4 font-semibold">Military serving Military matters!</p>
                <Button  href="/auth/signup">Join Today</Button>

            </div>

        </section>
    );
};

export default HowItWorks;