"use server";


export const fetchCategories = async (): Promise<Category[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    const categories = await res.json();
    return categories.data;
};