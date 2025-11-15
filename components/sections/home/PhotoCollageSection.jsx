"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Camera } from "lucide-react";

const PHOTOS = [
    { id: 1, image: "/images/pexels-chanaka-madushan-sugathadasa-271311-999066.webp", caption: "Ancient Sigiriya" },
    { id: 2, image: "/images/pexels-pixabay-39857.webp", caption: "Wildlife Safari" },
    { id: 3, image: "/images/pexels-quang-nguyen-vinh-222549-2582652.webp", caption: "Tea Plantations" },
    { id: 4, image: "/images/pexels-fabianwiktor-994605.webp", caption: "Beach Paradise" },
    { id: 5, image: "/images/gallery-5-1.webp", caption: "Cultural Dance" },
    { id: 6, image: "/images/pexels-alix-lee-43379071-29320971.webp", caption: "Mountain Views" },
    { id: 7, image: "/images/pexels-thilina-alagiyawanna-3266092-32451028.webp", caption: "Local Markets" },
    { id: 8, image: "/images/pexels-pixabay-36744.webp", caption: "Sunset Coast" }
];

export default function PhotoCollageSection() {
    return (
        <div className="px-[1rem] lg:px-[6rem] py-[60px] md:py-[80px] bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--deepoceancolor)]">
                            Travel Gallery
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Discover the beauty of Sri Lanka through stunning moments captured by our guests during their unforgettable journeys
                    </p>
                </motion.div>

                {/* Mobile Layout */}
                <div className="block md:hidden grid grid-cols-2 gap-2 mb-8">
                    {PHOTOS.slice(0, 6).map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-xl overflow-hidden ${index === 0 ? 'col-span-2 h-[200px]' : 'h-[120px]'}`}
                        >
                            <Image
                                src={photo.image}
                                alt={photo.caption}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute bottom-2 left-2 !text-white">
                                <p className="text-sm font-semibold">{photo.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[600px]">
                    {PHOTOS.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                                index === 0 ? 'col-span-2 row-span-2' :
                                index === 3 ? 'col-span-2 row-span-1' :
                                // index === 6 ? 'col-span-1 row-span-2' :
                                'col-span-1 row-span-1'
                            }`}
                        >
                            <Image
                                src={photo.image}
                                alt={photo.caption}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text-center !text-white">
                                    <Camera className="w-8 h-8 mx-auto mb-2" />
                                    <p className="font-semibold !text-white">{photo.caption}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-8 md:mt-12"
                >
                    <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 px-4">
                        Follow us on social media for more amazing moments
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
                        <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full">
                            <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="font-semibold text-sm md:text-base">@leisureceylon</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-[var(--warmGold)] text-white px-4 md:px-6 py-2 md:py-3 rounded-full">
                            <span className="font-semibold text-sm md:text-base">#SriLankaWithUs</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}