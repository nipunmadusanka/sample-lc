"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
// import { WebDataContext } from "@/context/WebDataProvider";
// import SectionSkeleton from "@/components/ui/SectionSkeleton";
// import ArticleCard from "@/components/ui/articleCard";


// const activities = [
//     {
//         title: "Snorkeling at Coral Reef",
//         image: "/images/carous01.webp",
//         description: "Swim among colorful corals and tropical fish just steps from the shore.",
//     },
//     {
//         title: "Polhena Beach Sunset Walk",
//         image: "/images/carous01.webp",
//         description: "Enjoy breathtaking views as the sun dips into the Indian Ocean.",
//     },
//     {
//         title: "Surfing in Madiha",
//         image: "/images/carous01.webp",
//         description: "Catch gentle waves or challenge yourself at the nearby surf point.",
//     },
//     {
//         title: "Stilt Fishing Observation",
//         image: "/images/carous01.webp",
//         description: "Watch traditional stilt fishermen in action – a Sri Lankan cultural gem.",
//     },
//     {
//         title: "Turtle Watching",
//         image: "/images/carous01.webp",
//         description: "Spot sea turtles nesting or swimming in the shallow reefs near the beach.",
//     },
//     {
//         title: "Visit Paravi Duwa Temple",
//         image: "/images/carous01.webp",
//         description: "Cross the footbridge to this beautiful temple built on a small island.",
//     },
// ];

export default function ExploreSection() {
    const t = useTranslations();
    const router = useRouter();
    // const { topArticles, isLoadingTopArticles } = useContext(WebDataContext);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-screen"
        >
            {/* <div className="flex justify-center items-center flex-col gap-0 mb-[80px]">
                <h1 className="text-4xl font-bold text-center">Things to Do Around Polhena</h1>
            </div>
            {isLoadingTopArticles || topArticles.length === 0 ?
                <SectionSkeleton />
                :
                <>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topArticles.map((activity, index) => (
                            <ArticleCard key={index} article={activity} />
                        ))}
                    </div>
                </>
            } */}

            {/* <div className="flex justify-center mt-10">
                            <Button>
                                View All
                            </Button>
                        </div> */}
            <div className="relative min-h-[100vh] w-full bg-cover bg-center flex justify-center items-center px-4 lg:px-0"
                style={{ backgroundImage: "url('/images/explore3.webp')" }}>
                <span className="absolute bottom-0 right-1 text-[9px] text-gray-200">
                    Photo by Malinda Bandara on pexels
                </span>
                <div className="absolute inset-0 bg-gradient-to-b from-white from-[40%] to-transparent" />

                <div className="flex flex-col h-full w-full justify-center items-center z-10">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 px-4 lg:px-0">{t("home.explore.title")}</h1>
                    <p className="max-w-3xl text-center text-lg lg:text-xl px-4 lg:px-0 mb-8 !text-[rgba(0,0,0,0.7)]">{t("home.explore.description")}</p>
                    <Button onClick={() => router.push("/experiences")}>{t("home.explore.button")}</Button>
                </div>
            </div>
        </motion.div>
    );
}
