import React, { useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { BiCategory } from 'react-icons/bi';
import UploadImage from '../admin/uploadImage/UploadImage';
import { Button } from '../ui/button';
import CustomInput from '../common/CustomInput';
import { useRouter } from 'next/navigation';


const AddNewCategoryDialog = () => {
    const router = useRouter();
    const [categoryName, setCategoryName] = useState<string>('');
    const [categorySlug, setCategorySlug] = useState<string>('');
    const [categoryDesc, setCategoryDesc] = useState<string>('');
    const [categoryImage, setCategoryImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const generateSlug = (name: string) => {
        return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!categoryName || !categorySlug || !categoryDesc || !categoryImage) {
            alert("Please fill in all the required fields.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/admin/categories/create", {
                method: "POST",
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

            if (!response.ok) throw new Error(result.error || "Failed to create category");

            alert("Category created successfully!");
            router.back();
        } catch (error: any) {
            alert(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger className="outline outline-1 rounded-md w-full py-2 text-sm outline-primaryColor text-primaryColor font-thin">
                New Category
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Category</DialogTitle>
                    <DialogDescription>
                        <div className="p-7">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6 flex flex-col gap-5.5 sm:flex-row">
                                    <CustomInput
                                        label="Category Name"
                                        type="text"
                                        name="categoryName"
                                        placeholder="Category Name..."
                                        value={categoryName}
                                        icon={<BiCategory className="text-gray-500" />}
                                        onChange={(e) => {
                                            const name = e.target.value;
                                            setCategoryName(name);
                                            setCategorySlug(generateSlug(name));
                                        }}
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                                        htmlFor="categoryDesc"
                                    >
                                        Category Description
                                    </label>
                                    <textarea
                                        className="w-full rounded border border-stroke bg-gray py-3 pl-3 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        name="categoryDesc"
                                        id="categoryDesc"
                                        rows={6}
                                        value={categoryDesc}
                                        onChange={(e) => setCategoryDesc(e.target.value)}
                                        required
                                        placeholder="Write category description here..."
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Category Image
                                    </label>
                                    <UploadImage name="categoryImage" setImageUrl={setCategoryImage} />
                                </div>

                                <div className="flex justify-end gap-4">
                                    <DialogClose asChild>
                                        <Button className="text-red-600" type="button" variant="secondary">
                                            Close
                                        </Button>
                                    </DialogClose>
                                    <button
                                        className="flex justify-center text-white rounded bg-primary px-6 py-2 font-medium hover:bg-opacity-90"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        {loading ? "Saving..." : "Save"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AddNewCategoryDialog;
