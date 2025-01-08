import { useState } from 'react';
import { createCategory } from '../../services/admin/category';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const useCategoryForm = (router: AppRouterInstance | string[]) => {
    const [categoryName, setCategoryName] = useState("");
    const [categorySlug, setCategorySlug] = useState("");
    const [categoryDesc, setCategoryDesc] = useState("");
    const [categoryImage, setCategoryImage] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", categoryName ?? "");
        formData.append("slug", categorySlug ?? "");
        formData.append("description", categoryDesc ?? "");
        if (categoryImage) {
            formData.append("image", categoryImage);
        }

        try {
            await createCategory(formData);
            alert("Category Created Successfully");
            router.push('/admin/categories');
        } catch (error) {
            console.error(error);
            alert("Error creating category.");
        }
    };

    return {
        categoryName,
        setCategoryName,
        categorySlug,
        setCategorySlug,
        categoryDesc,
        setCategoryDesc,
        categoryImage,
        setCategoryImage,
        handleSubmit,
    };
};

export default useCategoryForm;
