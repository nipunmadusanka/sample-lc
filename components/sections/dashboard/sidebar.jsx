'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Storage from '@/lib/DataStorage';
import { toast } from 'react-toastify';
import { signOut } from '@/lib/services';
import { Home, Calendar, Bed, MapPin, PartyPopper, Tag, FileText, Image, Settings, LogOut, Code } from 'lucide-react';
export default function Sidebar() {
    // const [isOpen, setIsOpen] = useState(false);
    // const router = useRouter();
    const pathname = usePathname();
    const pathParts = pathname.split('/').filter(part => part);

    // const toggleSidebar = () => {
    //     setIsOpen(!isOpen);
    // };

    // const navigateTo = (path) => {
    //     router.push(path);
    //     setIsOpen(false);
    // };
    const logOut = async () => {
        try {
            await signOut();
            Storage.removeItem("accessToken");
            Storage.removeItem("userInfo");
            toast.success("Logout successful!");
            window.location.href = "/login";
        } catch (error) {
            toast.error(error.errorMsg || "An unexpected error occurred.");
        }
    }
    return (
        <>
            {/* <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}>
                <button onClick={toggleSidebar} className="p-4 text-white">
                    {isOpen ? 'Close' : 'Open'} Sidebar
                </button> */}
            {/* <nav className="mt-4">
                <ul>
                    <li>
                        <button onClick={() => navigateTo('/dashboard')} className="block p-4 hover:bg-gray-700">Dashboard</button>
                    </li>
                    <li>
                        <button onClick={() => navigateTo('/settings')} className="block p-4 hover:bg-gray-700">Settings</button>
                    </li>
                </ul>
            </nav> */}
            <aside className="bg-gradient-to-b from-gray-800 to-gray-900 w-full sm:w-64 border-b sm:border-b-0 sm:border-r border-gray-700/50 p-4 shadow-2xl">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold !text-white mb-2">Navigation</h2>
                    <div className="w-full h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
                </div>
                <nav className="flex justify-center items-center overflow-x-scroll sm:block sm:overflow-hidden pb-3 sm:pb-0 sm:space-y-2">
                    <Link href="/dashboard" className={`flex items-center gap-3 rounded-lg hover:bg-gray-700/50 ${pathParts[0] === 'dashboard' && pathParts[1] === undefined ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30' : ''} px-3 py-3 transition-all duration-200 group`}>
                        <Home className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        <span className="hidden sm:block">Dashboard</span>
                    </Link>
                    <Link href="/dashboard/booking" className={`flex items-center gap-3 rounded-lg hover:bg-gray-700/50 ${pathParts[1] === 'booking' ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30' : ''} px-3 py-3 transition-all duration-200 group`}>
                        <Calendar className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        <span className="hidden sm:block">Bookings</span>
                    </Link>
                    <Link href="/dashboard/rooms" className={`flex items-center gap-3 rounded-lg hover:bg-gray-700/50 ${pathParts[1] === 'rooms' ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30' : ''} px-3 py-3 transition-all duration-200 group`}>
                        <Bed className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        <span className="hidden sm:block">Rooms</span>
                    </Link>
                    <Link href="/dashboard/tours" className={`flex items-center gap-3 rounded-lg hover:bg-gray-700/50 ${pathParts[1] === 'tours' ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30' : ''} px-3 py-3 transition-all duration-200 group`}>
                        <MapPin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        <span className="hidden sm:block">Tours</span>
                    </Link>
                    <Link href="/dashboard/celebration" className={`flex items-center gap-3 rounded-lg hover:bg-gray-700/50 ${pathParts[1] === 'celebration' ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30' : ''} px-3 py-3 transition-all duration-200 group`}>
                        <PartyPopper className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        <span className="hidden sm:block">Celebrations</span>
                    </Link>
                    <Link href="/dashboard/offers" className={`flex items-center gap-3 rounded-lg hover:bg-gray-700/50 ${pathParts[1] === 'offers' ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30' : ''} px-3 py-3 transition-all duration-200 group`}>
                        <Tag className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        <span className="hidden sm:block">Offers</span>
                    </Link>
                    <Link href="/dashboard/articles" className={`flex items-center gap-3 rounded-lg hover:bg-gray-700/50 ${pathParts[1] === 'articles' ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30' : ''} px-3 py-3 transition-all duration-200 group`}>
                        <FileText className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        <span className="hidden sm:block">Articles</span>
                    </Link>
                    <Link href="/dashboard/gallery" className={`flex items-center gap-3 rounded-lg hover:bg-gray-700/50 ${pathParts[1] === 'gallery' ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30' : ''} px-3 py-3 transition-all duration-200 group`}>
                        <Image className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        <span className="hidden sm:block">Gallery</span>
                    </Link>
                    <Link href="/dashboard/settings" className={`flex items-center gap-3 rounded-lg hover:bg-gray-700/50 ${pathParts[1] === 'settings' ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30' : ''} px-3 py-3 transition-all duration-200 group`}>
                        <Settings className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        <span className="hidden sm:block">Settings</span>
                    </Link>
                    
                    <div className="my-4">
                        <div className="w-full h-px bg-gray-700"></div>
                    </div>
                    
                    <Link href="/dashboard/developer" className={`flex items-center gap-3 rounded-lg hover:bg-purple-700/30 ${pathParts[1] === 'developer' ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30' : ''} px-3 py-3 transition-all duration-200 group`}>
                        <Code className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                        <span className="hidden sm:block text-purple-300">Developer</span>
                    </Link>
                    
                    <button onClick={logOut} className="flex items-center gap-3 rounded-lg text-red-400 cursor-pointer hover:bg-red-900/30 w-full text-start hover:text-red-300 px-3 py-3 transition-all duration-200 group mt-4">
                        <LogOut className="w-5 h-5" />
                        <span className="hidden sm:block">Logout</span>
                    </button>
                </nav>
            </aside>
            {/* </div> */}
        </>
    );
};