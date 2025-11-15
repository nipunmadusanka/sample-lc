"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Users, Globe } from "lucide-react";
import Image from "next/image";

const MEMBERSHIPS = [
    {
        logo: <Award className="w-12 h-12" />,
        name: "Sri Lanka Tourism Development Authority",
        description: "Licensed Tour Operator",
        badge: "SLTDA Certified"
    },
    {
        logo: <Shield className="w-12 h-12" />,
        name: "Travel Agents Association of Sri Lanka",
        description: "Certified Member",
        badge: "TAASL Member"
    },
    {
        logo: <Users className="w-12 h-12" />,
        name: "Association of Small & Medium Tourism Enterprises",
        description: "Active Member",
        badge: "ASMTE Certified"
    },
    {
        logo: <Globe className="w-12 h-12" />,
        name: "International Air Transport Association",
        description: "Accredited Agent",
        badge: "IATA Accredited"
    }
];

export default function MemberSection() {
    return (
        <div className="px-[1rem] lg:px-[6rem] py-[80px] bg-[var(--deepoceancolor)]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold !text-white mb-6">
                        Trusted Memberships
                    </h2>
                    <p className="text-xl !text-white/90 max-w-3xl mx-auto">
                        Our certifications and memberships ensure you receive the highest standards of service and reliability
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {MEMBERSHIPS.map((membership, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                        >
                            <div className="text-[var(--warmGold)] mb-6 flex justify-center">
                                {membership.logo}
                            </div>
                            <div className="bg-[var(--warmGold)] !text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                                {membership.badge}
                            </div>
                            <h3 className="text-lg font-bold !text-white mb-2">
                                {membership.name}
                            </h3>
                            <p className="!text-white/80 text-sm">
                                {membership.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-left">
                            <h3 className="text-3xl font-bold !text-white mb-4">
                                Your Safety is Our Priority
                            </h3>
                            <p className="!text-white/90 text-lg mb-6">
                                All our operations are fully licensed, insured, and comply with international tourism standards.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white/20 px-4 py-2 rounded-full">
                                    <span className="!text-white font-semibold">✓ Fully Licensed</span>
                                </div>
                                <div className="bg-white/20 px-4 py-2 rounded-full">
                                    <span className="!text-white font-semibold">✓ Insured Operations</span>
                                </div>
                                <div className="bg-white/20 px-4 py-2 rounded-full">
                                    <span className="!text-white font-semibold">✓ 24/7 Support</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 bg-[var(--warmGold)]/20 rounded-full flex items-center justify-center">
                                <Shield className="w-16 h-16 text-[var(--warmGold)]" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}