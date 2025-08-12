"use client"
import { fetchLocation, useLocation } from "@/lib/query/Query";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

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
    <footer className="w-full bg-[#232323]  text-gray-100 text-sm">
      <div className=" max-w-5xl mx-auto px-4 xl:px-0 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-8  py-16 ">
        <div className="">
          <div className="text-base  mt-2 mb-4 leading-8 ">
            <Link href="/">
              <Image src="/images/logoFooter.png" alt="militarypcs" width={300} height={60} className=" w-full md:w-[250px] mb-8" />
            </Link>
            <p className="text-sm leading-5 text-white/70">We’re a mission-driven platform built by and for the military community.</p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0 items-center">
            {["linkedin", "youtube", "facebook", "x"].map(icon => (
              <Image key={icon} src={`/icons/${icon}.png`} alt={icon} width={23} height={10} className="" />
            ))}
          </div>
        </div>
        {/* Quick Links */}
        <div className="border-l-1 border-white/20 pl-4">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-1">
            {quickLinks.map((link, i) => (
              <li key={i}><Link href={link.link} className="text-gray-200 text-sm hover:text-white">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div className="border-l-1 border-white/20 pl-4">
          <h4 className="text-lg font-semibold text-white mb-4">Information</h4>
          <ul className="space-y-1">
            {InformationLinks.map(policy => (
              <li key={policy.label}><Link href={policy.link} className="text-gray-200 text-sm hover:text-white">{policy.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div className="border-l-1 border-white/20 pl-4">
          <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
          <p className="text-base bg-clip-text  w-fit">
            Call : <span className="text-base  font-semibold">123 456 7890</span>
          </p>
          <Link href="mailto:info@militarypcs.com" className="underline mt-1 inline-block text-sm">
            info@militarypcs.com
          </Link>
          <div className="flex flex-col gap-4 mt-8">
            <Link href="/auth/login">
              <Button size="sm">
                {/* <MdDashboard size={22} className="text-white" /> */}
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="outline" size="sm">
                {/* <CiUser size={22} className="text-white" /> */}
                Join
              </Button >
            </Link>
          </div>
        </div>
      </div>
      <div className=" bg-[#1D1D1D] py-6">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 mt-10">
          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Locations</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
            {stateChunks.map((chunk, idx) => (
              <ul key={idx} className="space-y-1 border-l-1 border-white/20 pl-4">
                {chunk.map((state) => (
                  <li key={state.id} className="text-white/70 text-sm hover:text-white  ">
                    <Link key={state.id} href={`/states/${state.location}?state=${encodeURIComponent(state.location)}`}>
                      {state.location}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

        </div>
        {/* Bottom Section */}
        <div className="max-w-5xl mx-auto px-4 xl:px-0 mt-10 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-gray-100 text-center">
            <span className="font-medium text-white/70">© 2025 MilitaryPCS. All rights reserved.</span>
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
