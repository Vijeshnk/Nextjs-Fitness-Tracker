import Image from 'next/image'
import React from 'react'
import loginImage from '../assests/login.jpg'
import SignInButton from '../components/SignInButton/SignInButton'

const Login = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'><Image className='w-full h-full object-cover' alt='gym' src={loginImage} priority /></div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>User Name</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='text' autoComplete='username' />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='password' autoComplete="current-password" />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center'><input className='mr-2' type='checkbox' />Remember Me</p>
                        <p>Forgot Password</p>
                    </div>

                    <SignInButton text='SIGN IN' />
                </form>
            </div>

        </div>
    )
}

export default Login