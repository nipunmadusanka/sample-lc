"use client";
import React, { useEffect } from "react";
import Storage from "@/lib/DataStorage";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AuthGuards({ children }) {
  const router = useRouter();
  const accessToken = Storage.getItem("accessToken");
  
  useEffect(() => {
    if (!accessToken) {
    //   router.push("/dashboard");
    //   toast.info("You are already logged in.");
    // } else {
      // toast.error("You must be logged in to access this page.");
      router.push("/login");
    }
  }, [accessToken, router]);

  //   if (!accessToken) {
  //     return null; // Optionally, you can return a loading spinner or similar here
  //   }

  return children; // Allow access to the page
}
