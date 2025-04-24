"use client";
import AuthForm from "@/components/forms/AuthForm";
import { signInSchema } from "@/lib/validations";
import { signInWithCredentials } from "@/lib/actions/auth";

const SignInPage = () => {
    return (
        <AuthForm
            type="SIGN_IN"
            schema={signInSchema}
            defaultValues={{
                email: "",
                password: "",
            }}
            triger="NORMAL"
            onSubmit={signInWithCredentials}
        />
    );
};

export default SignInPage;
