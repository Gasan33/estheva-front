"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import {
    DefaultValues,
    FieldValues,
    Path,
    SubmitHandler,
    useForm,
    UseFormReturn
} from "react-hook-form"
import { ZodType } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Auth_FIELD_NAMES, Auth_FIELD_TYPES } from "@/constants"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Label } from "../ui/label"
import { Eye, EyeOff } from "lucide-react"

interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean, error?: string }>;
    type: "SIGN_IN" | "SIGN_UP";
    triger: "NORMAL" | "BOOK";
}

const AuthForm = <T extends FieldValues>({ type, triger, schema, defaultValues, onSubmit }: Props<T>) => {
    const router = useRouter();
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const isSignIn = type === 'SIGN_IN';
    const isNormal = triger === 'NORMAL';

    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    const handleSubmit: SubmitHandler<T> = async (data) => {
        if (!isSignIn && !termsAccepted) {
            setError("You must accept the terms and conditions.");
            return;
        }

        setError(null);
        const result = await onSubmit(data);
        if (result.success) {
            toast({
                title: "Success",
                description: isSignIn
                    ? "You have successfully signed in."
                    : "You have successfully signed up."
            });

            router.push("/");
        } else {
            toast({
                title: `Error ${isSignIn ? "signing in" : "signing up"}`,
                description: result.error ?? "An error occurred.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            {!isNormal ? <div>
                <div className="flex items-center justify-center mb-4">
                    <img
                        src="/images/phone.svg"
                        alt="app"
                        style={{ width: "80px", height: "auto" }}
                        className="mx-auto md:mx-0 object-contain"
                    />
                </div>
                <h1 className="text-2xl text-center font-semibold">
                    Almost There!
                </h1>
                <p className="text-center text-sm text-muted-foreground">
                    To complete your appointment booking, please log in or sign up.
                </p>
            </div>
                : <>
                    <h1 className="text-2xl font-semibold">
                        {isSignIn ? "Welcome Back to Estheva Polyclinic" : "Create your account"}
                    </h1>
                    <p className="text-center text-sm text-muted-foreground">
                        {isSignIn
                            ? "Enter your email below to login to your account, and stay updated"
                            : "Please complete all fields to gain access to all treatments"}
                    </p>
                </>}

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">
                    {Object.keys(defaultValues).map((fieldKey) => {
                        const fieldName = fieldKey as Path<T>;
                        const type = Auth_FIELD_TYPES[fieldName as keyof typeof Auth_FIELD_TYPES];

                        return (
                            <FormField
                                key={fieldKey}
                                control={form.control}
                                name={fieldName}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="capitalize">
                                            {Auth_FIELD_NAMES[field.name as keyof typeof Auth_FIELD_NAMES]}
                                        </FormLabel>
                                        <FormControl>
                                            {type === "password" ? (
                                                <div className="relative">
                                                    <Input
                                                        {...field}
                                                        required
                                                        type={showPassword ? "text" : "password"}
                                                        className="form-input h-12 rounded-lg pr-12"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                    </button>
                                                </div>
                                            ) : (
                                                <Input
                                                    {...field}
                                                    required
                                                    type={type}
                                                    className="form-input h-12 rounded-lg"
                                                />
                                            )}
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        );
                    })}

                    {!isSignIn && (
                        <div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    required
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                />
                                <Label htmlFor="terms">
                                    I agree to the{" "}
                                    <Link href="/terms&conditions" className="underline">
                                        Terms and Conditions
                                    </Link>
                                </Label>
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                        </div>
                    )}

                    <Button type="submit" className="w-full bg-primaryColor text-white">
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </Button>
                </form>
            </Form>

            <div className="relative mt-4 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    Or continue with
                </span>
            </div>

            <Button variant="outline" className="w-full mt-4">
                <svg viewBox="-0.5 0 48 48" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4">
                    </path> </g> </g> </g> </g></svg>
                Login with Google
            </Button>

            <div className="text-center text-sm">
                {isSignIn ? "Don't have an account? " : "Already have an account? "}
                <Link href={isSignIn ? "/sign-up" : "/sign-in"} className="text-primaryColor underline underline-offset-4">
                    {isSignIn ? "Create an account" : "Sign in"}
                </Link>
            </div>
        </div >
    );
};

export default AuthForm;
