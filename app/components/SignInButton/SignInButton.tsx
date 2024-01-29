'use client'
import React from 'react';

type SignInButtonProps = {
    text: string;
    bgColor: string;

};

const SignInButton = ({ text, bgColor }: SignInButtonProps) => {
    return (
        <button type='submit'

            className={`w-full my-5 py-2 ${bgColor} shadow-lg  text-white font-semibold rounded-lg`}
        >
            {text}
        </button>
    );
}

export default SignInButton;
