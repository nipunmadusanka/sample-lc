"use client";
import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import SingleRoom from "@/components/ui/room";
import SectionSkeleton from "@/components/ui/SectionSkeleton";
import { WebDataContext } from "@/context/WebDataProvider";

export default function AccommodationSection() {
    const [isSelected, setIsSelected] = useState(0);
    const { rooms, isLoadingRooms } = useContext(WebDataContext);
 
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // optional: triggers only once when 20% visible
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="px-[1rem] lg:px-[6rem] min-h-screen py-[80px]"
        >
            {isLoadingRooms || rooms.length === 0 ?
                <SectionSkeleton />
                :
                <>
                    <div className="flex justify-center items-center flex-col gap-0 mb-[80px]">
                        <h1 className="text-4xl md:text-6xl font-bold text-center">title <i>title</i></h1>
                        <div className="w-full flex justify-center items-center gap-10 overflow-x-auto scrollbar-hide">
                            <ul className="flex flex-col sm:flex-row items-center gap-1 md:gap-8">
                                {rooms?.slice(0, 3).map((item, index) => (
                                    <li key={index} onClick={() => setIsSelected(index)} className={`cursor-pointer !text-[12px] md:!text-[15px] uppercase font-semibold !text-[var(--deepoceancolor)] hover:!text-[var(--sandColor)] transition-colors duration-200 pb-1 ${isSelected === index ? "border-b-1 border-[var(--sandColor)]" : "border-b-1 border-transparent"}`}>
                                      {item?.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <SingleRoom data={rooms[isSelected]} ImageRight={false} />
                </>
            }
        </motion.div>
    );
}