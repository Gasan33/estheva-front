"use client";
import React, { useEffect, useState } from "react";
import TreatmentCard from "./TreatmentCard";
import TreatmentCardSkeleton from "../skeletons/TreatmentCardSkeleton";
import config from "@/lib/config";

interface TreatmentsListProps {
    category: number;
}

const TreatmentsList = ({ category }: TreatmentsListProps) => {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    console.log(category)

    const fetchTreatmentsByCategory = async (category_id: number) => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`${config.env.apiEndpoint}/treatments/search/${category_id}`);
            if (!response.ok) throw new Error("Failed to fetch treatments");

            const data = await response.json();
            console.log(data)
            setTreatments(data.data || []);
        } catch (err: any) {
            // console.error("Error fetching treatments:", err);
            setError(err.message || "An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (category !== undefined && category !== null) {
            fetchTreatmentsByCategory(category);
        }
    }, [category]);

    const renderCards = () => {
        if (loading) {
            return Array.from({ length: 6 }).map((_, index) => (
                <TreatmentCardSkeleton key={index} />
            ));
        }

        if (!treatments.length && !loading) {
            return (
                <div className="col-span-full text-center text-gray-500">
                    No treatments available for this category.
                </div>
            );
        }

        return treatments.map((item, index) => (
            <TreatmentCard treatment={item} index={index} key={item.id} />
        ));
    };

    if (error) {
        return <p className="text-center mt-4 text-red-500">{error}</p>;
    }

    return (
        <div className="mt-8">
            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-[30px]">
                {renderCards()}
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="flex lg:hidden py-2 overflow-x-auto space-x-5 px-1">
                {loading
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <div className="flex-shrink-0 w-[80%] sm:w-[60%]" key={index}>
                            <TreatmentCardSkeleton />
                        </div>
                    ))
                    : treatments.map((item, index) => (
                        <div key={item.id} className="flex-shrink-0 w-[80%] sm:w-[60%]">
                            <TreatmentCard treatment={item} index={index} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TreatmentsList;
