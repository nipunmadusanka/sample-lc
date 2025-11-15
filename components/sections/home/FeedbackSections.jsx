"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const REVIEWS = [
    {
        text: "Leisure Ceylon made our Sri Lankan adventure unforgettable. From pristine beaches to ancient temples, every detail was perfectly arranged.",
        name: "SARAH J",
        location: "LONDON, UK"
    },
    {
        text: "Exceptional service and authentic experiences. The cultural tours and wildlife safaris exceeded all our expectations.",
        name: "MICHAEL R",
        location: "SYDNEY, AUSTRALIA"
    },
    {
        text: "Professional, reliable, and passionate about showcasing Sri Lanka's beauty. Highly recommend for anyone visiting this paradise.",
        name: "PRIYA S",
        location: "MUMBAI, INDIA"
    }
];

export default function FeedbackSections() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative px-[1rem] lg:px-[6rem] py-[60px] md:py-[80px] min-h-[80vh] md:min-h-[100vh] flex items-center bg-[url('/images/pexels-gilles-34681384.webp')] bg-cover bg-center bg-scroll md:bg-fixed"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            <div className="relative max-w-5xl mx-auto z-10 w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 !text-white">Real Experience Stories</h2>
                <Carousel className="w-full">
                    <CarouselContent>
                        {REVIEWS.map((review, index) => (
                            <CarouselItem key={index}>
                                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl h-[300px] md:h-[350px] lg:h-[400px]">
                                    <CardContent className="p-6 md:p-8 lg:p-12 text-center h-full flex flex-col justify-center">
                                        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 italic !text-white leading-relaxed">
                                            "{review.text}"
                                        </p>
                                        <div className="!text-white">
                                            <p className="font-bold text-sm !text-white/90 md:text-base mb-1">{review.name}</p>
                                            <p className="text-xs md:text-sm !text-white/80">{review.location}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex border-2 border-white/30 !text-black hover:bg-white/10 hover:border-white" />
                    <CarouselNext className="hidden md:flex border-2 border-white/30 !text-black hover:bg-white/10 hover:border-white" />
                </Carousel>
            </div>
        </motion.div>
    );
}
