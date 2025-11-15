"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for Next.js routing

const BottomNav = () => {
    const [scrolling, setScrolling] = useState(false);
    // const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname(); // Reliable for detecting current page
    // const navItems = ["Home", "Accommodation", "Location", "Offers", "Experiences", "Gallery", "Contact"];
    const pathWithoutLocale = (() => {
        const parts = pathname.split("/").filter(Boolean);
        if (parts.length > 1) {
            parts.shift(); // remove first segment (locale)
        }
        return "/" + parts.join("/");
    })();

    const navItems = ["Home", "Accommodation", "Offers", "Tours", "Celebrations", "Location", "Experiences"];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrolly = window.scrollY;
            if (pathname !== "/") {
                setScrolling(true);
                return;
            }
            if (currentScrolly > 50) {
                setScrolling(true); // Hide when at the very top
            } else {
                setScrolling(false); // Show when scrolling up or down
            }

        }
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
        <div
            className={` w-full pr-[3rem] hidden  lg:flex items-center justify-center gap-[20px] transition-all duration-500 ease-in-out z-50
    ${scrolling ? "bg-whitetest" : "bg-transparent "}`}
        >
            {navItems.map((item, index) => {
                const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isSelected = href === "/" ? pathWithoutLocale === "/" : pathWithoutLocale.startsWith(href); // handles nested paths

                return (
                    <Link
                        key={index}
                        href={'/'}
                        // onClick={() => handleClick(item)}
                        className={`text-sm font-[500] text-white transition-colors duration-200 relative inline-block cursor-pointer ${isSelected ? "pb-[2px] after:absolute after:left-0 after:bottom-0 after:h-[1.59px] after:bg-white after:transition-all after:duration-300 after:w-full" : "after:absolute after:left-0 after:bottom-0 after:h-[1.59px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                            }`}
                    >
                        {item}
                    </Link>
                )
            })}
        </div>
    );
}

export default BottomNav;