import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
    const token = Cookies.get('auth-token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export async function login(email, password) {
    const response = await axiosInstance.post('/login', { email, password });
    return response.data;
}

export async function getAuthenticatedUser(token) {
    const response = await axiosInstance.get('/me', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}
export const signUp = async (firstName, lastName, email, phone, password) => {
    try {
        const response = await axiosInstance.post('/register', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            password: password,
        });

        return response.data;
    } catch (error) {
        console.error('Error signing up:', error);
        throw error;
    }
};
export async function logout(token) {
    const response = await axiosInstance.post('/logout', {}, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}
