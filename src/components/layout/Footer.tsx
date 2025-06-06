import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  const quickLinks = [
        { label: "About Us", link: "/about-us" },
        { label: "Services", link: "/services" },
        { label: "Membership", link: "/membership" },
        { label: "Events", link: "/events" },
        { label: "Donate", link: "/donate" },
        { label: "Resourcess", link: "/resourcess" }, // Note: double 's' kept as-is, but consider fixing if typo
    ];
  return (
    <footer className="w-full bg-[#fbfbfb] pt-12 pb-6 text-gray-600 text-sm">
      <div className=" max-w-[1420px] mx-auto px-4 xl:px-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[30%_21%_21%_21%] gap-8 mb-16">

        <div className="md:col-span-1">
          <p className="text-base text-gray-500 mt-2 mb-4 leading-8 w-10/12">
          <Link href="/">
            <Image  src="/images/logo2.webp" alt="militarypcs" width={300} height={60} className="w-[180px] md:w-[230px] mb-8" />
          </Link>
            We’re a mission-driven platform built by and for the military community.
          </p>
          <div className="mt-4">
            <h4 className="font-medium text-base text-black mb-2">Contact information</h4>
            <p className="text-2xl  font-semibold bg-[linear-gradient(135deg,_#b43141,_#274768)] bg-clip-text text-transparent w-fit">
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
            {quickLinks.map((link,i ) => (
              <li key={i}><Link href={link.link} className="text-gray-500 text-base hover:bg-[linear-gradient(135deg,_#b43141,_#274768)] hover:bg-clip-text hover:text-transparent">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="text-xl font-semibold text-black mb-8">Locations</h4>
          <ul className="space-y-4">
            {["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia"].map(location => (
              <li key={location}><Link href="#" className="text-gray-500 text-base hover:bg-[linear-gradient(135deg,_#b43141,_#274768)] hover:bg-clip-text hover:text-transparent">{location}</Link></li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="text-xl font-semibold text-black mb-8">Information</h4>
          <ul className="space-y-4">
            {["Privacy Policy", "Terms & Conditions", "Refund Policy", "Cookie Policy"].map(policy => (
              <li key={policy}><Link href="#" className="text-gray-500 text-base hover:bg-[linear-gradient(135deg,_#b43141,_#274768)] hover:bg-clip-text hover:text-transparent">{policy}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1420px] mx-auto px-4 xl:px-0 mt-10 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          © 2025 <span className="font-medium text-black">MilitaryPCS</span>. All rights reserved. Website Design by <span className="font-medium text-black">Beta Soft Technology</span>.
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
