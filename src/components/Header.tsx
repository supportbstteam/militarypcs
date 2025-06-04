// components/Header.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { CiLock, CiUser } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";

const Header: React.FC = () => {
    const navItems = ["About Us", "Services", "Membership", "Events", "Donate", "Resourcess"]
    return (
        <header className="py-4">
            <div className="flex items-center justify-between">
                {/* Logo (left) */}
                <div className="6/12 md:w-3/12">
                    <Link href="/">
                        <Image src="/images/logo.webp" alt="militarypcs" width={300} height={60}  className="w-[230px] md:w-[300px]"/>
                    </Link>
                </div>

                {/* Navigation (right) */}
                <nav className="w-9/12 hidden xl:flex gap-12 justify-end items-center ">
                    <ul className="flex items-center gap-8">

                        {navItems.map((item) => (
                            <Link key={item} href="#">

                                <li className="text-black text-base font-medium hover:bg-[linear-gradient(135deg,_#b43141,_#274768)] hover:bg-clip-text hover:text-transparent">{item}</li>
                            </Link>
                        ))}
                    </ul>

                    <div className="flex gap-2">
                        {/* <Button href="/" icon={<CiLock />}   iconSize={24} iconClassName="text-white"  variant="primary">Sign in</Button> */}
                        {/* <Button href="/" icon={<CiUser />}  iconSize={24} iconClassName="text-white"   variant="primary">Join us</Button> */}
                        <button className="flex items-center gap-1 px-4 py-2 text-sm bg-[linear-gradient(135deg,_#b43141,_#274768)] text-white rounded-lg font-semibold hover:bg-[linear-gradient(135deg,_#274768,_#b43141)] transition duration-200">
                            <CiLock size={22} className="text-white" />
                            Sign in
                        </button>

                        <button className="flex items-center gap-1 px-4 py-2 text-sm bg-[linear-gradient(135deg,_#b43141,_#274768)] text-white rounded-lg font-semibold hover:bg-[linear-gradient(135deg,_#274768,_#b43141)] transition duration-200">
                            <CiUser size={22} className="text-white" />
                            Join us
                        </button>

                    </div>
                </nav>
                <div className="block xl:hidden ">
                    <AiOutlineMenu size={20} className=""/>

                </div>
            </div>
        </header>
    );
};
export default Header;
