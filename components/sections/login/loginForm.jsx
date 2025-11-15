"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/services";
import Storage from "@/lib/DataStorage";
import { toast } from "react-toastify";
import { EyeOff, Eye } from "lucide-react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const token = Storage.getItem("accessToken");
    if (token) window.location.href = "/dashboard";

    const handleLogin = async () => {
        setIsLoading(true);

        if (!email || !password) {
            toast.error("Please enter both email and password.");
            setIsLoading(false);
            return;
        }

        try {
            const result = await signIn(
                email,
                password,
            );
            if (result?.error) {
                toast.error(result.errorMsg || "Login failed. Please try again.");
                return;
            }
            if (result?.data) {
                if (result?.data?.info) {
                    Storage.setItem("userInfo", result.data.info);
                }
                if (result?.data?.token) {
                    Storage.setItem("accessToken", result.data.token);
                    toast.success("Login successful!");
                    router.push("/dashboard");
                } else {
                    toast.error("Login failed. Please try again.");
                }
            }

        } catch (error) {
            toast.error(error?.errorMsg || "An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-[400px] p-6 bg-white rounded-lg shadow-md">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 w-full p-2 border border-gray-300 text-black rounded"
            />
            <div className="relative w-full mb-4">
                <input
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 text-black rounded"
                />
                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 text-black top-1/2 transform -translate-y-1/2 cursor-pointer">{showPassword ?
                    <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </span>
            </div>
            <button onClick={handleLogin} disabled={isLoading} className="bg-[var(--sandColor)] hover:cursor-pointer text-white py-2 px-4 rounded">
                {isLoading ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.07A8.003 8.003 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3.93-1.868zM12 20a8.003 8.003 0 01-6.07-2.93l-3.93 1.868A11.95 11.95 0 0012 24v-4zm6.07-2.93A8.003 8.003 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3.93 1.868zM20 12a8.003 8.003 0 01-2.93 6.07l3.93 1.868A11.95 11.95 0 0024 12h-4z"></path>
                        </svg>
                        Logging in...
                    </span>
                ) : (
                    "Login"
                )}
            </button>
        </div>
    );
};

export default LoginForm;