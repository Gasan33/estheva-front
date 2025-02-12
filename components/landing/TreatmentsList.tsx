import React, { useEffect, useState } from 'react';
import TreatmentCard from './TreatmentCard';

const TreatmentsList = ({ category }: { category?: string }) => {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const fetchTreatments = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch("/api/treatments");
            if (!response.ok) throw new Error("Failed to fetch treatments");

            const data = await response.json();
            setTreatments(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        fetchTreatments();
    }, []);

    if (loading) return <p className="text-center mt-4">Loading appointments...</p>;
    if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

    return (
        <div className="mt-8">
            {/* Desktop grid layout */}
            <div className="grid-cols-1 lg:grid-cols-3 py-2 gap-5 lg:gap-[30px] hidden lg:grid">
                {treatments.map((item, index) => (
                    <TreatmentCard treatment={item} index={index} key={item.id} />
                ))}
            </div>

            {/* Scrollable horizontal row for small screens */}
            <div className="flex lg:hidden py-2 overflow-x-auto space-x-5">
                {treatments.map((item, index) => (
                    <div key={item.id} className="flex-shrink-0 w-[80%] sm:w-[60%]">
                        <TreatmentCard treatment={item} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TreatmentsList;
