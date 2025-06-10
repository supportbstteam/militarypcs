// components/Header.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLock, CiUser } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";

const Header: React.FC = () => {
    const navItems = [
        { label: "About Us", link: "/about-us" },
        { label: "Services", link: "/services" },
        { label: "Membership", link: "/membership" },
        { label: "Sponsors", link: "/sponsors" },
        { label: "Resources", link: "/resources" }, // Note: double 's' kept as-is, but consider fixing if typo
        { label: "Events", link: "/events" },
        { label: "Donate", link: "/donate" },
    ];
    return (
        <header className="max-w-[1420px] mx-auto py-4 px-4 xl:px-0">
            <div className="flex items-center justify-between">
                {/* Logo (left) */}
                <div className="6/12 md:w-3/12">
                    <Link href="/">
                        <Image src="/newLogo.png" alt="militarypcs" width={300} height={60} className="w-[230px] md:w-[300px]" />
                    </Link>
                </div>
                {/* Navigation (right) */}
                <nav className="w-9/12 hidden xl:flex gap-12 justify-end items-center ">
                    <ul className="flex items-center gap-8">

                        {navItems.map((item, i) => (
                            <Link key={i} href={item.link} className=" hover:scale-105 transition duration-150 ease-in-out">

                                <li className="text-black text-base font-medium hover:bg-[linear-gradient(135deg,#b43141,#274768)] hover:bg-clip-text hover:text-transparent">{item.label}</li>
                            </Link>
                        ))}
                    </ul>

                    <div className="flex gap-2">
                        <Link href="/auth/login">
                        <button className="flex items-center gap-1 px-4 py-2 text-sm bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] text-white rounded-lg font-semibold hover:bg-[linear-gradient(135deg,_theme('colors.secondary'),_theme('colors.primary'))] transition duration-200 cursor-pointer">
                            <CiLock size={22} className="text-white" />
                            Sign in
                        </button>
                        </Link>

                        <Link href="/auth/signup">
                        <button className="flex items-center gap-1 px-4 py-2 text-sm bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] text-white rounded-lg font-semibold hover:bg-[linear-gradient(135deg,_theme('colors.secondary'),_theme('colors.primary'))] transition duration-200 cursor-pointer">
                            <CiUser size={22} className="text-white" />
                            Join us
                        </button>
                        </Link>
                    </div>
                </nav>
                <div className="block xl:hidden ">
                    <AiOutlineMenu size={20} className="" />

                </div>
            </div>
        </header>
    );
};
export default Header;
