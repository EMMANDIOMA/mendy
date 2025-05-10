import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';


function Signup() {
    return (
        <>  
            
            <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center">

            <NavLink to={'/'} className="flex cursor-pointer mb-5">
                <IoMdArrowRoundBack size='2em'/>Home
             </NavLink >
                <h1 class="text-3xl text-green-900 font-bold mb-10">Create your Account</h1>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">

                    <div class="bg-white rounded-lg shadow-md p-6 text-center">
                        <div class="flex justify-center mb-4">
                            <div class="bg-green-400 text-white rounded-full p-4">
                                <i class="bi bi-person-circle text-4xl"></i>
                            </div>
                        </div>
                        <h2 class="text-xl font-semibold mb-2">Job Seeker</h2>
                        <p class="text-gray-600 mb-4">
                            Are you looking for your dream job?<br />
                            Create a unique career profile with Jobberman
                        </p>

                        <NavLink to={'/Signupjobseeker'}>
                        <button  class="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-300 hover:text-black">
                            Sign up as seeker
                        </button >
                        </NavLink>
                       
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6 text-center">
                        <div class="flex justify-center mb-4">
                            <div class="bg-green-400 text-white rounded-full p-4">
                                <i class="bi bi-briefcase text-4xl"></i>
                            </div>
                        </div>
                        <h2 class="text-xl font-semibold mb-2">Employer</h2>
                        <p class="text-gray-600 mb-4">
                            Are you looking for quality candidates?<br />
                            Advertise and search with Jobberman
                        </p>
                       <NavLink to={'/Signupemployer'}>
                       <button  class="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-300 hover:text-black">
                            Sign up as employer
                        </button >
                       </NavLink>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Signup;
