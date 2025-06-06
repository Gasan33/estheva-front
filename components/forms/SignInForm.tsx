"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Auth_FIELD_NAMES, Auth_FIELD_TYPES } from "@/constants"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { ZodType, z } from "zod"

interface SignInFormProps<T extends Record<string, any>> {
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean, error?: string }>;
}

const SignInForm = <T extends Record<string, any>>({ schema, defaultValues, onSubmit }: SignInFormProps<T>) => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<T>({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    const handleSubmit = async (data: T) => {
        const result = await onSubmit(data);
        if (result.success) {
            toast({
                title: "Success",
                description: "You have successfully signed in."
            });
            router.push("/");
        } else {
            toast({
                title: "Error signing in",
                description: result.error ?? "An error occurred.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-2xl font-semibold">Welcome Back to Estheva Polyclinic</h1>
            <p className="text-center text-sm text-muted-foreground">
                Enter your email below to login to your account, and stay updated
            </p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">
                    {Object.keys(defaultValues).map((fieldKey) => {
                        const type = Auth_FIELD_TYPES[fieldKey as keyof typeof Auth_FIELD_TYPES];
                        return (
                            <FormField
                                key={fieldKey}
                                control={form.control}
                                name={fieldKey as any}
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
                                                <Input {...field} required type={type} className="form-input h-12 rounded-lg" />
                                            )}
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        );
                    })}
                    <Button type="submit" className="w-full bg-primaryColor text-white">Sign In</Button>
                </form>
            </Form>

            <div className="relative mt-4 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    Or continue with
                </span>
            </div>

            <Button variant="outline" className="w-full mt-4 gap-2">
                <svg viewBox="-0.5 0 48 48" xmlns="http://www.w3.org/2000/svg" width="20" height="20" />
                Login with Google
            </Button>

            <div className="text-center text-sm">
                Don’t have an account?{" "}
                <Link href="/sign-up" className="text-primaryColor underline underline-offset-4">
                    Create an account
                </Link>
            </div>
        </div>
    );
};

export default SignInForm;
