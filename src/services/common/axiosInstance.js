import axios from 'axios';
import Cookies from 'js-cookie';
// import { useRouter } from 'next/router';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE_URL) {
    console.error("API base URL is not set. Please define NEXT_PUBLIC_API_URL in your environment.");
}

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    // timeout: 10000,  // Optional: adds a timeout to requests (10 seconds here)
});

// Interceptor to add Authorization header with the token from cookies
axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('auth-token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            // Optionally, you could clear the cookies or handle unauthenticated requests here
            console.warn("No auth token found, request will be unauthenticated.");
        }
        return config;
    },
    (error) => {
        console.error("Error in request interceptor", error);
        return Promise.reject(error);
    }
);

// Optional: Interceptor for response handling (e.g., handling 401 errors globally)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // const router = useRouter();
        if (error.response?.status === 401) {
            // Redirect to login page or refresh token logic
            window.location.href = '/login';
            console.error("Unauthorized access - Redirecting to login.");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
