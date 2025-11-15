"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/button";

export default function PackageCard({ pkg, className = "", showFeatured = false }) {
    return (
        <div className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer ${className}`}>
            <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {showFeatured && (
                <div className="absolute top-4 left-4 bg-[var(--warmGold)] text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Featured
                </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-start mb-3">
                    <span className="bg-[var(--warmGold)] px-3 py-1 rounded-full text-sm font-semibold">
                        {pkg.duration}
                    </span>
                    <span className="text-2xl font-bold">{pkg.price}</span>
                </div>

                <h3 className="text-2xl font-bold mb-2 !text-white transition-colors">
                    {pkg.title}
                </h3>

                <p className="text-sm opacity-90 mb-4 !text-white line-clamp-2">
                    {pkg.description}
                </p>

                <div className="opacity-100 transition-opacity duration-300">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                            <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded">
                                {highlight}
                            </span>
                        ))}
                    </div>
                    <button className="w-full relative flex justify-center items-center overflow-hidden pr-2 py-2
                    text-[13px] uppercase tracking-[0.3px] font-semibold
                    rounded-full cursor-pointer transition-all duration-300 ease-in-out
                    text-white bg-[var(--deepoceancolor)] hover:bg-[var(--deepoceancolor)]/90">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}