'use client';
import Storage from "@/lib/DataStorage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useRequireAuth() {
  const router = useRouter();
  const token = Storage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [router, token]);
}
