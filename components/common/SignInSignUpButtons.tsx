import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

const SignInSignUpButtons = () => {
    return (
        <div className='flex gap-4 text-white'>
            <Link href="/sign-up"><Button className='bg-white text-primary hover:bg-gray-300'>Join Now !</Button></Link>

            <Link href="/sign-in"><Button className='bg-white text-primary hover:bg-gray-300'>Sign In</Button></Link>
        </div>
    )
}

export default SignInSignUpButtons