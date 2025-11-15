'use client';
import React from "react";
import { useRouter } from "next/navigation";
// import { twMerge } from "tailwind-merge";



const Package = ({ pkg }) => {
    const router = useRouter();
    const cutDesc = (desc) => {
        if (desc.length > 100) {
            return desc.substring(0, 100) + "...";
        } else {
            return desc;
        }
    };

    return (
        <div
            // key={idx}
            className="relative bg-white p-6 h-[576px] bg-cover bg-center"
            style={{ backgroundImage: `url('${pkg?.images[0]?.path}')` }}
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.1),_rgba(0,0,0,1))]" />
            <div className="absolute bottom-4 left-0 right-0 p-4">
                <h2 className="text-xl font-semibold mb-2 !text-white">{pkg?.title}</h2>
                <span className="w-[100px] h-[1px] bg-gray-400 mb-2 block" />
                <p className="!text-[rgba(236,234,234,0.8)] mb-4 ">
                    {cutDesc(pkg?.descriptions)}
                </p>
                {/* <span
                    onClick={() => router.push(`/offers/offer/${pkg?._id}`)} className="inline-block text-[var(--sandColor)] cursor-pointer transition-transform duration-300 text-[13px] font-semibold uppercase tracking-[2.6px] hover:translate-x-4">
                    View Package
                </span> */}
                  <span onClick={() => router.push(`/offers/${pkg?.slug}`)} className="relative inline-block text-white cursor-pointer text-[13px] font-semibold uppercase tracking-[2.6px] transition-all duration-500 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--warmGold)] after:transition-all after:duration-500">
                              View Package
                        </span>
            </div>
        </div>
    );
};

export default Package;