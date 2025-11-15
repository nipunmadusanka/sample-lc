"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import Image from "next/image";
import PackageCard from "@/components/ui/PackageCard";

const PACKAGES = [
    {
        id: 1,
        title: "Cultural Heritage Tour",
        duration: "7 Days",
        price: "$1,299",
        image: "/images/carous01.webp",
        description: "Explore ancient temples, royal palaces, and UNESCO World Heritage sites across Sri Lanka's cultural triangle.",
        highlights: ["Sigiriya Rock Fortress", "Temple of the Tooth", "Dambulla Cave Temple"]
    },
    {
        id: 2,
        title: "Wildlife Safari Adventure",
        duration: "5 Days",
        price: "$899",
        image: "/images/pexels-ollivves-1078983.webp",
        description: "Experience thrilling wildlife encounters in Yala and Udawalawe National Parks.",
        highlights: ["Leopard Spotting", "Elephant Gathering", "Bird Watching"]
    },
    {
        id: 3,
        title: "Beach & Relaxation",
        duration: "6 Days",
        price: "$1,099",
        image: "/images/carous01.webp",
        description: "Unwind on pristine beaches with luxury accommodations and spa treatments.",
        highlights: ["Mirissa Beach", "Whale Watching", "Ayurvedic Spa"]
    },
    {
        id: 4,
        title: "Hill Country Escape",
        duration: "4 Days",
        price: "$699",
        image: "/images/pexels-ollivves-1078983.webp",
        description: "Journey through misty mountains, tea plantations, and colonial charm.",
        highlights: ["Ella Nine Arch Bridge", "Tea Factory Visit", "Little Adam's Peak"]
    },
    {
        id: 5,
        title: "Adventure & Trekking",
        duration: "8 Days",
        price: "$1,499",
        image: "/images/carous01.webp",
        description: "Challenge yourself with hiking, white water rafting, and mountain climbing.",
        highlights: ["Adam's Peak Hike", "Kitulgala Rafting", "Knuckles Range"]
    },
    {
        id: 6,
        title: "Culinary Journey",
        duration: "5 Days",
        price: "$799",
        image: "/images/pexels-ollivves-1078983.webp",
        description: "Discover authentic Sri Lankan flavors through cooking classes and food tours.",
        highlights: ["Spice Garden Tour", "Cooking Classes", "Street Food Walk"]
    }
];



export default function PackagesSection() {
    const router = useRouter();

    return (
        <div className="relative px-[1rem] lg:px-[6rem] py-[80px] overflow-hidden ">
            {/* Fixed Background Image */}
            <div className="absolute inset-0 z-0 ">
                <Image
                    src="/images/pexels-freestockpro-330260.webp"
                    alt="Sri Lanka landscape"
                    fill
                    className="object-cover"
                />
             
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-white transparent z-0" />
            <div className="relative z-10 max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16 "
                        >
                            <h2 className="text-5xl font-bold  mb-6">
                                Curated Journeys
                            </h2>
                            <p className="text-xl  max-w-3xl mx-auto leading-relaxed">
                                Experience the magic of Sri Lanka through our expertly crafted adventures. 
                                From ancient kingdoms to pristine coastlines, every journey tells a story of wonder and discovery.
                            </p>
                        </motion.div>

                        {/* Uniform Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {PACKAGES.map((pkg, idx) => (
                                <motion.div
                                    key={pkg.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="h-[400px]"
                                >
                                    <PackageCard 
                                        pkg={pkg} 
                                        className="h-full" 
                                        showFeatured={idx === 0}
                                    />
                                </motion.div>
                            ))}
                        </div>


                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex justify-center"
                        >
                            <Button onClick={() => router.push('/offers')}>
                                View All Packages
                            </Button>
                        </motion.div>
            </div>
        </div>
    );
}