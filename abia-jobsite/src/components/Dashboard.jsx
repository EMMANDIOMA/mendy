import React, { useState } from 'react';
import Header from './Header';
import Employerdashboard from './Employerdashboard';
import Jobseekerdashboard from './Jobseekerdashboard';

function Dashboard() {
    // State to keep track of the active dashboard
    const [activeDashboard, setActiveDashboard] = useState('employer');

    return (
        <>
            <Header />

            <div className="flex items-center justify-center mt-10">
                <div className="flex gap-5 mb-5">
                    <button
                        className={`rounded-2xl w-50 h-10 flex items-center justify-center text-2xl text-white cursor-pointer px-5 ${
                            activeDashboard === 'employer' ? 'bg-green-800' : 'bg-green-300'
                        }`}
                        onClick={() => setActiveDashboard('employer')}
                    >
                        Employer
                    </button>

                    <button
                        className={`rounded-2xl w-50 h-10 flex items-center justify-center text-2xl text-white cursor-pointer px-5 ${
                            activeDashboard === 'jobseeker' ? 'bg-green-800' : 'bg-green-300'
                        }`}
                        onClick={() => setActiveDashboard('jobseeker')}
                    >
                        Job Seeker
                    </button>
                </div>
            </div>

            <div>
                {activeDashboard === 'employer' ? <Employerdashboard /> : <Jobseekerdashboard />}
            </div>
        </>
    );
}

export default Dashboard;
