'use client';
import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function ImageGalleryCard({ close, handleNext, HandlePrev, image, title }) {
    const mainDiv = useRef(null);
    const imageBox = useRef(null);
    const nextBtn = useRef(null);
    const closeBtn = useRef(null);
    const prevBtn = useRef(null);
    useEffect(() => {
        const handleClose = (e) => {
            if ( e.target === mainDiv.current && e.target !== imageBox.current && e.target !== nextBtn.current && e.target !== prevBtn.current && e.target !== closeBtn.current) {
                close();
            }
        };
        window.addEventListener("click", handleClose);
        return () => {
            window.removeEventListener("click", handleClose);
        }
    }, []);
    return (
        <div
            className="fixed inset-0 z-90 flex items-center justify-center bg-black/93"
        // onClick={closeLightbox}
        ref={mainDiv}

        >
            <button
                className="absolute top-8 right-8 text-white text-3xl p-2 rounded-full bg-[var(--deepoceancolor)]/80 hover:bg-[var(--warmGold)] transition"
                onClick={(e) => { e.stopPropagation(); close(); }}
                aria-label="Close"
                ref={closeBtn}
            >
                <FaTimes />
            </button>
            <button
                className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-3xl p-2 rounded-full bg-[var(--deepoceancolor)]/80 hover:bg-[var(--warmGold)] transition"
                onClick={HandlePrev}
                // disabled={currentIndex === 0}
                aria-label="Previous"
                ref={prevBtn}
            >
                <FaChevronLeft />
            </button>
            <img
                src={image}
                alt={title}
                ref={imageBox}
                className=" md:max-h-[70vh] md:max-w-[80vw] rounded-xl shadow-2xl border-4 border-[var(--warmGold)]"
            />
            <button
                className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-3xl p-2 rounded-full bg-[var(--deepoceancolor)]/80 hover:bg-[var(--warmGold)] transition"
                onClick={handleNext}
                // disabled={imageLength === currentIndex}
                aria-label="Next"
                ref={nextBtn}
            >
                <FaChevronRight />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg bg-black/60 px-4 py-2 rounded">
                {title}
            </div>
        </div>
    );
}
