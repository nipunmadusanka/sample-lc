"use client";
import React, { useEffect, useRef, useState } from "react";

const SLIDES = [
    {
        title: "One Iconic Stay A Thousand Moments of Grace",
        description: "Experience the best of Polhena with us.",
        image: "/images/pexels-elina-sazonova-4403903.webp",
    }
];

const AUTOPLAY_INTERVAL = 6000; // slower autoplay

export default function CarouselSection() {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutRef = useRef(null);
    const numSlides = SLIDES.length;
    const touchStartX = useRef(null);

    // Smooth autoplay logic (prevent stacking intervals)
    useEffect(() => {
        clearInterval(timeoutRef.current);
        const next = () => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % numSlides);
                setIsAnimating(false);
            }, 600); // match transition duration
        };
        timeoutRef.current = setInterval(next, AUTOPLAY_INTERVAL);
        return () => clearInterval(timeoutRef.current);
    }, [numSlides, current]);

    // Pause on hover/focus
    const containerRef = useRef(null);
    useEffect(() => {
        const stop = () => clearInterval(timeoutRef.current);
        const play = () => {
            clearInterval(timeoutRef.current);
            timeoutRef.current = setInterval(() => {
                setIsAnimating(true);
                setTimeout(() => {
                    setCurrent((prev) => (prev + 1) % numSlides);
                    setIsAnimating(false);
                }, 600);
            }, AUTOPLAY_INTERVAL);
        };
        const node = containerRef.current;
        node.addEventListener("mouseenter", stop);
        node.addEventListener("mouseleave", play);
        node.addEventListener("focusin", stop);
        node.addEventListener("focusout", play);
        return () => {
            node.removeEventListener("mouseenter", stop);
            node.removeEventListener("mouseleave", play);
            node.removeEventListener("focusin", stop);
            node.removeEventListener("focusout", play);
        };
    }, [numSlides]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (isAnimating) return;
            if (e.key === "ArrowLeft") {
                setIsAnimating(true);
                setTimeout(() => {
                    setCurrent((prev) => (prev - 1 + numSlides) % numSlides);
                    setIsAnimating(false);
                }, 600);
            }
            if (e.key === "ArrowRight") {
                setIsAnimating(true);
                setTimeout(() => {
                    setCurrent((prev) => (prev + 1) % numSlides);
                    setIsAnimating(false);
                }, 600);
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [numSlides, isAnimating]);

    // Touch swipe support
    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;
        const onTouchStart = (e) => {
            touchStartX.current = e.touches[0].clientX;
        };
        const onTouchEnd = (e) => {
            if (touchStartX.current === null || isAnimating) return;
            const deltaX = e.changedTouches[0].clientX - touchStartX.current;
            if (deltaX > 50) {
                setIsAnimating(true);
                setTimeout(() => {
                    setCurrent((prev) => (prev - 1 + numSlides) % numSlides);
                    setIsAnimating(false);
                }, 600);
            }
            if (deltaX < -50) {
                setIsAnimating(true);
                setTimeout(() => {
                    setCurrent((prev) => (prev + 1) % numSlides);
                    setIsAnimating(false);
                }, 600);
            }
            touchStartX.current = null;
        };
        node.addEventListener("touchstart", onTouchStart);
        node.addEventListener("touchend", onTouchEnd);
        return () => {
            node.removeEventListener("touchstart", onTouchStart);
            node.removeEventListener("touchend", onTouchEnd);
        };
    }, [numSlides, isAnimating]);

    return (
        <section
            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200"
            aria-label="Main Carousel"
        >
            <div
                className="w-full h-screen relative overflow-hidden transition-all duration-500 focus:outline-none"
                ref={containerRef}
                tabIndex={0}
                role="region"
                aria-roledescription="carousel"
                aria-live="polite"
            >
                <div className="relative w-full h-full">
                    {SLIDES.map((slide, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out
                                ${idx === current
                                    ? "opacity-100 translate-x-0 z-10"
                                    : idx < current
                                        ? "opacity-0 -translate-x-10 z-0 pointer-events-none"
                                        : "opacity-0 translate-x-10 z-0 pointer-events-none"
                                }`}
                            aria-hidden={idx !== current}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover object-center z-0 select-none transition-all duration-700"
                                draggable={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent " />
                            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6">
                                <h2 className="!text-white max-w-[60%] text-2xl md:text-7xl !font-[500] mb-4 drop-shadow-lg tracking-tight rounded-xl px-4 py-2">
                                   {slide.title}
                                </h2>
                                {/* <p className="text-white text-base md:text-2xl font-medium drop-shadow mb-6 rounded-lg px-3 py-1">
                                    {slide.description}
                                </p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}