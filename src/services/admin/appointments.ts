import axiosInstance from '../common/axiosInstance';

export async function fetchAppointmentsData() {
    try {
        const response = await axiosInstance.get('/appointments');
        return response.data.data.map((item: { id: string; user: { profile_picture: string; name: string; first_name: string; last_name: string; }; service: { name: string; }; appointment_date: string; appointment_time: string; status: string; }) => ({
            id: item.id,
            image: item.user.profile_picture ?? "/noavatar.png",
            title: item.user.name ?? `${item.user.first_name} ${item.user.last_name}`,
            service_name: item.service.name,
            appointment_date: item.appointment_date ?? "",
            appointment_time: item.appointment_time ?? "",
            status: item.status,
        }));
    } catch (error) {
        console.error("Error fetching appointments data:", error);
        return [];
    }
}


export const deleteAppointment = async (id: number) => {
    console.log(id)
    try {
        const response = await axiosInstance.delete(`/appointments/${id}`);

        if (response.status != 200) {
            throw new Error(`Failed to delete appointment`);
        }
        alert("Appointment Deleted Successfuly");
    } catch (error) {
        console.error(error);
    }
}