
import React from 'react';

interface DobGenderProps {
    data: {
        fitnessGoal: string;
        activityLevel: string;
    };
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DobGender = (props: DobGenderProps) => {
    const { data, handleChange } = props;

    return (
        <div className="max-w-xs md:max-w-lg mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-10">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fitnessGoal">
                        Fitness Goal
                    </label>
                    <select name="fitnessGoal" value={data.fitnessGoal} onChange={handleChange} className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                        <option value="weightLoss">Weight Loss</option>
                        <option value="muscleGain">Muscle Gain</option>
                        <option value="endurance">Endurance</option>
                        <option value="flexibility">Flexibility</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activityLevel">
                        Activity Level
                    </label>
                    <select name="activityLevel" value={data.activityLevel} onChange={handleChange} className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                        <option value="sedentary">Sedentary</option>
                        <option value="lightlyActive">Lightly Active</option>
                        <option value="active">Active</option>
                        <option value="veryActive">Very Active</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default DobGender;
