import axiosInstance from '../common/axiosInstance';
export async function fetchUsersData() {
    try {

        const response = await axiosInstance.get('/users');
        console.log(response)

        return response.data.map((item: { id: number; profile_picture: string; name: string; email: string; phone_number: string; role: string; }) => ({
            id: item.id,
            image: item.profile_picture ? item.profile_picture : '/noavatar.png',
            title: item.name ?? '',
            email: item.email ?? '',
            phone_number: item.phone_number,
            role: item.role,
        }));
    } catch (error) {
        console.error('Error fetching users data:', error);
        return [];
    }
}


export const deleteUser = async (id: number) => {
    console.log(id)
    try {
        const response = await axiosInstance.delete(`/users/${id}`);

        if (response.status != 200) {
            throw new Error(`Failed to delete user`);
        }
        alert("User Deleted Successfuly");
    } catch (error) {
        console.error(error);
    }
}