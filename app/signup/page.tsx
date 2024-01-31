'use client';
import React, { useState } from 'react'
import signupImage from '../assests/signup.jpg'
import Image from 'next/image'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import SignInButton from '../components/SignInButton/SignInButton'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { Callout } from '@radix-ui/themes';
import { setCookie } from 'cookies-next';




interface signupForm {
    name: string;
    email: string;
    password: string

}

const SignUp = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm<signupForm>()
    const [error, setError] = useState('')

    const onSubmit = async (data: signupForm) => {

        try {

            const response = await axios.post('http://localhost:3000/auth/signup', data);
            setCookie('token', response.data.token);
            router.push('/onboard')
        } catch (error) {
            setError('An unexpected error occurred')

        }
    };



    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'><Image className='w-full h-full object-cover' alt='gym' src={signupImage} priority /></div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                {/* {error && (<Callout.Root color='red' >

                    <Callout.Text>
                        {error}
                    </Callout.Text>
                </Callout.Root>)} */}
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-4xl text-white font-bold text-center'>Sign Up</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Name</label>
                        <input {...register("name")} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='text' autoComplete='username' />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Email</label>
                        <input {...register("email")} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='email' autoComplete='username' />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input {...register("password")} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='password' autoComplete="current-password" />
                    </div>


                    <SignInButton bgColor="bg-customRed" text='SIGN IN' />
                    <p className='text-gray-400 text-center'>
                        Already have an account?{' '}
                        <Link legacyBehavior href='/login'>
                            <a className='no-underline hover:underline cursor-pointer'>
                                Login
                            </a>
                        </Link>
                    </p>
                </form>


            </div>

        </div>
    )
}

export default SignUp