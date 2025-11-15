"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/button";

export default function TailorMadeSection() {
    return (
        <div className="px-[1rem] lg:px-[6rem] min-h-screen py-[80px] overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                                Tailor-made<br />
                                <span className="bg-gradient-to-r from-[var(--deepoceancolor)] to-[var(--lightBlue)] bg-clip-text text-transparent">
                                    Bespoke Tours
                                </span>
                            </h2>
                            <p className="text-xl text-[var(--warmGold)] font-semibold mb-8">
                                Create your perfect Sri Lankan adventure with us…
                            </p>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed font-medium">
                            Tailor-made tours are our specialty at Leisure Ceylon. For decades, we have been crafting bespoke Sri Lankan tours tailored to client requests. Our expert planners and guides ensure every guest enjoys a unique and personalized experience.
                        </p>
                        <Button className=" text-[var(--deepoceancolor)] hover:bg-[var(--deepoceancolor)] hover:text-white bg-[position:100%] transition-all duration-500 ease-in-out" >
                            Plan Your Journey
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4 h-[600px]">
                            <div className="space-y-4">
                                <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/pexels-mohamedelaminemsiouri-2108845.webp"
                                        alt="Sri Lankan Temple"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/pexels-ollivves-1005456.webp"
                                        alt="Sri Lankan Beach"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/pexels-m-venter-792254-1659438.webp"
                                        alt="Sri Lankan Wildlife"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/pexels-ollivves-1020016 (1).webp"
                                        alt="Sri Lankan Culture"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--warmGold)]/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--deepoceancolor)]/10 rounded-full blur-xl"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}