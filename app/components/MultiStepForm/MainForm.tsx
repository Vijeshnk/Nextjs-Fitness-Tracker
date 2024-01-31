"use client";
import { useState } from 'react'
import UserNameEmail from './UserNameEmail'
import DobGender from './DobGender'
import Address from './Address'
import { useRouter } from 'next/navigation';


const MainForm = () => {
    const [data, setData] = useState({
        age: "",
        weight: "",
        fitnessGoal: "",
        activityLevel: "",
        dietPreference: "",
        healthCondition: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const [activeTab, setActiveTab] = useState(0);

    const formElements = [
        <UserNameEmail key="userDetails" data={{ age: data.age, weight: data.weight }} handleChange={handleChange} />,
        <DobGender key="dobGender" data={{ fitnessGoal: data.fitnessGoal, activityLevel: data.activityLevel }} handleChange={handleChange} />,
        <Address key="address" data={{ dietPreference: data.dietPreference, healthCondition: data.healthCondition }} handleChange={handleChange} />
    ];
    const router = useRouter();

    const handleSubmit = () => {
        
        localStorage.setItem('userData', JSON.stringify(data));

        router.push('/dashboard');
    };



    return (
        <div className=' flex flex-col justify-center '>
            <div>
                {
                    formElements[activeTab]
                }
            </div>
            <div className='flex flex-wrap gap-x-6 mx-auto'>
                <button
                    disabled={activeTab === 0}
                    onClick={() => setActiveTab(prev => prev - 1)}
                    className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${activeTab === 0 ? "opacity-50 bg-slate-600" : "opacity-100"}`}>
                    Back
                </button>
                <button
                    disabled={activeTab === formElements.length - 1}
                    onClick={() => setActiveTab(prev => prev + 1)}
                    className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${activeTab === formElements.length - 1 ? "opacity-50 bg-slate-600" : "opacity-100"}`}>Next</button>
                {
                    activeTab === formElements.length - 1 ? <button className='px-4 py-2 rounded-xl bg-blue-600 text-white' onClick={handleSubmit}>Submit</button> : null
                }
            </div>
        </div>
    )
}

export default MainForm
