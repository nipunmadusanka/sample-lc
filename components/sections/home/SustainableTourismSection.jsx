"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Heart, Globe, Users } from "lucide-react";

export default function SustainableTourismSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ background: 'linear-gradient(to bottom right, #1d3b3b, #0f2a2a)' }}
            className="relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 border border-green-400 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 border border-green-300 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400/20 rounded-full blur-xl"></div>
            </div>

            <div className="px-[1rem] lg:px-[6rem] py-[100px] relative z-10">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-green-400/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-green-400/30">
                        <Leaf className="w-5 h-5 text-green-300" />
                        <span className="text-green-200 font-medium">Sustainable Tourism</span>
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-bold !text-white leading-tight mb-6">
                        Travel Smart,<br />
                        <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">Tread Lightly</span>
                    </h2>
                    <p className="text-xl !text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Join us in our responsible journey to give back to mother earth. With care for our people and the environment at the heart of our operation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-300 mb-2">100%</div>
                                <div className="text-sm text-gray-400">Carbon Neutral</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-300 mb-2">50+</div>
                                <div className="text-sm text-gray-400">Communities</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-300 mb-2">25K</div>
                                <div className="text-sm text-gray-400">Trees Planted</div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            {[
                                { icon: Leaf, title: "Eco-Friendly Practices", desc: "Zero-waste initiatives and renewable energy" },
                                { icon: Users, title: "Community Empowerment", desc: "Supporting local businesses and cultures" },
                                { icon: Heart, title: "Responsible Tourism", desc: "Ethical wildlife and cultural experiences" },
                                { icon: Globe, title: "Sustainable Future", desc: "Preserving destinations for generations" }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold !text-white mb-1">{item.title}</h4>
                                        <p className="text-sm !text-gray-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.button 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
                        >
                            Learn More About Our Impact
                        </motion.button>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative"
                    >
                        <div className="relative h-[700px] rounded-3xl overflow-hidden">
                            <Image 
                                src="https://images.pexels.com/photos/5029853/pexels-photo-5029853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                alt="Sustainable Tourism" 
                                width={600} 
                                height={700}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            
                            {/* Floating Elements */}
                            <div className="absolute top-6 right-6 bg-green-500/90 backdrop-blur-sm rounded-2xl p-4 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <Leaf className="w-5 h-5" />
                                    <span className="font-semibold">Carbon Neutral</span>
                                </div>
                                <p className="text-sm opacity-90">Every journey counts</p>
                            </div>
                            
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Protecting Paradise Together</h3>
                                    <p className="text-gray-600 mb-4">Every journey with us contributes to preserving Sri Lanka's natural beauty and supporting local communities.</p>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            <span className="text-sm text-gray-600">Wildlife Protected</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                            <span className="text-sm text-gray-600">Communities Supported</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}