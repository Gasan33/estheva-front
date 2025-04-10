"use client"
import AuthForm from '@/components/forms/AuthForm'
// import { signup } from '@/lib/actions/auth'
import { signUpSchema } from '@/lib/validations'
import React from 'react'
import { signInWithCredentials } from '../sign-in/page'
import config from '@/lib/config'

export const signup = async (params: AuthCredentials) => {
    const { firstName, lastName, email, password, phoneNumber, confirmPassword } = params;

    try {
        const response = await fetch(`${config.env.apiEndpoint}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone_number: phoneNumber,
                password: password,
            }),
        });
        console.log(response)

        if (!response.ok) {
            const errorData = await response.json();
            return { success: false, error: errorData.message || "Signup failed" };
        }

        // Automatically sign in after successful signup
        return await signInWithCredentials({ email, password });
    } catch (error) {
        console.error("Signup error:", error);
        return { success: false, error: "Signup error" };
    }
};

const page = () => {
    return (<AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: 0,
            password: "",
            confirmPassword: ""
        }}
        onSubmit={signup}
    />)
}

export default page