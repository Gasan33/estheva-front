
import axiosInstance from '../common/axiosInstance';
type Address = {
    address_line_1: string;
    state: string;
    postal_code: string;
    city: string;
    country: string;
    is_primary: number
};
export async function fetchDoctorsData() {
    try {
        const response = await axiosInstance.get('/doctors');
        return response.data.map((item: { addresses: Address[]; id: string; user: { profile_picture: string; name: string; first_name: string; last_name: string; email: string; phone_number: string; }; specialty: string; }) => {
            const primaryAddress = item.addresses?.find((address) => address.is_primary === 1);
            return {
                id: item.id,
                image: item.user.profile_picture ?? "/noavatar.png",
                title: item.user.name ?? `${item.user.first_name} ${item.user.last_name}`,
                email: item.user.email ?? "",
                phone_number: item.user.phone_number,
                specialty: item.specialty ?? "",
                address: primaryAddress
                    ? `${primaryAddress.city ?? ""}, ${primaryAddress.address_line_1 ?? ""}, ${primaryAddress.state ?? ""} ${primaryAddress.postal_code ?? ""}`.trim()
                    : "No primary address available",
            };
        });
    } catch (error) {
        console.error("Error fetching doctors data:", error);
        return [];
    }
}


export const deleteDoctor = async (id: number) => {
    console.log(id)
    try {
        const response = await axiosInstance.delete(`/doctors/${id}`);

        if (response.status != 200) {
            throw new Error(`Failed to delete doctor`);
        }
        alert("Doctor Deleted Successfuly");
    } catch (error) {
        console.error(error);
    }
}