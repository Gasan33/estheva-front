'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';  // Import js-cookie library
import { login, logout, signUp } from '@/services/auth/auth';
// getAuthenticatedUser
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);  // Role state
    const [token, setToken] = useState(null);

    // Get token from cookies on initial load
    useEffect(() => {
        const storedToken = Cookies.get('auth-token');
        const storedUser = localStorage.getItem('user');
        const storedRole = localStorage.getItem('role');
        if (storedToken) {
            setUser(JSON.parse(storedUser));
            setRole(storedRole);
        }
    }, []);

    // Login function to store token in cookies
    const handleLogin = async (email, password) => {
        const data = await login(email, password);
        console.log(data);
        console.log(data.data.authorisation.token);
        console.log(data.data.user);
        console.log(data.data.user.role);

        // setToken(data.data.authorisation.token);
        // setUser(data.data.user);
        // setRole(data.data.user.role);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        localStorage.setItem('role', data.data.user.role);
        localStorage.setItem('token', data.data.authorisation.token);
        console.log(process.env.NODE_ENV);

        Cookies.set(
            'auth-token',
            data.data.authorisation.token,
            {
                expires: 7,
                // secure: process.env.NODE_ENV === 'production', 
                secure: false,
                sameSite: 'Strict'
            });
        Cookies.set('role', data.data.user.role, { expires: 7, secure: process.env.NODE_ENV === 'production', sameSite: 'Strict' });


    };


    const handleSignUp = async (firstName, lastName, email, phone, password) => {
        const data = await signUp(firstName, lastName, email, phone, password);
        console.log(data);
        console.log(data.data.authorisation.token);
        console.log(data.data.user);
        console.log(data.data.user.role);
        // setToken(data.data.authorisation.token);
        // setUser(data.data.user);
        // setRole(data.data.user.role);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        localStorage.setItem('role', data.data.user.role);
        localStorage.setItem('token', data.data.authorisation.token);

        Cookies.set(
            'auth-token',
            data.data.authorisation.token,
            {
                expires: 7,
                // secure: process.env.NODE_ENV === 'production', 
                secure: false,
                sameSite: 'Strict'
            });
        Cookies.set('role', data.data.user.role, { expires: 7, secure: process.env.NODE_ENV === 'production', sameSite: 'Strict' });

    };

    // Logout function to remove token from cookies
    const handleLogout = async () => {
        if (token) await logout(token);
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        setRole(null);

        Cookies.remove('auth-token');
        Cookies.remove('role');
    };

    return (
        <AuthContext.Provider value={{ user, role, token, handleLogin, handleSignUp, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
