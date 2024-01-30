"use client";
import { useState } from 'react'
import UserNameEmail from './UserNameEmail'
import DobGender from './DobGender'
import Address from './Address'

const MainForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        dob: "",
        gender: "male",
        address: "",
    })



    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };


    const [activeTab, setActiveTab] = useState(0)

    const formElements = [
        <UserNameEmail key="userNameEmail" data={data} handleChange={handleChange} />,
        <DobGender key="dobGender" data={data} handleChange={handleChange} />,
        <Address key="address" data={data} setData={setData} />
    ]

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
                    activeTab === formElements.length - 1 ? <button className='px-4 py-2 rounded-xl bg-blue-600 text-white' onClick={() => console.log(data)}>Submit</button> : null
                }
            </div>
        </div>
    )
}

export default MainForm
