// components/HowItWorks.tsx
import React from "react";
import { CiUser } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";
import { PiNetworkLight } from "react-icons/pi";
import { SlNotebook, SlUserFollowing } from "react-icons/sl";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const iconMap: Record<string, React.ElementType> = {
    CiUser, LuNotebookPen, SlNotebook, SlUserFollowing
};

type Step = {
    title: string;
    description: string;
    linkText: string;
    icon: keyof typeof iconMap;
};

const HowItWorks: React.FC = () => {
    return (
        <section className="max-w-[1420px] mx-auto px-4 xl:px-0 my-20">
            <div className="lg:flex justify-between items-start ">
                <div className="lg:w-[50%]  ">
                    <h2 className="h2   ">
                        HOW IT WORKS
                    </h2>
                    <p className="text-lg text-gray-600 mt-2 mb-4">
                        We provide military families with PCS resources and vetted connections.
                        <br />
                        Military serving Military is our passion.
                    </p>
                </div>

                <div className="sm:flex items-center rounded-xl items">
                    <span className=" rounded-t-xl sm:rounded-t-none sm:rounded-l-xl flex items-center justify-center gap-2  text-black text-base font-semibold px-12 py-3 bg-[#DEDEDE] hover:bg-[linear-gradient(135deg,_#274768,_#b43141)] transition duration-200 hover:text-white">
                        For Members
                    </span>
                    <span className=" rounded-b-xl sm:rounded-b-none sm:rounded-r-xl sm:rounded-br-xl flex items-center justify-center gap-2  text-white text-base font-semibold px-12 py-3 bg-[linear-gradient(135deg,_#b43141,_#274768)] hover:bg-[linear-gradient(135deg,_#274768,_#b43141)] transition duration-200">
                        For Professionals
                    </span>
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                <div>
                    <SlNotebook className="text-4xl text-[#b43141] transition-colors " />

                    <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-0">Sign Up Free</h4>
                    <p className="text-lg leading-8 text-gray-600 mt-2 mb-8">Join the platform at no cost and verify your military status.</p>
                    <a href="/" className="inline-flex items-center gap-2 bg-[linear-gradient(135deg,_#b43141,_#274768)] bg-clip-text text-transparent font-semibold text-sm w-fit">
                        Register Now <IoIosArrowRoundForward className=" text-black text-lg" />
                    </a>
                </div>
                <div>
                    <VscWorkspaceTrusted className="text-4xl text-[#b43141] text-gradient" />
                    <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-0">Find Trusted Professionals</h4>
                    <p className="text-lg leading-8 text-gray-600 mt-2 mb-8">Search for verified service providers near your current or next base.</p>
                    <a href="/" className="inline-flex items-center gap-2 bg-[linear-gradient(135deg,_#b43141,_#274768)] bg-clip-text text-transparent font-semibold text-sm w-fit">
                        Find Professionals Now <IoIosArrowRoundForward className=" text-black text-lg" />
                    </a>
                </div>
                <div>
                    <PiNetworkLight className="text-4xl text-[#b43141] text-gradient" />
                    <h4 className="text-xl text-primary font-semibold text-gray-800 mt-8 mb-0">Connect & Track</h4>
                    <p className="text-lg leading-8 text-gray-600 mt-2 mb-8">Message professionals directly and manage your service requests easily.</p>
                    <a href="/" className="inline-flex items-center gap-2 bg-[linear-gradient(135deg,_#b43141,_#274768)] bg-clip-text text-transparent font-semibold text-sm w-fit">
                        Connect Now <IoIosArrowRoundForward className=" text-black text-lg" />
                    </a>
                </div>
            </div>






        </section>
    );
};

export default HowItWorks;

// Static step content
const steps = [
    {
        title: "Sign Up Free",
        description: "Join the platform at no cost and verify your military status.",
        linkText: "Register Now",
        icon: "SlNotebook",
    },
    {
        title: "Find Trusted Professionals",
        description: "Search for verified service providers near your current or next base.",
        linkText: "Find Professionals Now",
        icon: "SlUserFollowing",

    },
    {
        title: "Connect & Track",
        description: "Message professionals directly and manage your service requests easily.",
        linkText: "Connect Now",
        icon: "IoIosGitNetwork",

    },
];
