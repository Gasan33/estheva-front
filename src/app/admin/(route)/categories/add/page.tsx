"use client";
import { BiCategory } from "react-icons/bi";
import UploadImage from "../../../../../components/admin/uploadImage/UploadImage";
import { useRouter } from "next/navigation";
import useCategoryForm from "../../../../../hooks/admin/useCategoryForm";

const NewCategory = () => {
    const router = useRouter();

    const {
        // categoryName,
        setCategoryName,
        // categorySlug,
        setCategorySlug,
        // categoryDesc,
        setCategoryDesc,
        // categoryImage,
        setCategoryImage,
        handleSubmit
    } = useCategoryForm(router);

    return (
        <div className="mx-auto p-4 bg-gray-200">
            <div className="">
                <div className="col-span-5 xl:col-span-3">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                            <h3 className="font-semibold text-black dark:text-white">
                                Add New Category
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
                                                onChange={(e) => {
                                                    setCategoryName(e.target.value);
                                                    setCategorySlug(e.target.value); // You can use categoryName to generate slug
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
                                    <UploadImage name="categoryImage" setImageUrl={setCategoryImage} />
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
                                        Save
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

export default NewCategory;
