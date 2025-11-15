'use client';
import React, { useState, useRef, useEffect } from "react";
import { BsChatDots } from "react-icons/bs";
import { FaCommentDots, FaChevronRight, FaPaperPlane } from "react-icons/fa"; // Add FaPaperPlane
import { FiSend } from "react-icons/fi"; // Modern send icon
import { sendMessage } from "@/lib/services/chatService";

const START_CHAT = [
    {
        message: "Hello! How can I help you?",
        sender: "bot",
    },
]
const ChatBot = () => {
    const [messages, setMessages] = useState(START_CHAT);
    const [userInput, setUserInput] = useState("");
    const [openChat, setOpenChat] = useState(false);
    const [loading, setLoading] = useState(false);
    const [lastSent, setLastSent] = useState(0);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleUserInput = (e) => {
        let userInput = e.target.value;
        setUserInput(userInput);
    };

    // const handleSend = async () => {
    //     if (userInput.trim() === "") return;
    //     setLoading(true);

    //     // Add user message first
    //     setMessages(prev => [...prev, { message: userInput, sender: "user" }]);

    //     try {
    //         const response = await sendMessage({ message: userInput });
    //         if (response && response.answer) {
    //             setMessages(prev => [...prev, { message: response.answer, sender: "bot" }]);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         setMessages(prev => [...prev, { message: "Sorry, something went wrong.", sender: "bot" }]);
    //     } finally {
    //         setLoading(false);
    //         setUserInput("");
    //     }
    // };



    const handleSend = async () => {
        const now = Date.now();

        // Prevent sending if loading or within 2 seconds of last send
        if (loading || now - lastSent < 2000) return;

        // Basic input validation: block empty, too short, or spammy input
        const trimmedInput = userInput.trim();
        if (
            trimmedInput === "" ||
            trimmedInput.length < 2 ||
            /^([a-zA-Z0-9])\1{10,}$/.test(trimmedInput) // repeated character spam
        ) return;

        setLoading(true);
        setLastSent(now);

        setMessages(prev => [...prev, { message: trimmedInput, sender: "user" }]);

        try {
            const response = await sendMessage({ message: trimmedInput });
            if (response && response.answer) {
                setMessages(prev => [...prev, { message: response.answer, sender: "bot" }]);
            }
        } catch (error) {
            console.log(error);
            setMessages(prev => [...prev, { message: "Sorry, something went wrong.", sender: "bot" }]);
        } finally {
            setLoading(false);
            setUserInput("");
        }
    };

    return (
        <>
            <div className={`fixed bottom-12 sm:bottom-10 right-6 sm:right-4 rounded-2xl overflow-hidden shadow-2xs drop-shadow-2xl backdrop-blur-3xl ${openChat && 'border border-[var(--deepoceancolor)]'} z-50`}>
                <div
                    className={`relative text-gray-700 space-y-2 overflow-hidden transition-all duration-700 ease-in-out w-[90vw] sm:w-[300px] ${openChat ? "opacity-100 h-[80vh] sm:h-[480px] " : "opacity-0 h-0"
                        }`}
                >
                    <div className="flex items-center justify-end h-8 bg-[var(--deepoceancolor)] w-full sm:w-[300px] px-4 ">
                        <FaChevronRight size={18} className="text-white rotate-90 cursor-pointer" onClick={() => setOpenChat(false)} />
                    </div>
                    <div className="absolute bottom-[33px] left-0 right-0 top-[33px] overflow-y-scroll scrollbar-hide">
                        <div className="flex flex-col space-y-4 py-4 px-2">
                            {
                                messages.map((message, index) => (
                                    <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} items-center space-x-2`}>
                                        {/* <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                        <p className="text-sm !mt-0">{message.message}</p> */}
                                        <div className={`w-fit ${message.sender === "user" ? "bg-white" : "bg-[var(--deepoceancolor)]"} rounded-md drop-shadow-md p-2 max-w-[90%]`}>
                                            <p className={`text-sm !mt-0 break-all  ${message.sender === "user" ? "!text-black" : "!text-white"} whitespace-break-spaces `}>{message?.message}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* <div className={`w-fit  rounded-md drop-shadow-md p-2 max-w-[90%]`}>
                                            <p className={`text-sm !mt-0 `}></p>
                                        </div> */}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                    <div className="absolute bottom-2 left-0 right-0 bg-white border-y border-[var(--deepoceancolor)]">
                        <div className="relative border-gray-300 h-[40px]">
                            <textarea type="text" onChange={handleUserInput} value={userInput} className="w-full border-0 pr-[40px] bg-white h-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--deepoceancolor)] text-[12px]" placeholder="Type your message..." />
                            <button
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-4xl cursor-pointer flex items-center justify-center"
                                onClick={handleSend}
                                disabled={loading}
                            >
                                {loading ? (
                                    <svg className="animate-spin h-5 w-5 text-[var(--deepoceancolor)]" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                    </svg>
                                ) : (
                                    <FiSend size={20} />
                                )}
                            </button>
                        </div>
                    </div>
                    <span className="absolute bottom-0 left-0 right-0 text-[10px] text-center text-[var(--deepoceancolor)] mx-2">ChatBot can make mistakes. Check important info.</span>
                </div>
            </div>
            <div onClick={() => setOpenChat((prev) => !prev)} className="fixed sm:bottom-10 bottom-12 right-6 sm:right-4 h-[50px] w-[50px] flex items-center justify-center bg-[var(--deepoceancolor)] rounded-full shadow-lg z-40 cursor-pointer hover:bg-[var(--warmGold)] transition">
                <FaCommentDots size={28} className={`text-white transition-all duration-200 ease-in-out ${openChat && 'rotate-180'}`} />
            </div>
        </>
    );
};

export default ChatBot;