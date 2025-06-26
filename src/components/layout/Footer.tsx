"use client"
import { fetchLocation, useLocation } from "@/lib/query/Query";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  const { data: states } = useLocation();

  // console.log(states)

  const quickLinks = [
    { label: "About Us", link: "/about-us" },
    { label: "Services", link: "/services" },
    { label: "Membership", link: "/membership" },
    { label: "Events", link: "/events" },
    { label: "Donate", link: "/donate" },
    { label: "Resourcess", link: "/resourcess" },
    { label: "Testing", link: "/testing" }, 
  ];
  const InformationLinks = [
    { label: "Privacy Policy", link: "/privacy-policy" },
    { label: "Terms & Conditions", link: "/terms" },
    { label: "Refund Policy", link: "/refund-policy" },
    { label: "Cookie Policy", link: "/cookie-policy" }
  ];

  // Split into 4 chunks
  if (!Array.isArray(states) || states.length === 0) return null;
  const chunkSize = Math.ceil(states.length / 4);
  const stateChunks = [
    states.slice(0, chunkSize),
    states.slice(chunkSize, chunkSize * 2),
    states.slice(chunkSize * 2, chunkSize * 3),
    states.slice(chunkSize * 3),
  ];
  // console.log(stateChunks)


  return (
    <footer className="w-full bg-[#fbfbfb] py-8 md:pt-16 text-gray-600 text-sm">
      <div className=" max-w-[1420px] mx-auto px-4 xl:px-0 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8 mb-16">

        <div className="">
          <div className="text-base text-gray-500 mt-2 mb-4 leading-8 ">
            <Link href="/">
              <Image src="/images/footerLogo.png" alt="militarypcs" width={300} height={60} className=" w-full md:w-[250px] mb-8" />
            </Link>
            <p>We’re a mission-driven platform built by and for the military community.</p>
          </div>
          <div className="mt-4">
            <h4 className="font-medium text-base text-black mb-2">Contact information</h4>
            <p className="text-2xl  font-semibold bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] bg-clip-text text-transparent w-fit">
              Call : 123 456 7890
            </p>
            <Link href="mailto:info@militarypcs.com" className="underline mt-1 inline-block text-base">
              info@militarypcs.com
            </Link>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-black mb-8">Quick Links</h4>
          <ul className="space-y-4">
            {quickLinks.map((link, i) => (
              <li key={i}><Link href={link.link} className="text-gray-500 text-base hover:bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] hover:bg-clip-text hover:text-transparent">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="text-xl font-semibold text-black mb-8">Information</h4>
          <ul className="space-y-4">
            {InformationLinks.map(policy => (
              <li key={policy.label}><Link href={policy.link} className="text-gray-500 text-base hover:bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] hover:bg-clip-text hover:text-transparent">{policy.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-[1420px] mx-auto px-4 xl:px-0 mt-10  ">
        {/* Locations */}
        <div>
          <h4 className="text-xl font-semibold text-black mb-8">Locations</h4>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stateChunks.map((chunk, idx) => (
              <ul key={idx} className="space-y-4">
                {chunk.map((state) => (
                  <li key={state.id} className="text-gray-500 text-base hover:bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] hover:bg-clip-text hover:text-transparent">
                    <Link key={state.id} href={`/states/${state.location}?state=${encodeURIComponent(state.location)}` }>
                      

                      {state.location}
                    

                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
      </div>
      {/* Bottom Section */}
      <div className="max-w-[1420px] mx-auto px-4 xl:px-0 mt-10 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          © 2025 <span className="font-medium text-black">MilitaryPCS</span>. All rights reserved. Website Design by <span className="font-medium text-black"> <Link href="https://www.betasofttechnology.com/" target="_blank">Beta Soft Technology</Link></span>.
        </p>
        <div className="flex space-x-3 mt-4 md:mt-0 rounded-circle overflow-hidden">
          {["facebook", "tiktok", "instagram", "x", "linkedin", "threads", "youtube"].map(icon => (
            <Image key={icon} src={`/icons/${icon}.svg`} alt={icon} width={20} height={20} className="rounded-circle overflow-hidden" />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
