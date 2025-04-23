"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ArrowDown01Icon, ArrowRight01Icon } from "hugeicons-react";
import ExploreTreatment from "./ExploreTreatment";
import "aos/dist/aos.css";
import { ExploreTreatmentSkeleton } from "../skeletons/ExploreTreatmentSkeleton";

const ExploreWhatWeDo = () => {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [treatment, setTreatment] = useState<Treatment | null>(null);
    const [treatmentIndex, setTreatmentIndex] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true); // 👈 Add loading state

    useEffect(() => {
        fetchTreatments();
    }, []);

    const fetchTreatments = async () => {
        try {
            setLoading(true); // 👈 Start loading
            const response = await fetch(`/api/treatments`);
            const data = await response.json();
            setTreatments(data.slice(0, 10));
            if (data.length > 0) setTreatment(data[0]);
        } catch (error) {
            console.error("Error fetching treatments:", error);
        } finally {
            setLoading(false); // 👈 End loading
        }
    };

    const handleClick = (item: Treatment, idx: number) => {
        setTreatment(item);
        setTreatmentIndex(idx);
        setShow((prev) => !prev || idx !== treatmentIndex);
    };

    return (
        <section className="py-16 bg-pattern">
            <h2 className="pb-12 px-6 md:px-12 xl:px-16 text-2xl xl:text-4xl font-semibold text-gray-900">
                Explore What We Do
            </h2>

            <div className="flex flex-col xl:flex-row">
                {/* Left Tabs Section */}
                <Tabs defaultValue="clinic-treatments" className="w-full xl:w-[40%] px-6 md:px-12 xl:px-16">
                    <div className="space-y-6">
                        <TabsContent value="clinic-treatments">
                            <ul className="space-y-4">
                                {loading
                                    ? Array.from({ length: 6 }).map((_, idx) => (
                                        <li key={idx} className="h-6 bg-muted rounded w-3/4 animate-pulse" />
                                    ))
                                    : treatments.map((treatment, idx) => (
                                        <TreatmentItem
                                            key={treatment.id}
                                            treatment={treatment}
                                            idx={idx}
                                            show={show && idx === treatmentIndex}
                                            onClick={handleClick}
                                        />
                                    ))}
                            </ul>
                        </TabsContent>
                    </div>
                </Tabs>

                {/* Right Display Section for Large Screens */}
                <div className="flex-1 hidden xl:block mt-8 xl:mt-0 mr-16" key={treatmentIndex}>
                    {loading ? (
                        <ExploreTreatmentSkeleton />
                    ) : (
                        treatment && <ExploreTreatment treatment={treatment} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default ExploreWhatWeDo;

type TreatmentItemProps = {
    treatment: Treatment;
    idx: number;
    show: boolean;
    onClick: (item: Treatment, idx: number) => void;
};

const TreatmentItem: React.FC<TreatmentItemProps> = ({ treatment, idx, show, onClick }) => {
    return (
        <div>
            <li
                onClick={() => onClick(treatment, idx)}
                className="flex items-center gap-4 cursor-pointer transition-transform duration-300 hover:scale-105"
            >
                <span className="text-sm md:text-xl text-light-500">{treatment.title}</span>
                <ArrowRight01Icon className="text-primaryColor hidden xl:block" size={24} />
                <ArrowDown01Icon
                    className={`text-primaryColor block xl:hidden transition-transform ${show ? "rotate-180" : ""}`}
                    size={24}
                />
            </li>

            {/* Mobile-only expandable content */}
            <div
                className={`block xl:hidden transition-all duration-500 overflow-hidden ${show ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
            >
                {show && <ExploreTreatment treatment={treatment} />}
            </div>
        </div>
    );
};
