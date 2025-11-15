"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

const INSIGHTS = [
    {
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Travel Guide",
        title: "Best Time to Visit Sri Lanka",
        excerpt: "Discover the perfect seasons for your Sri Lankan adventure",
        date: "Dec 2024",
        readTime: "5 min read"
    },
    {
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Culture",
        title: "Ancient Temples & Sacred Sites",
        excerpt: "Explore Sri Lanka's spiritual heritage and architectural wonders",
        date: "Nov 2024",
        readTime: "7 min read"
    },
    {
        image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Wildlife",
        title: "Safari Adventures in Sri Lanka",
        excerpt: "Encounter elephants, leopards, and exotic birds in their natural habitat",
        date: "Nov 2024",
        readTime: "6 min read"
    }
];

export default function InsightsSection() {
    return (
        <div className="px-[1rem] lg:px-[6rem] py-[80px] bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[var(--deepoceancolor)] mb-4">
                        Travel Insights
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Expert tips and guides to help you make the most of your Sri Lankan journey
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {INSIGHTS.map((insight, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={insight.image}
                                    alt={insight.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[var(--deepoceancolor)] text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {insight.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--deepoceancolor)] transition-colors">
                                    {insight.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {insight.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{insight.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{insight.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <button className="bg-[var(--deepoceancolor)] text-white px-8 py-3 rounded-full hover:bg-[var(--lightBlue)] transition-colors duration-300 font-medium">
                        View All Articles
                    </button>
                </motion.div>
            </div>
        </div>
    );
}