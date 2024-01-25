import React from 'react'
import signupImage from '../assests/signup.jpg'
import Image from 'next/image'
import SignInButton from '../components/SignInButton/SignInButton'
import Link from 'next/link'

const SignUp = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'><Image className='w-full h-full object-cover' alt='gym' src={signupImage} priority /></div>
        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                <h2 className='text-4xl text-white font-bold text-center'>Sign Up</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Name</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='text' autoComplete='username' />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='email' autoComplete='username' />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='password' autoComplete="current-password" />
                </div>
              

                <SignInButton bgColor="bg-customRed" text='SIGN IN'  />
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