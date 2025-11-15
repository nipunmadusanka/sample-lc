"use client";
import { useEffect, useState } from "react";
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
// import Link from "next/link";

export default function TopNav() {
    const [showTop, setShowTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 1024) return;
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 60) {
                setShowTop(false); // scrolling down
            } else {
                setShowTop(true); // scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Top bar: hide/show with smooth animation */}
            <div
                className={`px-[1rem] lg:px-[3rem] transition-all bg-[var(--deepoceancolor)] text-[var(--textWhite)] duration-700 ease-in-out overflow-hidden ${showTop ? "max-h-[30px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >

                <div className=" mx-auto h-[30px] hidden lg:flex items-center justify-start gap-4 text-[0.80rem] font-[600]">
                    {/* {["English", "Germent", "Chinese"].map((item, index) => (
                        <span key={index} className="cursor-pointer hover:text-[var(--textHoverGray)] transition-all duration-200">{item}</span>
                    ))} */}
                    <Link href="/en">English</Link> |{' '}
                    <Link href="/de">Deutsch</Link> |{' '}
                    <Link href="/zh">中文</Link>
                </div>
                {/* <div className="mx-auto h-[30px] lg:hidden flex items-center justify-end gap-1 text-[0.80rem] font-[600]">
                    <div className="flex item-center justify-end gap-1" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <Globe className="w-4 h-4 text-[var(--sandColor)]" />
                        <span>English</span>
                        <ChevronDown className="w-4 h-4 text-[var(--sandColor)]" />
                    </div>
                    
                </div>
                <div className={`list-disc pl-6 text-gray-700 space-y-2 overflow-hidden transition-all duration-700 ease-in-out ${showMobileMenu ? "opacity-100 max-h-96" : "opacity-0 max-h-0"}`}>
                        <Link href="/en">English</Link> |{' '}
                        <Link href="/de">Deutsch</Link> |{' '}
                        <Link href="/zh">中文</Link>
                    </div> */}

                <div className="relative text-[0.8rem] font-[600] text-[var(--textWhite)]">
                    {/* Trigger */}
                    <div
                        className="flex items-center justify-end gap-1 cursor-pointer select-none mr-1"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        <Globe className="w-4 h-4 text-[var(--sandColor)]" />
                        <span className="text-[10px]">English</span>
                        {showMobileMenu ? (
                            <ChevronUp className="w-4 h-4 text-[var(--sandColor)]" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-[var(--sandColor)]" />
                        )}
                    </div>
                </div>
            </div>
            {/* Dropdown menu */}
                    <div
                        className={`z-50 absolute right-1 w-28 bg-[var(--deepoceancolor)] shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${showMobileMenu
                                ? "opacity-100 max-h-40 translate-y-0"
                                : "opacity-0 max-h-0 -translate-y-2"
                            }`}
                    >
                        <ul className="flex flex-col text-center py-2 !text-white">
                            <li className="!mt-0">
                                <Link
                                    href="/en"
                                    className="block text-[12px] py-1 hover:text-[var(--sandColor)] !text-white"
                                    onClick={() => setShowMobileMenu(false)}
                                >
                                    English
                                </Link>
                            </li>
                            <li className="!mt-0">
                                <Link
                                    href="/de"
                                    className="block text-[12px] py-1 hover:text-[var(--sandColor)] !text-white"
                                    onClick={() => setShowMobileMenu(false)}
                                >
                                    Deutsch
                                </Link>
                            </li>
                            <li className="!mt-0">
                                <Link
                                    href="/zh"
                                    className="block text-[12px] py-1 hover:text-[var(--sandColor)] !text-white"
                                    onClick={() => setShowMobileMenu(false)}
                                >
                                    中文
                                </Link>
                            </li>
                        </ul>
                    </div>
        </>
    );
}
