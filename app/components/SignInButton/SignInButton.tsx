'use client'
import React from 'react'

type SignInButtonProps = {
    text: string;
};

const SignInButton = ({ text }: SignInButtonProps) => {
    return (
        <button onClick={() => console.log("clicl")} className='w-full my-5 py-2 bg-yellow-500 shadow-lg  hover:shadow-yellow-500/40 text-white font-semibold rounded-lg'>{text}</button>
    )
}

export default SignInButton