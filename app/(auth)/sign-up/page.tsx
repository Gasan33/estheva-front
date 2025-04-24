"use client"
import AuthForm from '@/components/forms/AuthForm'
import { signup } from '@/lib/actions/auth'
import { signUpSchema } from '@/lib/validations'
import React from 'react'

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
        triger="NORMAL"
        onSubmit={signup}
    />)
}

export default page