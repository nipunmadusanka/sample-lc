'use client';
import React from "react";
import { motion } from "framer-motion";
import ImageCarousel from "@/components/ui/ImageCarousel";
import Button from "@/components/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const SLIDES = [
    {
        title: "One Iconic Stay A Thousand Moments of Grace",
        description: "Experience the best of Polhena with us.",
        image: "/dining/1.webp",
    },
    {
        title: "One Tranquil Dip A Thousand Ripples of Relaxation",
        description: "Stay in comfort and style.",
        image: "/dining/2.webp",
    },
    {
        title: "One Golden Shoreline A Thousand Waves of Bliss",
        description: "Make memories that last a lifetime.",
        image: "/dining/3.webp",
    },
];

const AUTOPLAY_INTERVAL = 6000; // slower autoplay
export default function Dining() {
    const t = useTranslations();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // optional: triggers only once when 20% visible
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="px-[1rem] lg:px-[6rem] min-h-screen py-[80px] bg-[var(--bgSand)]"
        >
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 ">
                    <div className="col-span-1 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-start">
                            {t("home.dining.title_01")} <i>{t("home.dining.title_02")}</i>
                        </h1>
                        <p className="!text-gray-800 mb-8 text-center md:text-start">
                            {t("home.dining.description")}
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <Button className="mt-4 text-black bg-[position:100%]">
                                <span className="flex items-center gap-2">{t("home.dining.button")} <ArrowRight className="w-4 h-4 text-gray-600 inline-block hover:text-[var(--deepoceancolor)]" /></span>
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-4 items-start justify-center overflow-hidden md:overflow-visible">
                        <ImageCarousel slides={SLIDES} autoplayInterval={AUTOPLAY_INTERVAL} showIndicators={true} showArrows={true} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}