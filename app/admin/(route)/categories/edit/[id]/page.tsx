"use client";
import { BiCategory } from "react-icons/bi";
import UploadImage from "../../../../../../components/admin/uploadImage/UploadImage";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

const UpdateCategory = () => {
    const router = useRouter();
    const pathName = usePathname();
    const id = pathName.split('/').pop();
    const [categoryName, setCategoryName] = useState<string>('');
    const [categorySlug, setCategorySlug] = useState<string>('');
    const [categoryDesc, setCategoryDesc] = useState<string>('');
    const [categoryImage, setCategoryImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // if (!categoryName || !categorySlug || !categoryDesc || !categoryImage) {
        //     toast({ title: "Please fill in all the required fields." });
        //     return;
        // }

        setLoading(true);

        try {
            const response = await fetch(`/api/admin/categories/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: categoryName,
                    slug: categorySlug,
                    visibility: false,
                    description: categoryDesc,
                    image: categoryImage
                }),
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.error || "Failed to Update category");

            toast({ title: "Category Update successfully!" });
            router.push("/admin/treatments");
        } catch (error: any) {
            toast({ title: error.message || "Something went wrong" });
        } finally {
            setLoading(false);
        }
    };

    const getCategoryDetails = async () => {

        try {
            const response = await fetch(`/api/categories/${id}`);

            if (!response.ok) {
                throw new Error("Failed to fetch category");
            }
            const category: Category = await response.json();
            console.log(category)
            setCategoryName(category.category_name);
            setCategoryDesc(category.category_description!);
            setCategoryImage(category.relations.images.attributes.path);

        } catch (error: any) {
            // setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCategoryDetails();
    }, []);


    return (
        <div className="mx-auto p-4 bg-gray-200">
            <div className="">
                <div className="col-span-5 xl:col-span-3">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                            <h3 className="font-semibold text-black dark:text-white">
                                Update Category
                            </h3>
                        </div>
                        <div className="p-7">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6 flex flex-col gap-5.5 sm:flex-row">
                                    <div className="w-full sm:w-1/2">
                                        <label
                                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                                            htmlFor="categoryName"
                                        >
                                            Category Name
                                        </label>
                                        <div className="relative w-full">
                                            <span className="absolute left-4 top-4">
                                                <BiCategory />
                                            </span>
                                            <input
                                                className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                type="text"
                                                name="categoryName"
                                                id="categoryName"
                                                value={categoryName ? categoryName : ""}
                                                onChange={(e) => {
                                                    setCategoryName(e.target.value);
                                                    setCategorySlug(e.target.value);
                                                }}
                                                required
                                                placeholder="Category Name.."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label
                                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                                        htmlFor="categoryDesc"
                                    >
                                        Category Description
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                            name="categoryDesc"
                                            id="categoryDesc"
                                            rows={6}
                                            value={categoryDesc ? categoryDesc : ""}
                                            onChange={(e) => setCategoryDesc(e.target.value)}
                                            required
                                            placeholder="Write Category description here..."
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label
                                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                                        htmlFor="categoryImage"
                                    >
                                        Category Image
                                    </label>
                                    <UploadImage name="categoryImage"
                                        setImageUrl={setCategoryImage}
                                        editImageUrl={categoryImage}
                                    />
                                </div>

                                <div className="flex justify-end gap-4">
                                    <button
                                        className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                                        type="button"
                                        onClick={() => router.back()}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="flex justify-center text-white  rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                                        type="submit"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCategory;
