"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { ZodType } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { CONTACT_FIELD_NAMES, CONTACT_FIELD_TYPES } from "@/constants"
// import ImageUpload from "./ImageUpload"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { Textarea } from "../ui/textarea"
import dynamic from 'next/dynamic';

// Dynamically import the package to avoid SSR issues
const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });
import 'react-phone-input-2/lib/style.css';


interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean, error?: string }>;
    type: "CONTACT";
}

const ContactForm = <T extends FieldValues>({ type, schema, defaultValues, onSubmit }: Props<T>) => {
    const router = useRouter();
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    })

    const handleSubmit: SubmitHandler<T> = async (data) => {
        const result = await onSubmit(data);
        if (result.success) {
            toast({
                title: "Success",
                description: "Your Message is successfully Submited We Will Contact With You Soon."

            });
            router.push("/");
        } else {
            toast({
                title: `Error submiting your message. Please try again!`,
                description: result.error ?? "An error occurred.",
                variant: "destructive",

            });
        }

    }
    return (
        <div className="flex flex-col gap-4 ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="gap-4 md:gap-6 lg:gap-8 w-full grid grid-cols-1 md:grid-cols-2 items-end">
                    {Object.keys(defaultValues).map((field) => (
                        <FormField
                            key={field}
                            control={form.control}
                            name={field as Path<T>}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="capitalize text-gray-500">{CONTACT_FIELD_NAMES[field.name as keyof typeof CONTACT_FIELD_NAMES]}</FormLabel>
                                    <FormControl>
                                        {field.name === "message" ?
                                            <textarea
                                                className="mt-1 p-2.5 block w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:ring-primaryColor focus:border-primaryColor text-gray-900"
                                            /> :
                                            field.name === "phoneNumber" ?
                                                <PhoneInput
                                                    country={'ae'}
                                                    inputStyle={{
                                                        width: '100%',
                                                        height: '44px',
                                                        borderRadius: '30px',
                                                        paddingLeft: '70px',
                                                        border: '1px solid #d1d5db',
                                                        fontSize: '14px',
                                                        color: '#111827',
                                                        boxShadow: 'none',
                                                    }}
                                                    buttonStyle={{
                                                        width: '50px',
                                                        background: 'transparent',
                                                        border: 'none',
                                                        position: 'absolute',
                                                        left: '10px',
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                    }}
                                                    containerStyle={{
                                                        position: 'relative',
                                                    }}
                                                    dropdownStyle={{
                                                        width: '300px',
                                                        borderRadius: '8px',
                                                        zIndex: '1000',
                                                    }}
                                                    onFocus={(e) => {
                                                        e.target.style.borderColor = '#14b8a6';
                                                    }}
                                                />
                                                : <input
                                                    required
                                                    type={CONTACT_FIELD_TYPES[field.name as keyof typeof CONTACT_FIELD_TYPES]}
                                                    {...field}
                                                    className="mt-1 p-2.5 block w-full rounded-full border border-gray-300 focus:outline-none focus:ring-0 focus:ring-primaryColor focus:border-primaryColor text-gray-900"
                                                />}
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}


                    <div className="flex justify-end mt-4">
                        <Button type="submit" className="py-6 px-8 rounded-full bg-primaryColor text-white shadow-lg">
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default ContactForm