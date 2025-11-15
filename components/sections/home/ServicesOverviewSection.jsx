"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Camera, Car, Home, Utensils, Calendar } from "lucide-react";

const SERVICES = [
    {
        icon: <MapPin className="w-8 h-8" />,
        title: "Tour Packages",
        description: "Curated experiences across Sri Lanka's highlights",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        icon: <Camera className="w-8 h-8" />,
        title: "Cultural Tours",
        description: "Immerse in ancient heritage and local traditions",
        image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        icon: <Car className="w-8 h-8" />,
        title: "Transportation",
        description: "Comfortable vehicles with professional drivers",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        icon: <Home className="w-8 h-8" />,
        title: "Accommodation",
        description: "Handpicked hotels and unique stays",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        icon: <Utensils className="w-8 h-8" />,
        title: "Culinary Experiences",
        description: "Authentic Sri Lankan cuisine adventures",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        icon: <Calendar className="w-8 h-8" />,
        title: "Event Planning",
        description: "Weddings, celebrations, and corporate events",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

export default function ServicesOverviewSection() {
    return (
        <div className="relative px-[1rem] lg:px-[6rem] py-[100px] bg-[url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-gray-50/98"></div>
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block">
                        <div className="w-20 h-1 bg-[var(--warmGold)] mx-auto mb-6"></div>
                        <h2 className="text-5xl font-bold text-[var(--deepoceancolor)] mb-6">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive travel solutions designed to create your perfect Sri Lankan journey
                        </p>
                        <div className="w-20 h-1 bg-[var(--warmGold)] mx-auto mt-6"></div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[var(--warmGold)] transition-all duration-300">
                                    <div className="text-[var(--deepoceancolor)] group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--deepoceancolor)] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-4 w-0 h-0.5 bg-[var(--warmGold)] group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 bg-[var(--deepoceancolor)] rounded-full border-2 border-white"></div>
                            <div className="w-8 h-8 bg-[var(--warmGold)] rounded-full border-2 border-white"></div>
                            <div className="w-8 h-8 bg-[var(--lightBlue)] rounded-full border-2 border-white"></div>
                        </div>
                        <span className="text-gray-700 font-medium">Trusted by 10,000+ travelers</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}