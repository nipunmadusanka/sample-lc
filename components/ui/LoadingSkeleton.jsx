"use client";
import React, { useEffect } from "react";

const LoadingSkeleton = ({
  width = "100%",
  height = "1.5rem",
  borderRadius = "4px",
  style = {},
  className = "",
}) => {
  useEffect(() => {
    // Only inject the style once
    if (!document.getElementById("loading-skeleton-style")) {
      const styleTag = document.createElement("style");
      styleTag.id = "loading-skeleton-style";
      styleTag.innerHTML = `
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
        .loading-skeleton {
          display: inline-block;
          background-color: #e0e0e0;
          border-radius: 4px;
          animation: pulse 1.5s infinite;
        }
      `;
      document.head.appendChild(styleTag);
    }
  }, []);

  return (
    <div
      className={`loading-skeleton ${className}`}
      style={{
        width,
        height,
        borderRadius,
        ...style,
      }}
    />
  );
};

export default LoadingSkeleton;