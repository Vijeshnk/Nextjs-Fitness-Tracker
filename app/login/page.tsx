'use client';
import Image from 'next/image'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import loginImage from '../assests/login.jpg'
import { setCookie } from 'cookies-next';
import SignInButton from '../components/SignInButton/SignInButton'
import Link from 'next/link'


interface LoginForm {
    email: string;
    password: string;
}


const Login = () => {

    const { register, handleSubmit } = useForm<LoginForm>();
    const [error, setError] = useState('');
    const router = useRouter();

    const onSubmit = async (data: LoginForm) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', data);
            setCookie('token', response.data.token);
            router.push('/dashboard '); 
        } catch (err) {
            setError('Failed to log in. Please check your credentials.');
        }
    };
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'><Image className='w-full h-full object-cover' alt='gym' src={loginImage} priority /></div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-4xl text-white font-bold text-center'>Sign In</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Email</label>
                        <input {...register("email")} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='email' autoComplete='email' />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input {...register("password")} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='password' autoComplete="current-password" />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center'><input className='mr-2' type='checkbox' />Remember Me</p>
                        <p>Forgot Password</p>
                    </div>

                    <SignInButton bgColor="bg-yellow-500" text='SIGN IN' />
                    <p className='text-gray-400 text-center'>
                        New here?{' '}
                        <Link legacyBehavior href='/signup'>
                            <a className='no-underline hover:underline cursor-pointer'>
                                Create an Account
                            </a>
                        </Link>
                    </p>
                </form>

            </div>

        </div>
    )
}

export default Login