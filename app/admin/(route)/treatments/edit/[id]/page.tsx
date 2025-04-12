"use client"
import UploadMultiImages from "../../../../../../components/admin/uploadMultiImages/UploadMultiImages";
import UploadVideo from "../../../../../../components/admin/uploadVideo/UploadVideo";
import { RiCurrencyLine, RiServiceLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import CustomInput from "@/components/common/CustomInput";
import ExtraTimeSettings from "@/components/admin/newTreatmentsComponents/ExtraTime";
import ArrayInputs from "@/components/admin/newTreatmentsComponents/ArrayInputs";
import ServiceCategorySelect from "@/components/admin/newTreatmentsComponents/ServiceCategorySelect";
import ServiceDoctorSelect from "@/components/admin/newTreatmentsComponents/ServiceDoctorsSelect";
import { Edit01Icon } from "hugeicons-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const UpdateService = () => {
    const router = useRouter();
    const pathName = usePathname();

    const [treatmentName, setTreatmentName] = useState<string | null>(null);
    const [treatmentPrice, setTreatmentPrice] = useState<number>();
    const [treatmentDescription, setTreatmentDescription] = useState<string>();
    const [treatmentDuration, setTreatmentDuration] = useState<number>();
    const [treatmentImages, setTreatmentImages] = useState<string[] | null>();
    const [treatmentVideo, setTreatmentVideo] = useState<string | null>();
    const [treatmentBenefits, setTreatmentBenefits] = useState<string[]>([]);
    const [treatmentInstructions, setTreatmentInstructions] = useState<string[]>([]);
    const [treatmentdoctors, setTreatmentDoctors] = useState<number[]>([]);
    const [treatmentCategory, setTreatmentCategory] = useState<number>();
    const [categoriesData, setCategoriesData] = useState<Category[] | null>();
    const [doctorsData, setDoctorsData] = useState<Doctor[] | null>();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!treatmentName || !treatmentDescription || !treatmentPrice || !treatmentImages || !treatmentBenefits || !treatmentDuration || !treatmentdoctors || !treatmentCategory) {
            alert("Please fill in all the required fields.");
            return;
        }
        try {
            const response = await fetch("/api/admin/treatments/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: treatmentName,
                    description: treatmentDescription,
                    price: treatmentPrice,
                    images: treatmentImages,
                    doctor_id: treatmentdoctors,
                    home_based: false,
                    video: treatmentVideo,
                    duration: treatmentDuration,
                    benefits: treatmentBenefits,
                    instructions: treatmentInstructions,
                    discount_value: 0,
                    discount_type: "percentage",
                    category_id: treatmentCategory
                }),
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.error || "Failed to create Treatment");

            alert("Treatment created successfully!");

            router.back();
            return true;
        } catch (error: any) {
            alert(error.message || "Something went wrong");
            return false;
        } finally {
            setLoading(false);
        }
    };

    const getTreatmentDetails = async () => {
        const id = pathName.split('/').pop();
        try {
            const response = await fetch(`/api/treatments/${id}`);

            if (!response.ok) {
                throw new Error("Failed to fetch treatment");
            }
            const treatment: Treatment = await response.json();
            console.log(treatment)
            setTreatmentName(treatment.title);
            setTreatmentPrice(Number(treatment.price))
            setTreatmentDescription(treatment.description)
            setTreatmentDuration(treatment.duration)
            setTreatmentImages(treatment.images)
            setTreatmentVideo(treatment.video)
            setTreatmentBenefits(treatment.benefits)
            setTreatmentInstructions(treatment.instructions)
            // setTreatmentDoctors(treatment.doctors.filter())
            setTreatmentCategory(treatment.category.category_id)
        } catch (error: any) {
            // setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getTreatmentDetails();
    }, [])


    if (loading) {
        return (
            <div className="container mx-auto p-4 flex justify-center items-center h-full">
                <ClipLoader size={50} color="#3498db" loading={loading} />
            </div>
        );
    }

    return (
        <div className="mx-auto p-4 bg-gray-200">
            <div className="mx-auto max-w-270">
                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-5 xl:col-span-3">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                                <h3 className="font-semibold text-black dark:text-white">
                                    Update Service
                                </h3>
                            </div>
                            <div className="p-7">
                                <form action="#" onSubmit={handleSubmit}>
                                    <CustomInput
                                        label="Service Name"
                                        name="serviceName"
                                        type="text"
                                        placeholder="Enter Service Name..."
                                        value={treatmentName ?? ""}
                                        icon={<RiServiceLine className="text-gray-500" />}
                                        onChange={(e) => setTreatmentName(e.target.value)}
                                    />
                                    <div className="mb-6 flex flex-col gap-4 sm:flex-row">

                                        <ServiceCategorySelect
                                            categoriesData={categoriesData}
                                            setCategoriesData={setCategoriesData}
                                            setLoading={setLoading}
                                            setTreatmentCategory={setTreatmentCategory}
                                        />

                                        <div className="w-full sm:w-1/2">

                                            <CustomInput
                                                label="Service Price"
                                                type="number"
                                                name="servicePrice"
                                                placeholder="Enter Service Price..."
                                                value={treatmentPrice?.toString() || ""}
                                                icon={<RiCurrencyLine className="text-gray-500" />}
                                                onChange={(e) => setTreatmentPrice(parseFloat(e.target.value))}
                                            />
                                        </div>
                                    </div>


                                    <div className="mb-6 flex flex-col gap-4 sm:flex-row">

                                        <ServiceDoctorSelect
                                            doctorsData={doctorsData}
                                            setDoctorsData={setDoctorsData}
                                            setLoading={setLoading}
                                            setTreatmentDoctors={setTreatmentDoctors}
                                            treatmentdoctors={treatmentdoctors}
                                        />

                                        <div className="w-full sm:w-1/2">
                                            <CustomInput
                                                label=" Service Duration (in min)"
                                                value={treatmentDuration?.toString() || ""}
                                                type="number"
                                                name="serviceDuration"
                                                placeholder="Enter Service Duration time ..."
                                                icon={<RiCurrencyLine className="text-gray-500" />}
                                                onChange={(e) => setTreatmentDuration(parseInt(e.target.value, 10))}
                                            />
                                        </div>
                                    </div>

                                    <ArrayInputs
                                        label="Service Benefits"
                                        name="serviceBenefits"
                                        placeholder="Add Service Benefits..."
                                        elements={treatmentBenefits}
                                        setElements={setTreatmentBenefits}
                                    />

                                    <ArrayInputs
                                        label="Service Instructions"
                                        name="serviceInstructions"
                                        placeholder="Add Service instructions..."
                                        elements={treatmentInstructions}
                                        setElements={setTreatmentInstructions}

                                    />

                                    <div className="mb-6">
                                        <label
                                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                                            htmlFor="Username"
                                        >
                                            Service Description
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-4">
                                                <Edit01Icon />
                                            </span>

                                            <textarea
                                                className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                name="serviceDesc"
                                                id="serviceDesc"
                                                value={treatmentDescription || ""}
                                                rows={6}
                                                placeholder="Write Service Description over here..."
                                                onChange={(e) => setTreatmentDescription(e.target.value)}
                                                required

                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-4">
                                        <Link href="/admin/treatments">
                                            <button
                                                className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                                                type="button"
                                            >
                                                Cancel
                                            </button>
                                        </Link>

                                        <button
                                            className="flex text-white bg-blue-500 justify-center rounded px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                                            type="submit"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 xl:col-span-2">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                                <h3 className="font-medium text-black dark:text-white">
                                    Service Images
                                </h3>
                            </div>
                            <div className="p-7">
                                <UploadMultiImages setUrls={setTreatmentImages} editImagesUrl={treatmentImages} />
                            </div>
                        </div>
                        <div className="rounded-sm mt-4 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                                <h3 className="font-medium text-black dark:text-white">
                                    Service Video
                                </h3>
                            </div>
                            <div className="p-7">
                                <UploadVideo setVideoUrl={setTreatmentVideo} editVideoUrl={treatmentVideo} />
                            </div>
                        </div>
                        <div className="my-4"><ExtraTimeSettings /></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UpdateService;
