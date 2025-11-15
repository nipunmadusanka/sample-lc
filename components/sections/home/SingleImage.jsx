'use client';
import React, { useContext } from "react";
import { WebDataContext } from "@/context/WebDataProvider";
import SectionSkeleton from "@/components/ui/SectionSkeleton";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export default function SingleImage() {
    const router = useRouter();
    const { galleryImages, isLoadingGalleryImages } = useContext(WebDataContext);
    const singleImage = galleryImages && galleryImages.length > 0 ? galleryImages[1] : null;

    const cutDescription = (desc) => {
        if (desc.length > 200) {
            return desc.substring(0, 200) + "...";
        } else {
            return desc;
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className=""
        >
            {isLoadingGalleryImages || !galleryImages ? (
                <SectionSkeleton />
            ) : (
                <div className="relative flex justify-center items-center flex-col gap-0 h-[60vh] overflow-hidden"
                    style={{ backgroundImage: `url(${singleImage?.images[0]?.path})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* <h1 className="text-4xl font-bold text-center">Things to Do Around Polhena</h1> */}
                    <div className="absolute inset-0 bg-black opacity-40" />
                    <div className="absolute bottom-10 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 sm:p-0 ">
                            <div>
                                <h2 className="!text-1xl md:!text-3xl font-semibold !text-white text-center drop-shadow-lg">
                                    {singleImage && singleImage ? singleImage?.title : "Welcome to Cavendish Polhena"}
                                </h2>
                            </div>
                            <div>
                                <div className="text-start !text-white drop-shadow-lg max-w-md">
                                    <p className="!text-white !mt-0">{cutDescription(singleImage && singleImage ? singleImage?.description : "Discover the beauty of Cavendish Polhena and its stunning landscapes, breathtaking views, and vibrant culture.")}</p>
                                </div>
                                <span onClick={() => router.push(`/gallery`)} className="relative mt-4 inline-block text-white cursor-pointer text-[13px] font-semibold uppercase tracking-[0.6px] transition-all duration-500 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--warmGold)] after:transition-all after:duration-500">
                                    Gallery
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </motion.div>
    );
}
