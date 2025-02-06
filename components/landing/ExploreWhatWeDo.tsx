"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown01Icon, ArrowRight01Icon } from "hugeicons-react";
import ExploreTreatment from "./ExploreTreatment";
import { popularTreatments } from "@/constants";
import AOS from "aos";
import "aos/dist/aos.css";

const ExploreWhatWeDo: React.FC<{ session: boolean }> = ({ session }) => {
    const [treatment, setTreatment] = useState<Treatment>(popularTreatments[0]);
    const [treatmentIndex, setTreatmentIndex] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration (ms)
            easing: "ease-in-out", // Easing function for animations
            offset: 100, // Offset from the top before animation starts
            once: false, // Ensure animations occur every time the component is shown
        });
    }, []);

    function handleClick(item: Treatment, idx: number): void {
        setTreatmentIndex(idx);
        setTreatment(item);
        setShow(!show);
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
                    <TabsList className="h-12 md:h-16 rounded-full bg-light-100">
                        <TabsTrigger
                            value="clinic-treatments"
                            className="px-4 py-2 md:px-6 md:py-4 rounded-full text-sm md:text-base"
                        >
                            Clinic Treatments
                        </TabsTrigger>
                        <TabsTrigger
                            value="home-treatments"
                            className="px-4 py-2 md:px-6 md:py-4 rounded-full text-sm md:text-base"
                        >
                            Home Treatments
                        </TabsTrigger>
                    </TabsList>

                    <div className="mt-6 md:mt-12 ml-2 md:ml-4">
                        {/* Clinic Treatments Tab Content */}
                        <TabsContent value="clinic-treatments" className="flex-1">
                            <ul className="space-y-4">
                                {popularTreatments.map((treatment, idx) => (
                                    <div key={treatment.id}>
                                        <li
                                            onClick={() => handleClick(treatment, idx)}
                                            data-aos="fade-up" // AOS animation
                                            data-aos-delay={idx * 100} // Delay each list item dynamically
                                            className={`flex gap-4 items-center cursor-pointer transform hover:scale-105 hover:duration-300`}
                                        >
                                            <span className="text-sm md:text-xl text-light-500">
                                                {treatment.name}
                                            </span>
                                            <ArrowRight01Icon
                                                className="text-primaryColor hidden xl:block"
                                                size={24}
                                            />
                                            <ArrowDown01Icon
                                                className={`text-primaryColor block xl:hidden transition-all ${show && idx === treatmentIndex && "rotate-180"
                                                    }`}
                                                size={24}
                                            />
                                        </li>
                                        <Down treatment={treatment} show={show && idx === treatmentIndex} session={session} />
                                    </div>
                                ))}
                            </ul>
                        </TabsContent>

                        {/* Home Treatments Tab Content */}
                        <TabsContent value="home-treatments">
                            <ul className="space-y-4">
                                {popularTreatments.map((treatment, idx) => (
                                    <div key={idx}>
                                        <li
                                            onClick={() => handleClick(treatment, idx)}
                                            data-aos="fade-up" // AOS animation
                                            data-aos-delay={idx * 100} // Delay each list item dynamically
                                            className={`flex gap-4 items-center cursor-pointer transform hover:scale-105 hover:duration-300`}
                                        >
                                            <span className="text-sm md:text-xl text-light-500">
                                                {treatment.name}
                                            </span>
                                            <ArrowRight01Icon
                                                className="text-primaryColor hidden xl:block"
                                                size={24}
                                            />
                                            <ArrowDown01Icon
                                                className={`text-primaryColor block xl:hidden transition-all ${show && idx === treatmentIndex && "rotate-180"
                                                    }`}
                                                size={24}
                                            />
                                        </li>
                                        <Down treatment={treatment} show={show && idx === treatmentIndex} session={session} />
                                    </div>
                                ))}
                            </ul>
                        </TabsContent>
                    </div>
                </Tabs>

                {/* Right Section */}
                <div
                    className="flex-1 hidden xl:block h-[600px] xl:h-screen mt-8 xl:mt-0 mr-16"
                    data-aos="fade-up" // AOS animation
                    key={treatmentIndex} // Key ensures animation runs when treatmentIndex changes
                >
                    <ExploreTreatment treatment={popularTreatments[treatmentIndex]} session={session} />
                </div>
            </div>
        </div>
    );
};

export default ExploreWhatWeDo;

const Down = ({ treatment, show, session }: { treatment: Treatment; show: boolean, session: boolean }) => {
    return (
        <div
            className={`flex-1 block xl:hidden h-[600px] xl:h-screen mt-8 xl:mt-0 transition-all duration-500 overflow-hidden ${show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
        // data-aos="fade-up" // AOS animation for dropdown content
        // data-aos-delay="300" // Delay for dropdown
        >
            {show && <ExploreTreatment treatment={treatment} session={session} />}
        </div>
    );
};
