'use client';
import { motion } from "framer-motion";
import ImageCarousel from "@/components/ui/ImageCarousel";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const SLIDES = [
    {
        title: "One Iconic Stay A Thousand Moments of Grace",
        description: "Experience the best of Polhena with us.",
        image: "/destinations/train.webp",
    },
    {
        title: "One Tranquil Dip A Thousand Ripples of Relaxation",
        description: "Stay in comfort and style.",
        image: "/destinations/beach.webp",
    },
    {
        title: "One Golden Shoreline A Thousand Waves of Bliss",
        description: "Make memories that last a lifetime.",
        image: "/destinations/deer.webp",
    },
    {
        title: "One Golden Shoreline A Thousand Waves of Bliss",
        description: "Make memories that last a lifetime.",
        image: "/destinations/elephent.webp",
    },

];

const AUTOPLAY_INTERVAL = 6000; // slower autoplay
export default function Destinations() {
    const router = useRouter();
    const goDestinations = () => router.push("/destinations");
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // optional: triggers only once when 20% visible
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="px-[1rem] lg:px-[6rem] min-h-screen py-[80px]"
        >
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 ">
                    <div className="col-span-1 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-start">
                            Experience the enchanting <i>majesty of sri lanka</i>
                        </h1>
                        <p className="!text-gray-800 mb-8 text-center md:text-start">
                            Our island is a jewel of heritage, culture, and natural wonder, inviting travelers to uncover its many secrets. From misty highlands dotted with emerald tea plantations to sun-kissed southern shores and hidden coastal coves, every corner tells a story. Once a crossroads of ancient trade and exploration, Sri Lanka has inspired voyagers, poets, and philosophers alike. Here, history, tradition, and spirituality weave together to form a vibrant cultural tapestry — a destination where breathtaking landscapes, timeless customs, and warm hospitality await at every turn.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <Button className="mt-4 text-black bg-[position:100%]" onClick={goDestinations}>
                                <span className="flex items-center gap-2 ">Discover sri lanka <ArrowRight className="w-4 h-4 text-gray-600 inline-block hover:text-[var(--deepoceancolor)]" /></span>
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