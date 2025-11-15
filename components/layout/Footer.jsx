"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { MapPin, Phone, AtSign } from 'lucide-react';
import { FaTiktok } from "react-icons/fa6";
import { motion } from "framer-motion";


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <motion.div
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true, amount: 0.2 }} // optional: triggers only once when 20% visible
                transition={{ duration: 0.5, ease: "easeOut" }}
                className=" "
            >
                <div className="relative min-h-[90vh] px-[1rem] lg:px-[6rem] py-[80px] overflow-x-auto z-50"
                    style={{
                        backgroundImage: "url('/images/carous01.webp')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <div className="absolute inset-0 bg-[var(--darkBlue)]/70 z-10" />
                    <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-16 mb-[80px] lg:mb-0 z-50">
                        <div className="flex flex-col">
                            <h1 className="!text-white text-2xl font-bold">Leisure Ceylon</h1>
                            <span className="w-[60px] h-[1px] bg-gray-400 block mt-[3px] mb-[20px]" />
                            <p className=" !text-white !text-[15px] !mt-0">
                                Embark on unforgettable Sri Lankan adventures with Leisure Ceylon. Expertly crafted journeys blending culture, nature, and luxury for the perfect escape.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="!text-white text-2xl font-bold">Quick Links</h1>
                            <span className="w-[60px] h-[1px] bg-gray-400 block mt-[3px] mb-[20px]" />
                            <div className="flex flex-col gap-1.5">
                                <Link href={'/'} className="text-[16px] text-white ">

                                    <span className="relative inline-block  transition-all duration-500 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--warmGold)] after:transition-all after:duration-500">
                                        Home
                                    </span>
                                </Link>
                                <Link href={'/'} className="text-[16px] text-white ">
                                    <span className="relative inline-block  transition-all duration-500 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--warmGold)] after:transition-all after:duration-500">
                                        About
                                    </span>
                                </Link>
                                <Link href={'/'} className="text-[16px] text-white">

                                    <span className="relative inline-block  transition-all duration-500 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--warmGold)] after:transition-all after:duration-500">
                                        Terms & Conditions
                                    </span>
                                </Link>
                                <Link href={'/'} className="text-[16px] text-white ">

                                    <span className="relative inline-block  transition-all duration-500 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--warmGold)] after:transition-all after:duration-500">
                                        Privacy Policy
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="!text-white text-2xl font-bold">Contact Info</h1>
                            <span className="w-[60px] h-[1px] bg-gray-400 block mt-[3px] mb-[20px]" />
                            <div className="flex flex-col gap-1.5">
                                <div className="grid grid-cols-6 text-white">
                                    <div className="col-span-1">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <span className="col-span-5">No. 123, Main Street, Sri Lanka</span>
                                </div>
                               <div className="grid grid-cols-6 text-white">
                                    <div className="col-span-1">
                                    <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="col-span-5">+94 123 456 789</span>
                                </div>
                                <div className="grid grid-cols-6 text-white">
                                    <div className="col-span-1">
                                    <AtSign className="w-6 h-6 " />
                                    </div>
                                    <span className="col-span-5">info@leisureceylon.com</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-start gap-3 mt-[20px]">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-white p-2 border rounded-4xl transition-all duration-300"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-white p-2 border rounded-4xl transition-all duration-300"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-white p-2 border rounded-4xl transition-all duration-300"
                                >
                                    <FaTiktok className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <div className=" lg:col-span-2 block">
                            <h1 className="!text-white text-2xl font-bold>">Newsletter</h1>
                            <span className="w-[60px] h-[1px] bg-gray-400 block mt-[3px] mb-[20px]" />
                            <div className="flex flex-col gap-1.5">
                                <p className=" !text-gray-400 !text-[15px] !mt-0">Get Special offers & Discounts</p>
                                <input type="text" className="p-3 w-full border border-white text-gray-200" placeholder="Enter your email address" />
                                <div>
                                    <span className="relative inline-block text-white cursor-pointer text-[13px] font-semibold uppercase transition-all duration-500 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--warmGold)] after:transition-all after:duration-500">
                                        SUBSCRIBE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" absolute bottom-[0] left-0 w-full z-30">
                        <div className="px-[1rem] lg:px-[6rem] w-full ">
                            {/* <div className="h-[1px] block bg-gray-400 w-full" /> */}
                            <div className="flex flex-col md:flex-row justify-center items-center gap-1 lg:gap-4 my-[25px] text-white text-[12px]">
                                <span>© {year} Leisure Ceylon. All rights reserved.</span>
                                <span className="hidden md:block w-[1px] h-[10px] bg-gray-400" />
                                <span className="">Website Designed & Developed by <a
                                    href="https://www.craftwarelab.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-block cursor-pointer transition-all duration-500 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--warmGold)] after:transition-all after:duration-500"
                                >Craftwarelab</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div >
            </motion.div>
        </>
    );
}

export default Footer;