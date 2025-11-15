'use client';
import React, { useContext } from "react";
import { motion } from "framer-motion";
import ImageCarousel from "@/components/ui/ImageCarousel";
import Button from "@/components/button";
import { ArrowRight } from "lucide-react";

const SLIDES = [
    {
        title: "One Iconic Stay A Thousand Moments of Grace",
        description: "Experience the best of Polhena with us.",
        image: "/images/banners (1).webp",
    },
    {
        title: "One Tranquil Dip A Thousand Ripples of Relaxation",
        description: "Stay in comfort and style.",
        image: "/images/banners (2).webp",
    },
    {
        title: "One Golden Shoreline A Thousand Waves of Bliss",
        description: "Make memories that last a lifetime.",
        image: "/images/banners (3).webp",
    },
];

const AUTOPLAY_INTERVAL = 6000; // slower autoplay
export default function SpaceSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // optional: triggers only once when 20% visible
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="px-[1rem] lg:px-[6rem] min-h-screen py-[80px] "
        >
            <div className="">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 ">
                    <div className="col-span-1 flex flex-col gap-4 items-start justify-center order-2 lg:order-1 overflow-hidden md:overflow-visible">
                        <ImageCarousel slides={SLIDES} autoplayInterval={AUTOPLAY_INTERVAL} showIndicators={true} showArrows={true} />
                    </div>
                    <div className="col-span-1 flex flex-col justify-center order-1 lg:order-2">
                        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-start">
                            explore <i>our spaces</i>
                        </h1>
                        <p className="!text-gray-800 mb-8 text-center md:text-start">
                            Step into a sanctuary where every corner invites discovery. Stroll through lush tropical gardens shaded by swaying palms, leading you to serene swimming pools nestled high on the cape, each offering breathtaking views of the endless ocean horizon. Energize your body at our state-of-the-art fitness centre, or pause at elevated lookout points where the Indian Ocean stretches out in shimmering blues.
                            <br /><br />
                            At Cove Beach, golden sands and crystal-clear waters create the perfect retreat for sun-drenched relaxation or a refreshing dip. Just steps away, the Beach Club awaits with a lively yet laid-back atmosphere—where freshly caught seafood and authentic island cuisine are served against the backdrop of unforgettable sunsets. Every space is designed to immerse you in nature’s beauty while offering the comforts of modern luxury.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <Button className="mt-4 text-black bg-[position:100%]" >
                                <span className="flex items-center gap-2 ">
                                    Explore Spaces
                                    <ArrowRight className="w-4 h-4 text-gray-600 inline-block hover:text-[var(--deepoceancolor)]" />
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}