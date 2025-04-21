"use client";

import TreatmentsList from '@/components/common/TreatmentsList';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const Favourite = () => {
    const { data: session } = useSession();
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchFavorites = async (signal?: AbortSignal) => {
        try {
            setLoading(true);
            const response = await fetch("/api/favorites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: session?.user?.id,
                }),
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.error || "Failed to load favorites. Please try again.");

            const favoriteTreatments = result.data.map((fav: Favorite) => fav.treatment);
            console.log(favoriteTreatments)
            setTreatments(favoriteTreatments);
        } catch (error: any) {
            setError(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const controller = new AbortController();

        if (session?.user?.id) {
            fetchFavorites(controller.signal);
        }

        return () => controller.abort();
    }, [session]);


    return (
        <div className="mt-8">
            <div className="flex justify-between items-center">
                <h1 className="text-lg md:text-[28px] lg:text-[32px] text-primary font-semibold">My Favourites</h1>
            </div>
            <TreatmentsList treatments={treatments} loading={loading} error={error} />
        </div>
    );
};

export default Favourite;
