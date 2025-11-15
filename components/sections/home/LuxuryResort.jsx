'use client';
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
const SLIDES = [
    {
        heading: "home.luxuryResort.slideHeding_01",
        link: "Location",
        title: "home.luxuryResort.slideTitle_01",
        description: "home.luxuryResort.slideDescription_01",
        image: "/location/matara.webp",
    },
    {
        heading: "home.luxuryResort.slideHeding_02",
        link: "Tours",
        title: "home.luxuryResort.slideTitle_02",
        description: "home.luxuryResort.slideDescription_02",
        image: "/location/tours.webp",
    },
    {
        heading: "home.luxuryResort.slideHeding_03",
        link: "Celebrations",
        title: "home.luxuryResort.slideTitle_03",
        description: "home.luxuryResort.slideDescription_03",
        image: "/location/wedding.webp",
    }
];
export default function LuxuryResort() {
    const t = useTranslations();

    const router = useRouter();

    const handleNavigate = (path) => {
        router.push(path);
    };

    return (
        <div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.2 }} // optional: triggers only once when 20% visible
            // transition={{ duration: 0.5, ease: "easeOut" }}
            className="px-[1rem] lg:px-[6rem] min-h-screen py-[80px]  bg-[var(--bgSand)]"
        >
            <div className="flex justify-center items-center flex-col gap-6 ">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-center">
                        {t("home.luxuryResort.title_01")} <i>{t("home.luxuryResort.title_02")}</i>
                    </h1>
                    <p className="!text-gray-800 mb-8 text-center w-full lg:w-3/4 mx-auto">
                        {t("home.luxuryResort.description")}
                    </p>
                </div>
                <div className="">
                    {/* <Image
                        src="/images/luxury-resort.jpg"
                        alt="Luxury Resort"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg object-cover w-full h-auto"
                    /> */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {SLIDES.map((slide, index) => {
                             const href = `/${slide?.link.toLowerCase()}`;
                            return (
                                <div key={index} onClick={() => handleNavigate(href)} className="w-full group h-[300px] md:h-[400px] lg:h-[500px] transition-all duration-600 hover:z-30 hover:scale-115 relative cursor-pointer overflow-hidden ">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        width={600}
                                        height={400}
                                        // fill
                                        className="object-cover w-full h-full transition-transform duration-500 "
                                    />
                                    <div className="absolute h-30 overflow-hidden transition-all duration-400 ease-in-out group-hover:h-full bottom-0 left-0 right-0 bg-[var(--deepoceancolor)]/80 !text-white p-4">
                                        <div className="flex flex-col justify-center items-center h-full gap-2 ">
                                            <span className="text-[12px] uppercase !text-white">{t(slide?.heading)}</span>
                                            <h2 className="text-3xl font-bold !text-white">{t(slide?.title)}</h2>
                                            <p className="hidden group-hover:block opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 !text-white text-center w-2/3 ">{t(slide?.description)}</p>
                                            <div className="hidden group-hover:block opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500">
                                                <span className="relative mt-4 inline-block text-white cursor-pointer text-[13px] uppercase tracking-[0.6px] transition-all duration-500 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--warmGold)] after:transition-all after:duration-500">
                                                    {t("home.luxuryResort.button")} <ArrowRight className="w-4 h-4 text-gray-200 inline-block " />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}