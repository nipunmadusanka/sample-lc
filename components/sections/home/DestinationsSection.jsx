"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/button";

const DESTINATIONS = [
    {
        id: 1,
        name: "Sigiriya",
        region: "Cultural Triangle",
        image: "https://images.pexels.com/photos/9013701/pexels-photo-9013701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Ancient rock fortress with stunning frescoes and panoramic views",
        layout: "col-span-12 md:col-span-6 row-span-4",
        textSize: "text-2xl",
        showDescription: true,
        showRegion: true
    },
    {
        id: 2,
        name: "Kandy",
        region: "Hill Country",
        image: "https://images.pexels.com/photos/33404366/pexels-photo-33404366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Sacred city home to the Temple of the Tooth Relic",
        layout: "col-span-6 md:col-span-3 row-span-2",
        textSize: "text-lg",
        showDescription: false,
        showRegion: false
    },
    {
        id: 3,
        name: "Galle",
        region: "Southern Coast",
        image: "https://images.pexels.com/photos/31032909/pexels-photo-31032909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Historic Dutch colonial fort city by the ocean",
        layout: "col-span-6 md:col-span-3 row-span-2",
        textSize: "text-lg",
        showDescription: false,
        showRegion: false
    },
    {
        id: 4,
        name: "Ella",
        region: "Hill Country",
        image: "https://images.pexels.com/photos/12147639/pexels-photo-12147639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Scenic mountain town with tea plantations and waterfalls",
        layout: "col-span-12 md:col-span-6 row-span-4",
        textSize: "text-2xl",
        showDescription: true,
        showRegion: false
    },
    {
        id: 5,
        name: "Yala",
        region: "Southern Province",
        image: "https://images.pexels.com/photos/17281950/pexels-photo-17281950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Premier wildlife sanctuary famous for leopard sightings",
        layout: "col-span-6 md:col-span-3 row-span-2",
        textSize: "text-lg",
        showDescription: false,
        showRegion: false
    },
    {
        id: 6,
        name: "Mirissa",
        region: "Southern Coast",
        image: "https://images.pexels.com/photos/330260/pexels-photo-330260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Pristine beach paradise perfect for whale watching",
        layout: "col-span-6 md:col-span-3 row-span-2",
        textSize: "text-lg",
        showDescription: false,
        showRegion: false
    }
];

export default function DestinationsSection() {
    return (
        <div className="py-[60px] md:py-[80px] bg-white">
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--deepoceancolor)] mb-4 md:mb-6">
                        Must-Visit Destinations
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Discover the most captivating places in Sri Lanka, from ancient wonders to pristine beaches
                    </p>
                </motion.div>

                {/* Mobile Layout */}
                <div className="block md:hidden space-y-1 ">
                    {DESTINATIONS.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative h-[200px] overflow-hidden shadow-lg"
                        >
                            <Image
                                src={destination.image}
                                alt={destination.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 !text-white">
                                <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                                <p className="text-sm opacity-90">{destination.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-12 grid-rows-6 gap-1 h-[500px] lg:h-[700px] px-1">
                    {DESTINATIONS.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative ${destination.layout} rounded overflow-hidden shadow-lg cursor-pointer`}
                        >
                            <Image
                                src={destination.image}
                                alt={destination.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            
                            {destination.showRegion && (
                                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                                    <span className="!text-white text-xs font-medium">{destination.region}</span>
                                </div>
                            )}
                            
                            <div className="absolute bottom-0 left-0 right-0 p-4 !text-white">
                                <h3 className={`${destination.textSize} !text-white font-bold ${destination.showDescription ? 'mb-1' : ''}`}>
                                    {destination.name}
                                </h3>
                                {destination.description && (
                                    <p className="text-xs opacity-90 !text-white">{destination.description}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            </div>
    );
}