"use client";
import React from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Button from "@/components/button";

const TOUR_CATEGORIES = [
    {
        title: "Cultural Heritage",
        image: "/images/carous01.webp",
        description: "Explore ancient temples and rich traditions"
    },
    {
        title: "Wildlife Safari",
        image: "/images/pexels-ollivves-1078983.webp",
        description: "Discover exotic wildlife in natural habitats"
    },
    {
        title: "Beach Paradise",
        image: "/images/carous01.webp",
        description: "Relax on pristine golden beaches"
    },
    {
        title: "Adventure Tours",
        image: "/images/pexels-ollivves-1078983.webp",
        description: "Thrilling experiences in nature"
    },
    {
        title: "Tea Plantation",
        image: "/images/carous01.webp",
        description: "Journey through lush tea gardens"
    },
    {
        title: "Hill Country",
        image: "/images/pexels-ollivves-1078983.webp",
        description: "Scenic mountain landscapes"
    }
];

export default function TourCategorySection() {
    return (
        <div className="px-[1rem] lg:px-[6rem] py-[80px] bg-gradient-to-br from-blue-100 via-cyan-50/50 to-slate-100/70">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-[var(--deepoceancolor)] mb-4">
                        Explore Sri Lanka
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From ancient temples to pristine beaches, embark on unforgettable journeys across the Pearl of the Indian Ocean
                    </p>
                </motion.div>

                <Carousel className="w-full">
                    <CarouselContent className="-ml-4">
                        {TOUR_CATEGORIES.map((category, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                                >
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

                                    <div className="absolute bottom-0 left-0 right-0 p-6 !text-white">
                                        <div className=" opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <h3 className="text-2xl font-bold mb-4 transition-all duration-300 !text-white">
                                                {category.title}
                                            </h3>
                                            <p className="text-sm mb-4 !text-white">
                                                {category.description}
                                            </p>
                                            <Button className="hover:bg-[var(--deepoceancolor)] !text-white bg-[position:100%] transition-all duration-500 ease-in-out" >
                                                Explore
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="border-2 border-[var(--warmGold)]/30 text-black hover:bg-[var(--warmGold)]/10 hover:border-[var(--warmGold)]" />
                    <CarouselNext className="border-2 border-[var(--warmGold)]/30 text-black hover:bg-[var(--warmGold)]/10 hover:border-[var(--warmGold)]" />
                </Carousel>
            </div>
        </div>
    );
}