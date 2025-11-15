'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const TourCard = ({ article, from = "experiences" }) => {

    const router = useRouter();
    const cutDesc = (desc) => {
        if (desc.length > 200) {
            return desc.substring(0, 200) + "...";
        } else {
            return desc;
        }
    };

    return (
        <div
            // key={index}
            className="relative group h-[500px] bg-cover bg-center overflow-hidden shadow-md cursor-pointer"
            style={{
                backgroundImage: `url('${article?.images[0]?.path}')`,
            }}
            onClick={() => router.push(`/${from}/${article?.slug}`)}
        >
            {/* Dark overlay on hover */}
            {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/70 transition-all duration-500 ease-in-out z-0" /> */}

            {/* Content */}
            {/* <div className="absolute bottom-4 left-0 right-0 p-6 z-10 transition-all duration-500 ease-in-out ">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl font-bold !text-white text-center group-hover:translate-y-0 translate-y-16 transition-all duration-500">{article?.title}</h2>
                    <p
                        className="text-sm !text-gray-200 text-center mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500"
                    >
                        {cutDesc(article?.content)}
                    </p>
                    
                    <span onClick={() => router.push(`/experiences/${article?.slug}`)} className="relative inline-block text-[var(--sandColor)] cursor-pointer text-[13px] font-semibold uppercase tracking-[2.6px] transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:mt-5 group-hover:translate-y-0 translate-y-4  hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--sandColor)] after:transition-all after:duration-500">
                        More info
                    </span>

                </div>
            </div> */}
            <div className="absolute h-30 overflow-hidden transition-all duration-400 ease-in-out group-hover:h-full bottom-0 left-0 right-0 bg-[var(--deepoceancolor)]/80 !text-white p-4">
                <div className="flex flex-col justify-center items-center h-full gap-2 ">
                    {/* <span className="text-[12px] uppercase !text-white">{slide?.heading}</span> */}
                    <h2 className="text-3xl font-bold !text-white text-center">{article?.title}</h2>
                    <p className="hidden group-hover:block opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 !text-white text-center w-2/3 "> {cutDesc(article?.descriptions)}</p>
                    <div className="hidden group-hover:block opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500">
                        {/* <span onClick={() => router.push(`/experiences/${article?.slug}`)} className="relative inline-block text-[var(--sandColor)] cursor-pointer text-[13px] font-semibold uppercase tracking-[2.6px] transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:mt-5 group-hover:translate-y-0 translate-y-4  hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--sandColor)] after:transition-all after:duration-500">
                            More info
                        </span> */}
                        <span onClick={() => router.push(`/${from}/${article?.slug}`)} className="relative mt-4 inline-block text-white cursor-pointer text-[13px] uppercase tracking-[0.6px] transition-all duration-500 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--warmGold)] after:transition-all after:duration-500">
                            Explore <ArrowRight className="w-4 h-4 text-gray-200 inline-block " />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TourCard;