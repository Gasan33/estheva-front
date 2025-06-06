"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ViewAllText from "./ViewAllText";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCategories } from "@/context/CategoriesContext";

const OurTreatments = ({ bgColor }: { bgColor: string }) => {
    const { categories } = useCategories()
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={`mx-auto   w-full items-center justify-center px-4 py-8 sm:px-6 lg:px-16 ${bgColor}`}>
            {/* Section Header */}
            <ViewAllText href="/treatments" title="Treatments" titleColor="" />

            {/* Categories Grid */}
            <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                {categories?.slice(0, 6).map((category, index) => (
                    <Link
                        key={index}
                        href={`/treatments/categories/${category.category_slug}`}
                        data-aos="fade-up" // AOS animation
                        data-aos-delay={index * 100} // Delay each item for a staggered animation
                        className="bg-transparent rounded-xl p-6 hover:scale-105 cursor-pointer transition duration-300"
                    >
                        <Image
                            src={category.relations.images.attributes.path}
                            alt={category.category_name}
                            width={72}
                            height={72}
                            className="p-2 rounded-full object-contain bg-white mx-auto"
                        />
                        <h2 className="mt-4 text-lg font-normal text-primary text-center sm:text-xl">
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
