// UserNameEmail.tsx
import React from 'react';

interface UserNameEmailProps {
    data: {
        age: string;
        weight: string;
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserNameEmail = (props: UserNameEmailProps) => {
    const { data, handleChange } = props;

    return (
        <div className="max-w-xs md:max-w-lg mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-10">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                        Age
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="age" type="number" placeholder="Age" value={data.age} onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
                        Weight (kg)
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="weight" type="number" placeholder="Weight" value={data.weight} onChange={handleChange} />
                </div>
            </form>
        </div>
    );
}

export default UserNameEmail;
