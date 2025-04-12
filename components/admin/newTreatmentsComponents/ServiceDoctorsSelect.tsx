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


interface ServiceDoctorSelectProps {
    doctorsData: Doctor[] | null | undefined;
    setDoctorsData: (value: SetStateAction<Doctor[] | null | undefined>) => void;
    setLoading: (value: SetStateAction<boolean>) => void
    setTreatmentDoctors: Dispatch<SetStateAction<number[]>>
    treatmentdoctors: number[];
}

const ServiceDoctorSelect: React.FC<ServiceDoctorSelectProps> = ({ doctorsData, treatmentdoctors, setTreatmentDoctors, setDoctorsData, setLoading }) => {
    const handleDoctorSelect = (id: string) => {
        const doctor = doctorsData?.find((item) => item.user.first_name === id);
        if (doctor) {
            setTreatmentDoctors([...treatmentdoctors, doctor.id]);
        }
    };
    const fetchDoctors = async () => {
        try {

            const response = await fetch(`/api/admin/doctors`);
            const data = await response.json();
            setDoctorsData(data.data);
            setLoading(false);
        } catch (error) {
            setLoading(false)
            // console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {

        fetchDoctors();
    }, []);
    return (
        <div className="w-full sm:w-1/2">
            <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="serviceCategory"
            >
                Service Doctors
            </label>
            <div className="relative flex items-center">
                <span className="absolute left-4 ">
                    <BiCategory />
                </span>
                <Select onValueChange={handleDoctorSelect}>
                    <SelectTrigger className="w-[100%] h-[50px] rounded-sm border-[0.5px] pl-10">
                        <SelectValue placeholder="Select Doctor" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            doctorsData?.map((item) => (
                                <SelectItem key={item.id} value={item.user.first_name}>{item.user.first_name} {item.user.last_name}</SelectItem>

                            ))
                        }
                    </SelectContent>
                </Select>

            </div>
        </div>
    );
};

export default ServiceDoctorSelect;
