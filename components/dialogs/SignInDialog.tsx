import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight } from 'lucide-react'
import AuthForm from '../forms/AuthForm'
import { signInSchema } from '@/lib/validations'
import { signInWithCredentials } from '@/lib/actions/auth'
const SignInDialog = () => {
    return (
        <Dialog>
            <DialogTrigger className='flex items-center gap-0 md:gap-1 text-xs font-thin md:text-sm md:font-medium text-primaryColor'>
                Book Now
                <ArrowRight size={16} className='h-4 md:h-6 -rotate-45' />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='text-center'>Sign In Or Register Please</DialogTitle>
                    <DialogDescription>
                        <AuthForm
                            type="SIGN_IN"
                            schema={signInSchema}
                            defaultValues={{
                                email: '',
                                password: "",
                            }}
                            onSubmit={signInWithCredentials}
                        />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SignInDialog