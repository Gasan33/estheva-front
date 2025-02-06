import React from 'react'
import { Button } from '../../../ui/button'
import Link from 'next/link'

const SignInSignUpButtons = () => {
    return (
        <div className='flex gap-4 text-white'>
            <Link href="/sign-up"><Button className='bg-primaryColor hover:bg-teal-800'>Join Now !</Button></Link>

            <Link href="/sign-in"><Button className='bg-primaryColor hover:bg-teal-800'>Sign In</Button></Link>
        </div>
    )
}

export default SignInSignUpButtons