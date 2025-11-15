"use client";

import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const FullScreenLoadingSkeleton = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(255,255,255,0.85)",
      zIndex: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <LoadingSkeleton width="80vw" height="2.5rem" style={{ marginBottom: 24 }} />
    <LoadingSkeleton width="60vw" height="2.5rem" style={{ marginBottom: 24 }} />
    <LoadingSkeleton width="40vw" height="2.5rem" />
  </div>
);

export default FullScreenLoadingSkeleton;