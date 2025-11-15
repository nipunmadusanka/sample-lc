"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BottomNav from "./components/bottomNav";
import { Menu, X } from 'lucide-react';
import { FiMenu, FiSend } from "react-icons/fi";
import Logo from '../../public/logo/Cavendish_Polhena_logo_transparent.png';
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
    const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const router = useRouter();
    const menuRef = useRef(null);
    const pathname = usePathname();

    const pathWithoutLocale = (() => {
        const parts = pathname.split("/").filter(Boolean);
        if (parts.length > 1) {
            parts.shift(); // remove first segment (locale)
        }
        return "/" + parts.join("/");
    })();

    const rightNavItems = ["Home"];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setDesktopMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const goBookingPage = () => {
        // router.push('/guest-enquiry');
    }

    const handleDesktopMenu = () => {
        setDesktopMenuOpen(prev => !prev);
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-[70px] z-60 ">
                <div className={`relative px-[0rem] lg:px-[3rem] ${scrolling ? "bg-[var(--deepoceancolor)]/80 backdrop-blur-md" : "bg-transparent md:pt-6 bg-gradient-to-b from-[var(--darkBlue)] to-transparent "} transition-all duration-700 ease-in-out  flex items-center justify-center h-[50px] md:h-[70px] overflow-hidden`}>
                    <div className="relative flex items-center justify-between w-full">
                        <div className="block lg:hidden py-[8px] px-[16px] sm:px-[24px]">
                            <button
                                onClick={handleDesktopMenu}
                                className="lg:hidden relative w-[50px] h-[50px] transition-all duration-500"
                            >
                                {/* Hamburger Icon */}
                                <Menu
                                    className={`absolute inset-0 w-[35px] h-[50px] text-white transition-all duration-500 ease-in-out
                                ${desktopMenuOpen
                                            ? 'opacity-0 scale-90 rotate-45'
                                            : 'opacity-100 scale-100 rotate-0'}
                                    `}
                                    size={32}
                                    strokeWidth={1.6}
                                    title="Menu"
                                    aria-label="Open navigation menu"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                // onClick={() => handleDesktopMenu()}
                                />
                                {/* Close Icon */}
                                <X
                                    className={`absolute inset-0 w-[35px] h-[50px] text-[var(--sandColor)] transition-all duration-500 ease-in-out
                                    ${desktopMenuOpen
                                            ? 'opacity-100 scale-100 rotate-0'
                                            : 'opacity-0 scale-90 rotate-45'}
                                        `}
                                // onClick={() => handleDesktopMenu()}
                                />
                            </button>
                        </div>

                        <div className="hidden lg:flex items-center justify-start cursor-pointer" onClick={() => router.push('/')}>
                            {/* <Image
                                className="w-[60px] h-[60px] object-contain"
                                src={Logo}
                                width={200}
                                height={250}
                                alt="Cavendish Polhena Logo"
                            /> */}
                            <span className="text-[18px] font-semibold text-white">Leisure Ceylon</span>
                        </div>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer" >
                            <BottomNav />
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <button className="flex items-center justify-center gap-1 bg-white/50 hover:bg-white group py-2 px-4 rounded-full cursor-pointer transition duration-300 ease-in-out" onClick={goBookingPage}>
                                <FiSend className="text-white group-hover:text-[var(--deepoceancolor)] transition duration-300 ease-in-out" size={18} />
                                <span className="text-white group-hover:text-[var(--deepoceancolor)] transition duration-300 ease-in-out text-[12px] font-[500]">INQUIRE</span>
                            </button>
                            <div className="hidden lg:flex items-center justify-center gap-1 cursor-pointer" onClick={handleDesktopMenu}>
                                <FiMenu
                                    size={32}
                                    strokeWidth={1.6}
                                    title="Menu"
                                    aria-label="Open navigation menu"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-white" />
                            </div>
                        </div>
                    </div>

                    {/* right side menu */}
                    <div ref={menuRef} className={`fixed top-0 right-0 h-full w-[100vw] md:w-[330px] bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-80
                    ${desktopMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    `}>
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-lg font-semibold text-[var(--deepoceancolor)]">Menu</h2>
                            <button
                                onClick={handleDesktopMenu}
                                className="text-xl font-bold text-black hover:text-gray-600 cursor-pointer"
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-4">
                            <div className="flex flex-col">
                                {rightNavItems.map((item, index) => {
                                    const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                                    const isSelected = href === "/" ? pathWithoutLocale === "/" : pathWithoutLocale.startsWith(href);
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => { setDesktopMenuOpen(false); router.push(href); }}
                                            className={`text-left cursor-pointer w-auto text-[var(--deepoceancolor)] hover:text-[var(--warmGold)] text-sm font-[400] py-1  ${isSelected ? "border-b-2 border-[var(--warmGold)]" : "border-b-2 border-transparent"} `}
                                        >
                                            {item}
                                        </button>
                                    );
                                })}
                                {/* <button
                                    onClick={() => { setDesktopMenuOpen(false); router.push("/location"); }}
                                    className="text-left text-[var(--deepoceancolor)] hover:text-[var(--warmGold)] text-sm font-[400] py-1"
                                >
                                    Location
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;