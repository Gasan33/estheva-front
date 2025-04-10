"use client"

import AuthForm from '@/components/forms/AuthForm'
// import { signInWithCredentials } from "@/lib/actions/auth"
import { signInSchema } from '@/lib/validations'
import { signIn } from 'next-auth/react';
import React from 'react'


export const signInWithCredentials = async (params: Pick<AuthCredentials, "email" | "password">) => {
    const { email, password } = params;

    try {
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
            redirectTo: '/',
        });

        if (result?.error) {
            return { success: false, error: result.error };
        }
        return { success: true };
    } catch (error) {
        console.error("Signin error:", error);
        return { success: false, error: "Signin error" };
    }
};


const page = () => {
    return (<AuthForm
        type="SIGN_IN"
        schema={signInSchema}
        defaultValues={{
            email: '',
            password: "",
        }}
        onSubmit={signInWithCredentials}
    />)
}

export default page