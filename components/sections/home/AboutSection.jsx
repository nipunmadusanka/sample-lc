"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutSection() {
const router = useRouter();
    const contentRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = contentRef.current;
        if (!node) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const goToBookingPage = () => {
        if(!checkIn || !checkOut || !adults || !children) return;
        const params = new URLSearchParams(window.location.search);
        params.set("checkIn", checkIn.toISOString());
        params.set("checkOut", checkOut.toISOString());
        params.set("adults", adults);
        params.set("children", children);
        router.push(`/guest-enquiry?${params.toString()}`);
    }

    return (
        <div className=" relative px-[1rem] lg:px-[6rem] py-[80px] min-h-screen  flex items-center justify-center ">
            
            <div
                ref={contentRef}
                className={`flex justify-center items-center transition-all duration-1000 ease-out
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                `}
            >
                <div className="flex justify-center items-center flex-col gap-8 max-w-4xl">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="w-[200px] sm:w-[300px] h-[1px] bg-[var(--deepoceancolor)] mb-2" />
                        <div className="text-center px-4">
                            <p className="text-lg sm:text-2xl font-light !mt-0 text-[var(--deepoceancolor)] tracking-[0.1em] sm:tracking-[0.2em] uppercase">Sri Lanka's Premier</p>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--deepoceancolor)] tracking-wide leading-tight">Destination Management</h2>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-[var(--deepoceancolor)] mt-2">Company</h3>
                        </div>
                        <div className="w-[200px] sm:w-[300px] h-[1px] bg-[var(--deepoceancolor)] mt-2" />
                    </div>

                    <div className="text-center space-y-4 sm:space-y-6 px-4">
                        <p className="text-xl sm:text-2xl font-light text-[var(--deepoceancolor)] leading-relaxed">
                            Welcome to <span className="font-semibold text-[var(--deepoceancolor)]">Leisure Ceylon</span>
                        </p>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            Your gateway to extraordinary Sri Lankan experiences. As the island's leading destination management company, we craft bespoke journeys that showcase the authentic beauty, rich heritage, and warm hospitality of our paradise isle.
                        </p>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            From pristine beaches and ancient temples to wildlife safaris and cultural immersions, we curate every detail to create unforgettable memories that last a lifetime.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-6 sm:mt-8">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-[var(--deepoceancolor)]">5+</div>
                                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Years Excellence</div>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-[var(--deepoceancolor)]">98%</div>
                                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Client Satisfaction</div>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-[var(--deepoceancolor)]">10K+</div>
                                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Happy Guests</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}