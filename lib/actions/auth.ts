"use server";

import { signIn } from "@/auth";
import config from "../config";

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
