'use client';
import React, { useEffect, useRef, useState, useCallback } from "react";

export default function ImageCarousel({ slides = [], autoplayInterval = 5000, showIndicators = true, showArrows = true }) {

    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutRef = useRef(null);
    const numSlides = slides.length;
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
        timeoutRef.current = setInterval(next, autoplayInterval);
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
            }, autoplayInterval);
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

    // Navigation handlers
    const goTo = useCallback((idx) => {
        if (!isAnimating && idx !== current) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrent(idx);
                setIsAnimating(false);
            }, 600);
        }
    }, [isAnimating, current]);


    return (
       
            <div
                className="w-full h-[75vh] relative transition-all duration-500 focus:outline-none"
                ref={containerRef}
                tabIndex={0}
                role="region"
                aria-roledescription="carousel"
                aria-live="polite"
            >
                <div className="relative w-full h-full">
                    {slides.map((slide, idx) => (
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
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent " /> */}
                        </div>
                    ))}
                </div>
                {/* Navigation Dots */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-2 h-2 rounded-full cursor-pointer focus:outline-none transition-all duration-300
                                ${current === idx
                                    ? "bg-[var(--deepoceancolor)]"
                                    : "bg-[var(--warmGold)]/70 hover:bg-[var(--warmGold)]"
                                }`}
                            onClick={() => goTo(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            aria-current={current === idx}
                        />
                    ))}
                </div>
            </div>
       
    );
}