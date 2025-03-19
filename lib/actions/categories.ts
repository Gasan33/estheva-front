"use server";

export const fetchCategories = async (): Promise<Category[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    return res.json();
};