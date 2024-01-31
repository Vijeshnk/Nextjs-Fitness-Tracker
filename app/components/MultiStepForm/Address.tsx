
import React from 'react';

interface AddressProps {
    data: {
        dietPreference: string;
        healthCondition: string;
    };
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Address = (props: AddressProps) => {
    const { data, handleChange } = props;

    return (
        <div className="max-w-xs md:max-w-lg mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-10">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dietPreference">
                        Diet Preference
                    </label>
                    <select name="dietPreference" value={data.dietPreference} onChange={handleChange} className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                        <option value="omnivore">Omnivore</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="pescatarian">Pescatarian</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="healthCondition">
                        Health Condition
                    </label>
                    <select name="healthCondition" value={data.healthCondition} onChange={handleChange} className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                        <option value="none">None</option>
                        <option value="diabetes">Diabetes</option>
                        <option value="hypertension">Hypertension</option>
                        <option value="heartDisease">Heart Disease</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Address;
