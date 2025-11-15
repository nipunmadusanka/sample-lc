"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Users, Award, Headphones, CheckCircle } from "lucide-react";
import Button from "@/components/button";

const SERVICES = [
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Trusted & Secure",
        description: "Licensed tour operator with full insurance coverage"
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: "24/7 Support",
        description: "Round-the-clock assistance throughout your journey"
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Expert Guides",
        description: "Professional local guides with deep cultural knowledge"
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: "Award Winning",
        description: "Recognized for excellence in Sri Lankan tourism"
    },
    {
        icon: <Headphones className="w-8 h-8" />,
        title: "Personalized Service",
        description: "Tailored experiences to match your preferences"
    },
    {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Quality Guaranteed",
        description: "Premium accommodations and reliable transportation"
    }
];

export default function WhyBookSection() {
    return (
        <div className="px-[1rem] lg:px-[6rem] py-[100px] bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-bold text-[var(--deepoceancolor)] mb-6">
                        Your Trusted Travel Partner
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        With over 15 years of experience, we deliver exceptional Sri Lankan adventures with unmatched service quality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--warmGold)]/30"
                        >
                            <div className="w-16 h-16 bg-[var(--warmGold)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--warmGold)] group-hover:scale-110 transition-all duration-300">
                                <div className="text-[var(--warmGold)] group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--deepoceancolor)] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-gradient-to-r from-[var(--deepoceancolor)] to-[var(--lightBlue)] rounded-3xl p-12 text-center !text-white"
                >
                    <h3 className="text-3xl font-bold mb-4 !text-white">
                        Ready to Explore Sri Lanka?
                    </h3>
                    <p className="text-xl mb-8 opacity-90 !text-white">
                        Join thousands of satisfied travelers who chose us for their Sri Lankan adventure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-white"></div>
                                <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-white"></div>
                                <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-white"></div>
                            </div>
                            <span className="text-sm font-semibold">50,000+ Happy Travelers</span>
                        </div>
                        <Button className="bg-white text-[var(--deepoceancolor)] hover:bg-gray-100 hover:!text-white transition-all duration-300">
                            Book Your Trip Now
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}