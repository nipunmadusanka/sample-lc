'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const CelebrationCard = ({ article, from = "experiences", index }) => {
    const router = useRouter();
    const cutDesc = (desc) => {
        if (desc.length > 200) {
            return desc.substring(0, 200) + "...";
        } else {
            return desc;
        }
    };

    return (
        <div className="relative group bg-white shadow-sm overflow-hidden rounded-xl">
            <div className={`flex flex-col md:grid md:grid-cols-2 gap-2 h-full`}>
                {/* Image Section */}
                <div className={`flex justify-center items-center h-[220px] md:h-[300px] w-full ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <Image
                        src={article?.images[0]?.path}
                        alt={article?.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
                    />
                </div>
                {/* Content Section */}
                <div className={`flex flex-col justify-center items-start gap-2 p-6 md:p-12 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-start">{article?.title}</h2>
                    <p className="text-start text-[14px]">{cutDesc(article?.descriptions)}</p>
                    <div className="flex justify-center mt-4">
                        <span
                            onClick={() => router.push(`/${from}/${article?.slug}`)}
                            className="relative inline-block cursor-pointer text-[14px] uppercase transition-all duration-500 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--warmGold)] after:transition-all after:duration-500"
                        >
                            Explore
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CelebrationCard;