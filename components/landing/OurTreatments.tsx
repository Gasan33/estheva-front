"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { categories } from "@/constants";
import ViewAllText from "../common/ViewAllText";
import AOS from "aos";
import "aos/dist/aos.css";
import CategoriesCardSkeleton from "../skeletons/CategoriesCardSkeleton";
import { useCategories } from "@/context/CategoriesContext";

const OurTreatments = () => {
    const { categories } = useCategories()
    useEffect(() => {

        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="mx-auto bg-primary bg-pattern w-full items-center justify-center px-4 py-8 sm:px-6 lg:px-16">
            {/* Section Header */}
            <ViewAllText href="/treatments" title="Treatments" titleColor="text-white" />

            {/* Categories Grid */}
            <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                {categories?.slice(0, 6).map((category, index) => (
                    <Link
                        key={index}
                        href={{
                            pathname: "/treatments",
                            query: { treatments: category.category_slug },
                        }}
                        data-aos="fade-up" // AOS animation
                        data-aos-delay={index * 100} // Delay each item for a staggered animation
                        className="bg-transparent rounded-xl p-6 hover:scale-105 cursor-pointer transition duration-300"
                    >
                        <Image
                            src={category.relations.images.attributes.path}
                            alt={category.category_name}
                            width={72}
                            height={72}
                            className="p-2 rounded-full object-contain bg-secondaryBackground mx-auto"
                        />
                        <h2 className="mt-4 text-lg font-normal text-white text-center sm:text-xl">
                            {category.category_name.toUpperCase()}
                        </h2>
                        <p className="mt-2 text-sm px-8 text-[#5b7e95] sm:text-base line-clamp-3 text-center">
                            {category.category_description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default OurTreatments;
