"use client";

import AuthForm from "@/components/forms/AuthForm";
import { signIn } from "next-auth/react";
import { signInSchema } from "@/lib/validations";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

const SignInPage = () => {
    const router = useRouter();

    const handleClientSignIn = async (values: { email: string; password: string }) => {
        const res = await signIn("credentials", {
            ...values,
            redirect: false,
        });

        if (res?.ok) {
            toast({ title: "Signed in successfully" });
            router.push("/"); // or any redirect you want
            return { success: true };
        } else {
            toast({ title: "Login failed", description: res?.error || "Invalid credentials" });
            return { success: false, error: "Signin error" };
        }
    };

    return (
        <AuthForm
            type="SIGN_IN"
            schema={signInSchema}
            defaultValues={{
                email: "",
                password: "",
            }}
            onSubmit={handleClientSignIn}
        />
    );
};

export default SignInPage;
