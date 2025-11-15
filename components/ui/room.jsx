'use client";'
import React from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import Button from "../button";
import Link from "next/link";

export default function SingleRoom({ data, ImageRight = false }) {
    const router = useRouter();
    const highlights = [
        `${data?.highlights?.size} sqm`,
        `${data?.highlights?.bedrooms} Beds`,
        `${data?.highlights?.guests} Guests`,
    ];
    const cutDescription = (desc) => {
        if (desc.length > 550) {
            return desc.substring(0, 550) + "...";
        } else {
            return desc;
        }
    };
    const handleBookNow = (id) => {
        id && router.push(`/guest-enquiry?roomId=${id}`);
    };

    return (
        <div className="block lg:flex lg:justify-center lg:items-center transform duration-200 ease-in-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 ">
                <div className={`flex justify-center lg:col-span-1 ${ImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Image width={600} height={600} src={data?.images[0]?.path || "/images/Main-1280x976.jpg"} alt="About Us" className="w-full h-full min-h-[57vh] object-cover" />
                </div>
                <div className={`flex justify-center flex-col gap-4 lg:col-span-1 ${ImageRight ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h2 className={`text-3xl font-bold pt-2 text-start ${ImageRight ? 'lg:text-start' : 'lg:text-end'}`}>
                        {data?.title}
                    </h2>
                    <div className={`w-full overflow-x-auto scrollbar-hide flex uppercase items-center justify-start ${ImageRight ? 'lg:justify-start' : 'lg:justify-end'} gap-3`}>
                        {highlights?.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <p className="!font-semibold !mt-0 !text-[12px]">{item}</p>
                                {index < 3 - 1 && (
                                    <span className="w-[1px] h-[14px] bg-gray-400" />
                                )}
                            </div>
                        ))}
                    </div>
                    <p className={`text-lg text-gray-700 !mt-0 text-start ${ImageRight ? 'lg:text-start' : 'lg:text-end'}`}>
                        {cutDescription(data?.descriptions)}
                    </p>
                    <div className={`flex justify-start gap-3 ${ImageRight ? 'lg:justify-start' : 'lg:justify-end'} `}>
                        <Button onClick={() => handleBookNow(data?._id)} >
                            <span>book now</span>
                        </Button>
                        <Link href={`/accommodation/${data?._id}`}>
                            <Button className=" text-[var(--deepoceancolor)] hover:bg-[var(--deepoceancolor)] hover:text-white bg-[position:100%] transition-all duration-500 ease-in-out" >
                                see more
                            </Button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}