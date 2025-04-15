"use client"

import CustomInput from '@/components/common/CustomInput';
import ReactFlagsSelect from "react-flags-select";
import { Calendar01Icon, Mail01Icon, UserIcon } from 'hugeicons-react';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { BsGenderFemale, BsGenderMale, BsGenderNeuter } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { WeightIcon } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
const UpdateProfile = () => {
    const router = useRouter();
    const [fName, setFName] = useState<string | null>(null);
    const [lName, setLName] = useState<string | null>(null);
    const [email, setEamil] = useState<string | null>(null);
    const [phone, setPhone] = useState<string | null>(null);
    const [gender, setGender] = useState<string | null>(null);
    const [birthday, setBirthday] = useState<string | null>(null);
    const [weight, setWeight] = useState<string | null>(null);
    const [nationality, setNationality] = useState("");


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!fName || !lName || !email || !phone || !gender || !birthday || !weight || !nationality) {
            toast({ title: "Please fill in all the required fields." });
            return;
        }

        try {
            const response = await fetch("/api/admin/doctors/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name: fName!,
                    last_name: lName!,
                    email: email!,
                    phone_number: phone!,
                    gender: gender!,
                    date_of_birth: birthday!,
                    weight: weight!
                }),
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.error || "Failed to create Doctor");

            toast({ title: "Profile Updated successfully!" });

            router.back();
            return true;
        } catch (error: any) {
            toast({ title: error.message || "Something went wrong" });
            return false;
        }
    };

    return (

        <div className="mx-auto ">
            <h1 className="text-3xl font-bold mb-6">Update Profile</h1>
            <p className="mb-4">Manage your personal profile</p>

            <div className="bg-white p-6 rounded shadow">
                <form className="space-y-4" action="#" onSubmit={handleSubmit}>

                    <div className="grid grid-cols-2 gap-4">
                        <CustomInput
                            label="First name *"
                            name="fName"
                            type="text"
                            placeholder="First Name..."
                            value={fName ?? ""}
                            icon={<UserIcon className="text-gray-500" />}
                            onChange={(e) => setFName(e.target.value)}
                        />
                        <CustomInput
                            label="Last name *"
                            name="lName"
                            type="text"
                            placeholder="Last Name..."
                            value={lName ?? ""}
                            icon={<UserIcon className="text-gray-500" />}
                            onChange={(e) => setLName(e.target.value)}
                        />

                        <CustomInput
                            label="E-mail *"
                            name="email"
                            type="email"
                            placeholder="user@example.com"
                            value={email ?? ""}
                            icon={<Mail01Icon className="text-gray-500" />}
                            onChange={(e) => setEamil(e.target.value)}
                        />

                        <div className="w-full mb-6">
                            <label className="mb-3 block text-black dark:text-white" >
                                Phone number *
                            </label>
                            <PhoneInput
                                country={'ae'}
                                value={phone}
                                onChange={setPhone}
                                inputClass="!w-full !border !rounded !h-12 !border-gray"
                                buttonClass="!bg-white !border-r !h-12"
                                dropdownClass="!shadow-lg !rounded "
                                placeholder="123-456-7890"
                                enableSearch
                            />
                        </div>
                        <div className="w-full mb-6">
                            <label className="mb-3 block text-black dark:text-white" >
                                Gender *
                            </label>
                            <Select onValueChange={setGender}>
                                <SelectTrigger className="w-[100%] h-[50px] rounded-sm border-[0.5px]">

                                    <div className='flex gap-2'>
                                        {gender === null ? <BsGenderNeuter /> : <div></div>}

                                        <SelectValue placeholder="Select Gender" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem key={1} value={"male"} ><div className='flex gap-2 p-4'><BsGenderMale /><p>Male</p></div></SelectItem>
                                    <SelectItem key={2} value={"female"}><div className='flex gap-2 p-4'><BsGenderFemale /><p>Female</p></div></SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <CustomInput
                            label="Date Of Birth *"
                            name="birth"
                            type="date"
                            placeholder=""
                            value={birthday ?? ""}
                            icon={<Calendar01Icon className="text-gray-500" />}
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                        <CustomInput
                            label="Weight *"
                            name="weight"
                            type="number"
                            placeholder="weight..."
                            value={weight ?? ""}
                            icon={<WeightIcon className="text-gray-500" />}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        <div className="w-full mb-6">
                            <label className="mb-3 block text-black dark:text-white">
                                Nationality *
                            </label>
                            <ReactFlagsSelect
                                selected={nationality}
                                onSelect={(code) => setNationality(code)}
                                searchable
                            />
                        </div>

                    </div>
                    <div className="flex justify-end mt-6">
                        <button className="bg-black text-white px-4 py-2 rounded">Update</button>
                        <button className="ml-2 border border-black px-4 py-2 rounded">Cancel</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default UpdateProfile;