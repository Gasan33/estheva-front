import axiosInstance from '../common/axiosInstance';

export async function fetchServicesData() {
    try {
        const response = await axiosInstance.get('/services');
        console.log(response.data);
        return response.data.data.map((item: { id: string; images: string[]; name: string; description: string; price: string; category: { name: string; }; }) => ({
            id: item.id,
            image: item.images ? item.images[0] : '',
            title: item.name,
            description: item.description ?? '',
            price: item.price,
            category: item.category.name,
        }));
    } catch (error) {
        console.error("Error fetching services data:", error);
        return [];
    }
}



export const getCategoriesData = async () => {
    const response = await axiosInstance.get("/categories");
    return response.data.data.map((item: { category_id: string; category_name: string; }) => ({
        id: item.category_id,
        title: item.category_name,
    }));
};

export const getDoctorsData = async () => {
    const response = await axiosInstance.get("/doctors");
    return response.data.map((item: { id: string; user: { first_name: string; last_name: string; }; }) => ({
        id: item.id,
        title: `${item.user.first_name} ${item.user.last_name}`,
    }));
};

export const createService = async (serviceData: { name: string; description: string; price: number; images: string[]; video: string; benefits: string[]; duration: number; category_id: number; doctors: number[]; }) => {
    const response = await axiosInstance.post(
        "/services",
        serviceData,
    );
    return response.data;
};


export const deleteService = async (id: number) => {
    console.log(id)
    try {
        const response = await axiosInstance.delete(`/services/${id}`);

        if (response.status != 200) {
            throw new Error(`Failed to delete service`);
        }
        alert("Service Deleted Successfuly");
    } catch (error) {
        console.error(error);
    }
}