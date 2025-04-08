"use client"

import CustomInput from '@/components/common/CustomInput';

import { Calendar01Icon, Call02Icon, Certificate01Icon, Clock01Icon, Edit01Icon, Knowledge01Icon, Mail01Icon, UniversityIcon, UserAccountIcon, UserIcon, WorkHistoryIcon } from 'hugeicons-react';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { BsGenderFemale, BsGenderMale, BsGenderNeuter } from 'react-icons/bs';
import { CgCollage } from 'react-icons/cg';
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/lib/utils';
import { useRouter } from 'next/navigation';
const AddTeamMember = () => {
    const router = useRouter();
    const [fName, setFName] = useState<string | null>(null);
    const [lName, setLName] = useState<string | null>(null);
    const [email, setEamil] = useState<string | null>(null);
    const [phone, setPhone] = useState<string | null>(null);
    const [gender, setGender] = useState<string | null>(null);
    const [birthday, setBirthday] = useState<string | null>(null);
    const [specialty, setSpecialty] = useState<string | null>(null);
    const [profilePic, setProfilePic] = useState<string | null>(null);
    const [certificate, setCertificate] = useState<string | null>(null);
    const [university, setUniversity] = useState<string | null>(null);
    const [experience, setExperience] = useState<number | null>(null);
    const [aboutDoctor, setAboutDoctor] = useState<string | null>(null);
    const [startTime, setStartTime] = useState<string | null>(null);
    const [endTime, setEndTime] = useState<string | null>(null);
    const [homeService, setHomeService] = useState<boolean>(false);


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!fName || !lName || !email || !phone || !gender || !birthday || !profilePic || !aboutDoctor) {
            alert("Please fill in all the required fields.");
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
                    password: "doctorpassword",
                    gender: gender!,
                    date_of_birth: birthday!,
                    profile_picture: profilePic!,
                    specialty: specialty!,
                    certificate: certificate!,
                    university: university!,
                    patients: 0,
                    exp: experience,
                    about: aboutDoctor!,
                    home_based: homeService,
                    availability: [{
                        day: "Tuesday",
                        start_time: startTime!,
                        end_time: endTime!
                    }]
                }),
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.error || "Failed to create Doctor");

            alert("Doctor created successfully!");

            router.back();
            return true;
        } catch (error: any) {
            alert(error.message || "Something went wrong");
            return false;
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];
        const imageFormData = new FormData();
        imageFormData.append("file", file);

        const imageUploadResponse = await fetch("/api/uploadProPic", {
            method: "POST",
            body: imageFormData,
        });

        const imageResult = await imageUploadResponse.json();

        if (!imageUploadResponse.ok) throw new Error(imageResult.error || "Image upload failed");

        setProfilePic(imageResult.path);
    };


    return (

        <div className="mx-auto p-4 px-16">
            <h1 className="text-3xl font-bold mb-6">Add team member</h1>
            <p className="mb-4">Manage your team members personal profile</p>

            <div className="bg-white p-6 rounded shadow">
                <form className="space-y-4" action="#" onSubmit={handleSubmit}>
                    <div className="relative h-24 w-24 lg:h-32 lg:w-32">
                        <Avatar className="h-24 w-24 lg:h-32 lg:w-32">
                            {profilePic && <AvatarImage src={profilePic} alt="img" />}
                            <AvatarFallback className="bg-amber-100">
                                {getInitials("GU")}
                            </AvatarFallback>
                        </Avatar>
                        <input
                            id="avatar-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e)}
                        />
                        <label
                            htmlFor="avatar-upload"
                            className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 cursor-pointer"
                        >
                            <Edit01Icon className="w-5 h-5 text-primary" />
                        </label>
                    </div>

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
                            placeholder="doctor@estheva-clinic.com"
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
                            label="Specialty *"
                            name="specialty"
                            type="text"
                            placeholder="specialty..."
                            value={specialty ?? ""}
                            icon={<WorkHistoryIcon className="text-gray-500" />}
                            onChange={(e) => setSpecialty(e.target.value)}
                        />
                        <CustomInput
                            label="Certificate *"
                            name="certificate"
                            type="text"
                            placeholder="certificate..."
                            value={certificate ?? ""}
                            icon={<Certificate01Icon className="text-gray-500" />}
                            onChange={(e) => setCertificate(e.target.value)}
                        />
                        <CustomInput
                            label="University *"
                            name="university"
                            type="text"
                            placeholder="university..."
                            value={university ?? ""}
                            icon={<UniversityIcon className="text-gray-500" />}
                            onChange={(e) => setUniversity(e.target.value)}
                        />
                        <CustomInput
                            label="Year's of Experience *"
                            name="experience"
                            type="number"
                            placeholder="experience..."
                            value={experience?.toString() ?? ""}
                            icon={<Knowledge01Icon className="text-gray-500" />}
                            onChange={(e) => setExperience(Number(e.target.value))}
                        />

                    </div>
                    <div className="mb-6">
                        <label className="mb-3 block text-black dark:text-white" >
                            About Doctor *
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-4">
                                <Edit01Icon />
                            </span>

                            <textarea
                                className="w-full rounded border border-stroke bg-gray py-3 pl-12 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                name="about"
                                id="about"
                                rows={6}
                                placeholder="Write Doctor about here..."
                                onChange={(e) => setAboutDoctor(e.target.value)}
                                required

                            ></textarea>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="mb-3 block text-black dark:text-white" >
                            Availability *
                        </label>
                        <div className="flex gap-36">
                            <div className='flex gap-4'>
                                <CustomInput
                                    label="Start Time *"
                                    name="startTime"
                                    type="time"
                                    placeholder=""
                                    value={startTime?.toString() ?? ""}
                                    icon={<Clock01Icon className="text-gray-500" />}
                                    onChange={(e) => setStartTime(e.target.value)}
                                />
                                <CustomInput
                                    label="End Time *"
                                    name="endTIme"
                                    type="time"
                                    placeholder=""
                                    value={endTime?.toString() ?? ""}
                                    icon={<Clock01Icon className="text-gray-500" />}
                                    onChange={(e) => setEndTime(e.target.value)}
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <label >Home Service Doctor?</label>
                                <Switch
                                    checked={homeService}
                                    onCheckedChange={setHomeService}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button className="bg-black text-white px-4 py-2 rounded">Add</button>
                        <button className="ml-2 border border-black px-4 py-2 rounded">Close</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddTeamMember;