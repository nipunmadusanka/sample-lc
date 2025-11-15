"use client";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

export default function Button({ children, className = "", isLoading, ...props }) {
  const baseClasses = `
    relative flex justify-center items-center overflow-hidden pr-2 py-2
    text-[13px] uppercase tracking-[0.3px] font-semibold
    rounded-full cursor-pointer transition-all duration-300 ease-in-out
    text-white 
    
    ${isLoading ? "pointer-events-none opacity-70 cursor-not-allowed" : ""}
  `;

  return (
    <button
      disabled={isLoading}
      className={twMerge(baseClasses, className, "group")}
      {...props}
    >
      {/* Background animation layer */}
      <span className="absolute inset-0 bg-[var(--deepoceancolor)] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-full"></span>

      {/* Icon + text content */}
      <span className="relative flex items-center justify-center gap-2 z-10">
        <FiPlus
          size={24}
          strokeWidth={1.5}
          className="bg-[var(--deepoceancolor)] text-white rounded-full p-[3px]"
        />
        {children}
      </span>
    </button>
  );
}

Button.displayName = "Button";
