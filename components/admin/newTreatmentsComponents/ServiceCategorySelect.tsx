"use client"
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { BiCategory } from 'react-icons/bi';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


interface ServiceCategorySelectProps {
    categoriesData: Category[] | null | undefined;
    // handleCategorySelect: (value: string) => void;
    setCategoriesData: (value: SetStateAction<Category[] | null | undefined>) => void;
    setLoading: (value: SetStateAction<boolean>) => void
    setTreatmentCategory: Dispatch<SetStateAction<number | undefined>>
}



const ServiceCategorySelect: React.FC<ServiceCategorySelectProps> = ({ categoriesData, setCategoriesData, setLoading, setTreatmentCategory }) => {

    const handleCategorySelect = (id: string) => {
        const category = categoriesData?.find((item) => item.category_slug === id);
        if (category) setTreatmentCategory(category.category_id);
    };

    const fetchCategries = async () => {
        try {
            const response = await fetch(`/api/categories`);
            const data = await response.json();
            setCategoriesData(data);
            setLoading(false);
        } catch (error) {
            setLoading(false)
            // console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {

        fetchCategries();
    }, []);
    return (
        <div className="w-full sm:w-1/2">
            <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="serviceCategory"
            >
                Service Category
            </label>
            <div className="relative flex items-center">
                <span className="absolute left-4">
                    <BiCategory />
                </span>
                <Select onValueChange={handleCategorySelect}>
                    <SelectTrigger className="w-[100%] h-[50px] rounded-sm border-[0.5px] pl-10">
                        <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                        {categoriesData?.map((item) => (
                            <SelectItem key={item.category_id * 10} value={item.category_slug}>
                                {item.category_name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default ServiceCategorySelect;
