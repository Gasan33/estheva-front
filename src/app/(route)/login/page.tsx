// import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/forms/login-form"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex w-full justify-center items-center gap-2">
                    <Link href="/" className="flex justify-center items-center gap-2 font-medium">
                        <Image src='/logo.png' alt="Estheva Polyclinic" width={220} height={80} />
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <div className="relative hidden bg-muted lg:block">
                <Image
                    src="/pic1.png"
                    alt="Image"
                    fill
                    sizes="400"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}
