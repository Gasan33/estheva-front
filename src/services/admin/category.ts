import axiosInstance from '../common/axiosInstance';

export async function fetchCategoriesData() {
    try {
        const response = await axiosInstance.get("/categories");

        return response.data.data.map((item: { category_id: string; relations: { images: { attributes: { path: string; }; }; }; category_name: string; category_description: string; }) => ({
            id: item.category_id,
            image: item.relations?.images?.attributes?.path || "/default-category-image.png",
            title: item.category_name,
            description: item.category_description || "No description available",
        }));
    } catch (error) {
        console.error("Error fetching categories data:", error);
        return [];
    }
}


export const createCategory = async (formData: FormData) => {
    try {
        const response = await axiosInstance.post(
            "/categories",
            formData,
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error creating category');
    }
};



export const deleteCategory = async (id: number) => {
    console.log(id)
    try {
        const response = await axiosInstance.delete(`/categories/${id}`);

        if (response.status != 200) {
            throw new Error(`Failed to delete category`);
        }
        alert("Category Deleted Successfuly");
    } catch (error) {
        console.error(error);
    }
}