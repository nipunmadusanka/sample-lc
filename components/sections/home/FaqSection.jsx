"use client";
import React from "react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
export default function FaqSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-50 to-blue-50"
        >
            <div className="px-[1rem] lg:px-[6rem] min-h-screen py-[80px]">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Everything you need to know about visiting Sri Lanka
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full max-w-4xl mx-auto flex justify-center items-center rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image width={600} height={600} src="https://images.pexels.com/photos/2880718/pexels-photo-2880718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sri Lanka Tourism" className="w-full h-auto lg:h-[700px] max-h-[900px] object-cover" />
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="w-full max-w-4xl mx-auto lg:my-6"
                    >
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="hover:no-underline cursor-pointer">Best time to visit Sri Lanka?</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm md:text-base">You may visit Sri Lanka at any time of year. Because it is a tropical nation, anticipate sunlight and beautiful sky almost all year, even during the wet season. Sri Lanka has two monsoon seasons, and the climate varies across the nation. The northeast monsoon occurs from December to March. The southwest monsoon rains extend between June and October. You can adjust your plans according to the season with our experts’ help.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="hover:no-underline cursor-pointer">Do I need a visa to visit Sri Lanka?</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm md:text-base">Most visitors to Sri Lanka will need a visa. You can apply for an Electronic Travel Authorization (ETA) online before your trip, which is a simple and quick process. Some nationalities may be eligible for visa-free entry or visa on arrival, so it's best to check the latest requirements based on your country of residence.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="hover:no-underline cursor-pointer">What currency is used in Sri Lanka?</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm md:text-base">The official currency of Sri Lanka is the Sri Lankan Rupee (LKR). It's advisable to carry some local currency for small purchases, although credit cards are
                                        widely accepted in hotels, restaurants, and shops in urban areas.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="hover:no-underline cursor-pointer">What is the best time to visit Colombo?</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm md:text-base">Colombo is a bustling city, but it's best to visit during the day. The city is surrounded by a beautiful, historic and cultural landscape. The city is also a popular tourist destination, so you can enjoy the best of Sri Lanka's culture and attractions.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger className="hover:no-underline cursor-pointer">What is the best time to visit Kandy?</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm md:text-base">Kandy is a beautiful city, but it's best to visit during the day. The city is surrounded by a beautiful, historic and cultural landscape. The city is also a popular tourist destination, so you can enjoy the best of Sri Lanka's culture and attractions.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger className="hover:no-underline cursor-pointer">What is the best time to visit Galle?</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm md:text-base">Galle is a beautiful city, but it's best to visit during the day. The city is surrounded by a beautiful, historic and cultural landscape. The city is also a popular tourist destination, so you can enjoy the best of Sri Lanka's culture and attractions.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}