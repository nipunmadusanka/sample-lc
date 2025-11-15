"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWater, FaWifi, FaUtensils, FaSwimmer, FaSpa, FaParking } from "react-icons/fa";
import { MdOutlineBalcony } from "react-icons/md";
import { GiBeachBag } from "react-icons/gi";
import { LuBedDouble } from "lucide-react";
import { useTranslations } from "next-intl";

const FACILITIES = [
    {
        icon: <FaWater size={40} color="var(--deepoceancolor)" />,
        title: "home.facilities.slideTitle_01",
        desc: "home.facilities.slideDescription_01",
    },
    {
        icon: <FaWifi size={40} color="var(--deepoceancolor)" />,
        title: "home.facilities.slideTitle_02",
        desc: "home.facilities.slideDescription_02",
    },
    {
        icon: <FaUtensils size={40} color="var(--deepoceancolor)" />,
        title: "home.facilities.slideTitle_03",
        desc: "home.facilities.slideDescription_03",
    },
    {
        icon: <FaSwimmer size={40} color="var(--deepoceancolor)" />,
        title: "home.facilities.slideTitle_04",
        desc: "home.facilities.slideDescription_04",
    },
    {
        icon: <FaSpa size={40} color="var(--deepoceancolor)" />,
        title: "home.facilities.slideTitle_05",
        desc: "home.facilities.slideDescription_05",
    },
    {
        icon: <FaParking size={40} color="var(--deepoceancolor)" />,
        title: "home.facilities.slideTitle_06",
        desc: "home.facilities.slideDescription_06",
    },
];

export default function FacilitiesSection() {
    const t = useTranslations();
    return (
        <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.2 }} // optional: triggers only once when 20% visible
            // transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-[80vh]"
        >
            <div className="relative py-[80px] min-h-[80vh] w-full bg-fixed bg-cover bg-center"
            // style={{ backgroundImage: "url('/images/room.webp')" }}
            >
                {/* <div className="absolute inset-0 bg-[linear-gradient(to_left,_#f9f5f3_70%,_transparent_100%)] lg:bg-[linear-gradient(to_left,_#f9f5f3,_#f9f5f3_50%,_#f9f5f3cc_70%,_#f9f5f399_80%,_transparent_100%)]" /> */}
                {/* <div className="absolute inset-0 bg-[linear-gradient(to_left,_#003b61,_#003b61aa_80%,_#003b6199_90%,_#003b6188_100%,_transparent_100%)]
                lg:bg-[linear-gradient(to_left,_#003b61,_#003b61cc_70%,_#003b6199_80%,_#003b6166_90%,_transparent_100%)]" /> */}

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-6 h-full px-[1rem] lg:px-[6rem]">
                    {/* <div className="col-span-1 lg:col-span-2 ">
                    </div> */}
                    <div className="col-span-1 lg:col-span-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-center">{t("home.facilities.title")}</h1>
                        <p className="!text-gray-800 mb-8 text-center w-full lg:w-3/4 mx-auto">
                            {t("home.facilities.description")}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            {FACILITIES.map((facility, idx) => (
                                <div key={idx} className="flex flex-col items-start bg-white/10 p-6 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm">
                                    <div className="mb-4">{facility.icon}</div>
                                    <h2 className="text-xl font-semibold !text-black mb-2">{t(facility.title)}</h2>
                                    <p className="text-start !font-[200] !text-gray-800">{t(facility.desc)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}