"use client"
import React, { useEffect, useState } from 'react'
import HeaderPath from "../../../components/common/HeaderPath"
import TreatmentsList from '@/components/landing/TreatmentsList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { treatmentTabs } from '@/constants';
import { ArrowRight01Icon } from 'hugeicons-react';
import TreatmentReviews from '@/components/landing/TreatmentReviews';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCategories } from '@/context/CategoriesContext';


const Treatments = () => {
    const [currentTab, setCurrentTab] = useState("all");
    const { categories } = useCategories()
    const searchParams = useSearchParams();
    const treatmentsTab = searchParams.get('treatments');
    const router = useRouter();

    const handleTabSwitch = (tab: string) => {
        setCurrentTab(tab);
    };
    useEffect(() => {
        if (treatmentsTab) {
            if (treatmentsTab === "hair-transplant") {
                router.push('/treatments/hair-transplant')
            } else {
                setCurrentTab(treatmentsTab);
            }
        }
    }, [])
    return (
        <div className='my-6'>
            <HeaderPath title="Treatments" path="/treatments"
            // desc="Dedicated to Providing Comprehensive and Personalized Healthcare Services, Ensuring Your Wellness, Comfort, and Peace of Mind Every Step of the Way." 
            />

            <div className='px-4 md:px-8 xl:px-12'>
                {/* <Carousel /> */}
                <div className="">

                    <Tabs
                        defaultValue="all"
                        value={currentTab}
                        onValueChange={(value) => setCurrentTab(value)}
                        className="w-full h-auto"
                    >
                        <TabsList className="flex items-center justify-start overflow-scroll h-12 md:h-16 w-full rounded-full bg-light-100">
                            {categories.map((tab) => (
                                <TabsTrigger
                                    key={tab.category_id}
                                    value={tab.category_slug}
                                    className="px-4 py-2 md:px-6 md:py-4 rounded-full text-sm  "
                                >
                                    {tab.category_name.toUpperCase()}
                                </TabsTrigger>
                            ))}
                            {/* {categories.map((category) => (
                                <TabsTrigger
                                    key={category.category_id}
                                    value={category.category_slug}
                                    className="px-4 py-2 md:px-6 md:py-4 rounded-full text-sm "
                                >
                                    {category.category_name} Treatments
                                </TabsTrigger>
                            ))} */}
                        </TabsList>
                        <div className="mt-6 md:mt-12 ml-2 md:ml-4">
                            <TabsContent value="all" className="flex-1">
                                {/* {treatmentTabs.slice(1).map((tab) => (
                                    <div key={tab.id} className='mt-8'>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-lg md:text-[28px] lg:text-[32px] text-primary font-semibold'>{tab.title} Treatments</h1>
                                            <div
                                                onClick={() => handleTabSwitch(tab.value)}
                                                className="flex gap-2 xl:gap-4 items-center cursor-pointer duration-700 transform hover:scale-105 hover:duration-300">
                                                <span className="text-sm xl:text-xl text-light-500">View All</span>
                                                <ArrowRight01Icon className="text-primaryColor" size={24} />
                                            </div>
                                        </div>
                                        <TreatmentsList />
                                    </div>
                                ))} */}
                                {categories.map((category) => (
                                    <div key={category.category_id} className='mt-8'>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-lg md:text-[28px] lg:text-[32px] text-primary font-semibold'>{category.category_name}</h1>
                                            <div
                                                onClick={() => handleTabSwitch(category.category_slug)}
                                                className="flex gap-2 xl:gap-4 items-center cursor-pointer duration-700 transform hover:scale-105 hover:duration-300">
                                                <span className="text-sm xl:text-xl text-light-500">View All</span>
                                                <ArrowRight01Icon className="text-primaryColor" size={24} />
                                            </div>
                                        </div>
                                        <TreatmentsList />
                                    </div>
                                ))}
                            </TabsContent>
                            {/* {treatmentTabs.slice(1).map((tab) => (
                                <TabsContent key={tab.id} value={tab.value} className="flex-1">
                                    <div className='mt-8'>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-lg md:text-[28px] lg:text-[32px] text-primary font-semibold'>{tab.title} Treatments</h1>
                                        </div>
                                        <TreatmentsList />
                                    </div>
                                </TabsContent>
                            ))} */}
                            {categories.map((category) => (
                                <TabsContent key={category.category_id} value={category.category_slug} className="flex-1">
                                    <div className='mt-8'>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-lg md:text-[28px] lg:text-[32px] text-primary font-semibold'>{category.category_name}</h1>
                                        </div>
                                        <TreatmentsList />
                                    </div>
                                </TabsContent>
                            ))}
                        </div>
                    </Tabs>
                </div>
            </div>

            <TreatmentReviews />
        </div>
    )
}

export default Treatments