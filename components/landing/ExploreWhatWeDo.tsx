"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown01Icon, ArrowRight01Icon } from "hugeicons-react";
import ExploreTreatment from "./ExploreTreatment";
import AOS from "aos";
import "aos/dist/aos.css";
import config from "@/lib/config";

const ExploreWhatWeDo = () => {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [homeTreatments, setHomeTreatments] = useState<Treatment[]>([]);
    const [treatment, setTreatment] = useState<Treatment | null>(null);
    const [treatmentIndex, setTreatmentIndex] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const fetchTreatments = async () => {
        try {
            const response = await fetch(`/api/treatments`);
            const data = await response.json();
            if (data.length > 10) { setTreatments(data.slice(0, 10)) } else { setTreatments(data); };

            if (data.length > 0) setTreatment(data[0]);
        } catch (error) {
            console.error("Error fetching treatments:", error);
        }
    };

    const fetchHomeTreatments = async () => {
        try {
            const response = await fetch(`${config.env.apiEndpoint}/treatments/home-treatments`);
            const data = await response.json();
            setHomeTreatments(data.data);
            if (data.data.length > 0) setTreatment(data.data[0]);
        } catch (error) {
            // console.error("Error fetching home treatments:", error);
        }
    };

    // Fetch data once on component mount
    useEffect(() => {
        fetchTreatments();
        fetchHomeTreatments();
    }, []);

    function handleClick(item: Treatment, idx: number): void {
        setTreatmentIndex(idx);
        setTreatment(item);
        setShow((prevShow) => !prevShow);
    }

    return (
        <div className="py-16 bg-pattern h-auto">
            <h2 className="pb-12 px-16 text-2xl xl:text-4xl font-normal text-gray-900">
                Explore What We Do
            </h2>

            <div className="flex flex-col xl:flex-row h-full">
                <Tabs
                    defaultValue="clinic-treatments"
                    className="w-full xl:w-[40%] xl:h-screen px-6 md:px-12 xl:px-16"
                >
                    {/* <TabsList className="h-12 md:h-16 rounded-full bg-light-100">
                        <TabsTrigger value="clinic-treatments" className="px-4 py-2 md:px-6 md:py-4 rounded-full text-sm md:text-base">
                            Clinic Treatments
                        </TabsTrigger>
                        <TabsTrigger value="home-treatments" className="px-4 py-2 md:px-6 md:py-4 rounded-full text-sm md:text-base">
                            Home Treatments
                        </TabsTrigger>
                    </TabsList> */}

                    <div className="mt-6 md:mt-12 ml-2 md:ml-4">

                        <TabsContent value="clinic-treatments" className="flex-1">
                            <ul className="space-y-4">
                                {treatments.map((treatment, idx) => (
                                    <div key={treatment.id}>
                                        <li
                                            onClick={() => handleClick(treatment, idx)}
                                            data-aos="fade-up"
                                            data-aos-delay={idx * 100}
                                            className="flex gap-4 items-center cursor-pointer transform hover:scale-105 hover:duration-300"
                                        >
                                            <span className="text-sm md:text-xl text-light-500">
                                                {treatment.title}
                                            </span>
                                            <ArrowRight01Icon className="text-primaryColor hidden xl:block" size={24} />
                                            <ArrowDown01Icon
                                                className={`text-primaryColor block xl:hidden transition-all ${show && idx === treatmentIndex ? "rotate-180" : ""
                                                    }`}
                                                size={24}
                                            />
                                        </li>
                                        <Down treatment={treatment} show={show && idx === treatmentIndex} />
                                    </div>
                                ))}
                            </ul>
                        </TabsContent>

                        {/* Home Treatments */}
                        <TabsContent value="home-treatments">
                            <ul className="space-y-4">
                                {homeTreatments.map((treatment, idx) => (
                                    <div key={treatment.id}>
                                        <li
                                            onClick={() => handleClick(treatment, idx)}
                                            data-aos="fade-up"
                                            data-aos-delay={idx * 10}
                                            className="flex gap-4 items-center cursor-pointer transform hover:scale-105 hover:duration-300"
                                        >
                                            <span className="text-sm md:text-xl text-light-500">
                                                {treatment.title}
                                            </span>
                                            <ArrowRight01Icon className="text-primaryColor hidden xl:block" size={24} />
                                            <ArrowDown01Icon
                                                className={`text-primaryColor block xl:hidden transition-all ${show && idx === treatmentIndex ? "rotate-180" : ""
                                                    }`}
                                                size={24}
                                            />
                                        </li>
                                        <Down treatment={treatment} show={show && idx === treatmentIndex} />
                                    </div>
                                ))}
                            </ul>
                        </TabsContent>
                    </div>
                </Tabs>

                {/* Right Section */}
                <div className="flex-1 hidden xl:block h-[600px] xl:h-screen mt-8 xl:mt-0 mr-16" data-aos="fade-up" key={treatmentIndex}>
                    {treatment && <ExploreTreatment treatment={treatment} />}
                </div>
            </div>
        </div>
    );
};

export default ExploreWhatWeDo;

const Down: React.FC<{ treatment: Treatment; show: boolean; }> = ({ treatment, show }) => {
    return (
        <div
            className={`flex-1 block xl:hidden h-[600px] xl:h-screen mt-8 xl:mt-0 transition-all duration-500 overflow-hidden ${show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
        >
            {show && <ExploreTreatment treatment={treatment} />}
        </div>
    );
};
