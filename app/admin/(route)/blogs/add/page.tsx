"use client"
import UploadMultiImages from "../../../../../components/admin/uploadMultiImages/UploadMultiImages";
import UploadVideo from "../../../../../components/admin/uploadVideo/UploadVideo";
import { RiCurrencyLine, RiServiceLine } from "react-icons/ri";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import CustomInput from "@/components/common/CustomInput";
import ExtraTimeSettings from "@/components/admin/newTreatmentsComponents/ExtraTime";
import ArrayInputs from "@/components/admin/newTreatmentsComponents/ArrayInputs";
import ServiceCategorySelect from "@/components/admin/newTreatmentsComponents/ServiceCategorySelect";
import ServiceDoctorSelect from "@/components/admin/newTreatmentsComponents/ServiceDoctorsSelect";
import { Edit01Icon } from "hugeicons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import UploadImage from "@/components/admin/uploadImage/UploadImage";

const NewService = () => {
    const session = useSession();
    const router = useRouter();
    const [blogsTitle, setblogsTitle] = useState<string | null>(null);
    const [blogContent, setBlogContent] = useState<string | null>(null);
    const [blogShortSescription, setBlogShortSescription] = useState<string>();
    const [blogImage, setBlogImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!blogsTitle || !blogContent || !blogShortSescription) {
            alert("Please fill in all the required fields.");
            return;
        }
        try {
            const response = await fetch("/api/admin/blogs/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: blogsTitle,
                    content: blogContent,
                    short_description: blogShortSescription,
                    image: blogImage,
                    user_id: session.data?.user.id
                }),
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.error || "Failed to create FAQ");

            alert("Blog created successfully!");

            router.back();
            return true;
        } catch (error: any) {
            alert(error.message || "Something went wrong");
            return false;
        } finally {
            setLoading(false);
        }
    };


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
                                    Add New FAQ
                                </h3>
                            </div>
                            <div className="p-7">
                                <form action="#" onSubmit={handleSubmit}>
                                    <CustomInput
                                        label="Blog title"
                                        name="blogTitle"
                                        type="text"
                                        placeholder="Enter title..."
                                        value={blogsTitle ?? ""}
                                        icon={<RiServiceLine className="text-gray-500" />}
                                        onChange={(e) => setblogsTitle(e.target.value)}
                                    />
                                    <div className="mb-6 flex flex-col gap-4 sm:flex-row">

                                        {/* <ServiceCategorySelect
                                            categoriesData={categoriesData}
                                            setCategoriesData={setCategoriesData}
                                            setLoading={setLoading}
                                            setTreatmentCategory={setTreatmentCategory}
                                        /> */}

                                        <div className="w-full sm:w-1/2">

                                            <CustomInput
                                                label="Short Description"
                                                type="text"
                                                name="blogShort"
                                                placeholder="Enter blog short description..."
                                                value={blogShortSescription?.toString() || ""}
                                                icon={<RiCurrencyLine className="text-gray-500" />}
                                                onChange={(e) => setBlogShortSescription(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                                            htmlFor="Username"
                                        >
                                            Blog Content
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-4">
                                                <Edit01Icon />
                                            </span>

                                            <textarea
                                                className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                name="blogsContent"
                                                id="blogsContent"
                                                rows={6}
                                                placeholder="Write blog content over here..."
                                                onChange={(e) => setBlogContent(e.target.value)}
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
                                    Blog Image
                                </h3>
                            </div>
                            <div className="p-7">
                                <UploadImage name="blogImage" setImageUrl={setBlogImage} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default NewService;
