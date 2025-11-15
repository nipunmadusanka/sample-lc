"use client";

import { useEffect, useState } from "react";
import Storage from "@/lib/DataStorage";
import { useRouter } from "next/navigation";
import DashboardSkeleton from "@/components/ui/DashboardSkelton";

export default function AuthDashboard({ children }) {
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(null);
  const router = useRouter();

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(true);
//     }, 3000);
//     return () => {
//       clearTimeout();
//     };
//   }, []);
  useEffect(() => {
    // load token once on mount
    const token = Storage.getItem("accessToken");
    if (!token) {
      // no token -> redirect
      router.replace("/login");
    } else {
      setAccessToken(token);
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return <DashboardSkeleton />;
  }

  // if no token, we already redirected; don't render children
  if (!accessToken) {
    return null;
  }

  return <>{children}</>;
}
