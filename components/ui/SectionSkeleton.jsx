"use client";
import React from "react";
import LoadingSkeleton from "./LoadingSkeleton"; // assuming you already have this

const SectionSkeleton = () => {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center ">
            {/* Title */}
            <div className="space-y-4">
                <LoadingSkeleton width="100%" height="2rem" />

                {/* Paragraph lines */}
                <div className="space-y-2">
                    <LoadingSkeleton width="100%" height="1rem" />
                    <LoadingSkeleton width="90%" height="1rem" />
                    <LoadingSkeleton width="80%" height="1rem" />
                </div>

                {/* Button placeholder */}
                <LoadingSkeleton width="120px" height="2.5rem" borderRadius="8px" />
            </div>
        </div>
    );
};

export default SectionSkeleton;
