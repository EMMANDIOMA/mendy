import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';



function Loginpage() {
    return (
        <>
            <div className="min-h-screen flex">


                <div className="w-1/2 bg-green-800 text-white md:flex flex-col items-center justify-center p-10 hidden">
                    <h1 className="text-3xl font-bold mb-4">Abia Jobs</h1>
                    <img className="w-30 h-30" src="../Abia_job_logo.png" alt="" />
                </div>

                <section className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
                    
                    <div className="w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-6">Welcome Back</h2>


                        <div className="flex space-x-2 mb-4">
                            <button className="flex-1 flex items-center justify-center border bg-gray-100 py-2 rounded hover:bg-gray-200 text-sm">
                            <FcGoogle size='2em' /> Login with Google
                            </button>
                            <button className="flex-1 flex items-center justify-center border bg-gray-100 py-2 rounded hover:bg-gray-200 text-sm">
                            <FaFacebook size='2em' color='blue'/>  Login with Facebook
                            </button>
                        </div>

                        <div className="text-center text-sm text-gray-400 mb-4">OR</div>


                        <form action="#" method="POST" className="space-y-4">
                            <input type="text" placeholder="Email address/Phone number" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500" />

                            <div className="relative">
                                <input type="password" placeholder="Password" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
                                <span className="absolute right-3 top-2.5 cursor-pointer text-gray-500">
                                </span>
                            </div>

                            <div className="text-right text-sm text-blue-600 cursor-pointer hover:underline">
                                Forgot Password?
                            </div>

                            <button type="submit" className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 font-semibold">Log In</button>

                            <p className="text-xs text-center text-gray-500 mt-4">
                                By clicking "Log In" you agree to our
                                <a href="#" className="text-blue-600 hover:underline">Terms of use</a> and
                                <a href="#" className="text-blue-600 hover:underline">Private Policy</a>.
                            </p>
                        </form>

                        <NavLink to={'/'} className="mt-5 text-white px-2 flex items-center justify-center bg-green-800 hover:bg-green-300 hover:text-black ">Go Back</NavLink>


                    </div>

                </section>

            </div>
        </>
    )
}

export default Loginpage
