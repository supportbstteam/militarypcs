'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLock, CiUser, CiMenuBurger } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";

import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { hasCookie } from "cookies-next/client";
import { useAuthStore } from "@/store/authStore";
import { useLogout } from "@/lib/query/Query";
import { getCookie } from 'cookies-next';

const Header: React.FC = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = [
        { label: "About Us", link: "/about-us" },
        { label: "Services", link: "/services" },
        { label: "Membership", link: "/membership" },
        { label: "Sponsors", link: "/sponsors" },
        { label: "Resources", link: "/resources" },
        { label: "Events", link: "/events" },
        { label: "Donate", link: "/donate" },
    ];

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);
    const logoutMutation = useLogout()

    const router = useRouter();

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const { setIsLoggedIn } = useAuthStore();

    useEffect(() => {
        setIsLoggedIn(hasCookie("token"));
    }, []);

    const handleLogout = async () => {
        deleteCookie("token");
        setIsLoggedIn(false);
        // await logoutMutation.mutateAsync();
        router.push("/auth/login");
    };

    useEffect(() => {
        const token = getCookie('token')
        if (!token) {
            router.push('/auth/login'); // Redirect to login if not authenticated
        }
    })

    return (
        <header className="max-w-[1420px] mx-auto py-4 px-4 xl:px-0 relative">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="w-8/12 md:w-3/12">
                    <Link href="/" onClick={closeMobileMenu}>
                        <Image
                            src="/images/logo.png"
                            alt="militarypcs"
                            width={300}
                            height={60}
                            className="w-[250px] md:w-[300px]"
                            priority
                        />
                    </Link>
                </div>
                {/* Desktop Navigation */}
                <nav className="w-9/12 hidden xl:flex gap-12 justify-end items-center">
                    <ul className="flex items-center gap-8">
                        {navItems.map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={item.link}
                                    className="block hover:scale-105 transition duration-150 ease-in-out"
                                >
                                    <span className="text-black text-base font-medium hover:bg-[linear-gradient(135deg,#b43141,#274768)] hover:bg-clip-text hover:text-transparent">
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Desktop buttons */}

                    <div className="flex gap-2">



                        {isLoggedIn ? (

                            <>

                                <Link href="/dashboard">
                                    <button className="flex items-center gap-1 px-4 py-2 text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:from-secondary hover:to-primary transition duration-200 cursor-pointer">
                                        <MdDashboard size={22} className="text-white" />
                                        Dashboard
                                    </button>
                                </Link>

                                <button onClick={handleLogout} className="flex items-center gap-1 px-4 py-2 text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:from-secondary hover:to-primary transition duration-200 cursor-pointer">
                                    <CiUser size={22} className="text-white" />
                                    Log Out
                                </button>

                            </>


                        ) : (

                            <>
                                <Link href="/auth/login">
                                    <button className="flex items-center gap-1 px-4 py-2 text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:from-secondary hover:to-primary transition duration-200 cursor-pointer">
                                        <CiLock size={22} className="text-white" />
                                        Sign in
                                    </button>
                                </Link>

                                <Link href="/auth/signup">
                                    <button className="flex items-center gap-1 px-4 py-2 text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:from-secondary hover:to-primary transition duration-200 cursor-pointer">
                                        <CiUser size={22} className="text-white" />
                                        Join us
                                    </button>
                                </Link>

                            </>


                        )
                        }

                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="block xl:hidden p-2"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? (
                        <RxCross1 size={24} className="text-gray-800" />
                    ) : (
                        <CiMenuBurger size={24} className="text-gray-800" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-40 xl:hidden"
                            onClick={closeMobileMenu}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween' }}
                            className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl xl:hidden"
                        >
                            <div className="h-full flex flex-col py-4 px-4">
                                <div className="flex justify-end mb-8">
                                    <button
                                        onClick={closeMobileMenu}
                                        className="p-2"
                                        aria-label="Close menu"
                                    >
                                        <RxCross1 size={24} />
                                    </button>
                                </div>

                                <nav className="">
                                    <ul className="space-y-1">
                                        {navItems.map((item, i) => (
                                            <li key={i}>
                                                <Link
                                                    href={item.link}
                                                    onClick={closeMobileMenu}
                                                    className="block py-2 text-lg font-medium text-gray-800 hover:text-primary transition"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                {/* Mobile buttons */}

                                <div className="mt-auto space-y-4 pt-4s ">
                                    {isLoggedIn ? (
                                        <>
                                            <Link href="/dashboard">
                                                <button className="flex items-center justify-center gap-2 w-full mb-4 px-4 py-3 text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:from-secondary hover:to-primary transition duration-200">
                                                    <MdDashboard size={22} className="text-white" />
                                                    Dashboard
                                                </button>
                                            </Link>
                                            <Link
                                                href="/auth/login"
                                                onClick={() => { closeMobileMenu(); handleLogout(); }}
                                                className="block w-full"
                                            >
                                                <button className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:from-secondary hover:to-primary transition duration-200">
                                                    <CiUser size={20} />
                                                    Logout
                                                </button>
                                            </Link>

                                        </>

                                    ) : (
                                        <>
                                            <Link
                                                href="/auth/login"
                                                onClick={closeMobileMenu}
                                                className="block w-full"
                                            >
                                                <button className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:from-secondary hover:to-primary transition duration-200">
                                                    <CiLock size={20} />
                                                    Sign in
                                                </button>
                                            </Link>

                                            <Link
                                                href="/auth/signup"
                                                onClick={closeMobileMenu}
                                                className="block w-full"
                                            >
                                                <button className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:from-secondary hover:to-primary transition duration-200">
                                                    <CiUser size={20} />
                                                    Join us
                                                </button>
                                            </Link>
                                        </>

                                    )
                                    }


                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;