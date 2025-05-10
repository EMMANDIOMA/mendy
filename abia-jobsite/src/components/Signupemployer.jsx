import React from 'react'
import { NavLink } from 'react-router-dom';

const Signupemployer = () => {
    return (
        <>
            <div className="bg-gray-50 text-gray-800 min-h-screen">
                <div className="max-w-4xl mx-auto py-10">
                    {/* Step 1 */}
                    <div className="bg-green-900 text-white text-center py-6 rounded-t-md">
                        <h1 className="text-2xl font-bold">Create an Employer Account</h1>
                        <p className="text-sm">Reach top talent and find the right candidate today</p>
                        <div className="mt-4 border-b border-white inline-block">
                            <h2 className="text-lg font-semibold pb-1">STEP 1 of 2</h2>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-md p-6 mb-10 flex gap-8">
                        <div className="bg-green-900 text-white flex flex-col items-center justify-center p-10 w-1/3 text-sm">
                            <p className="font-medium">Company Representative</p>
                            <p>This is information pertaining to you as a representative of the company.</p>
                        </div>
                        <form className="w-2/3 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name" className="border rounded px-4 py-2 w-full" />
                                <input type="text" placeholder="Last Name" className="border rounded px-4 py-2 w-full" />
                                <input type="email" placeholder="Work Email" className="border rounded px-4 py-2 w-full" />
                                <input type="password" placeholder="Create Password" className="border rounded px-4 py-2 w-full" />
                                <select className="border rounded px-4 py-2 w-full" required>
                                    <option value="">Position in Company</option>
                                    <option value="hr">HR</option>
                                    <option value="ceo">CEO</option>
                                </select>
                                <div className="flex gap-2">
                                    <select className="border rounded px-4 py-2 w-1/2">
                                        <option>Nigeria (+234)</option>
                                    </select>
                                    <input type="tel" placeholder="Phone Number" className="border rounded px-4 py-2 w-1/2" />
                                </div>
                            </div>
                            <div className="text-sm">
                                Already have an account? <a href="#" className="text-blue-600 hover:underline">Log in</a>
                            </div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox mr-2" />
                                    <p>Email me high quality articles on HR and recruiting</p>
                                </label>
                            </div>
                            <div className="text-right">
                                <button type="button" className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-300">
                                    Next →
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-green-900 text-white text-center py-6 rounded-t-md mb-4">
                        <h2 className="text-lg font-semibold">STEP 2 of 2</h2>
                    </div>
                    <div className="bg-white shadow rounded-md p-6">
                        <div className="flex gap-8">
                            <div className="bg-green-900 text-white flex flex-col items-center justify-center p-10 w-1/3 text-sm">
                                <p className="font-medium">Company Information</p>
                                <p>This information pertains to your company</p>
                            </div>
                            <form className="w-2/3 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="Company Name *" className="border rounded px-4 py-2 w-full" />
                                    <select className="border rounded px-4 py-2 w-full">
                                        <option value="">Industry</option>
                                        <option value="tech">Tech</option>
                                        <option value="finance">Finance</option>
                                    </select>
                                    <select className="border rounded px-4 py-2 w-full">
                                        <option value="">Number of Employees</option>
                                        <option value="1-10">1-10</option>
                                    </select>
                                    <select className="border rounded px-4 py-2 w-full">
                                        <option value="">Type of Employer *</option>
                                        <option value="private">Private</option>
                                        <option value="public">Public</option>
                                    </select>
                                    <input type="url" placeholder="Website" className="border rounded px-4 py-2 w-full" />
                                    <select className="border rounded px-4 py-2 w-full">
                                        <option value="">Where did you hear about us?</option>
                                        <option>Google</option>
                                        <option>LinkedIn</option>
                                    </select>
                                    <input type="text" placeholder="Contact Person *" className="border rounded px-4 py-2 w-full" />
                                    <input type="email" placeholder="Notification Email *" className="border rounded px-4 py-2 w-full" />
                                </div>
                                <textarea placeholder="Address" className="w-full border rounded px-4 py-2"></textarea>
                                <div>
                                    <label className="inline-flex items-center text-sm">
                                        <input type="checkbox" className="form-checkbox mr-2" />
                                        I agree to the <a href="#" className="text-blue-600 underline">TERMS & CONDITIONS</a> and <a href="#" className="text-blue-600 underline">PRIVACY POLICY</a>
                                    </label>
                                </div>
                                <div className="text-right">
                                    <NavLink to={'/Signup'} type="submit" className="bg-green-900 text-white px-6 py-2 me-3 rounded hover:bg-green-300 hover:text-black">
                                        Go Back
                                    </NavLink>
                                    <button type="submit" className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-300 hover:text-black">
                                        Create Your Account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signupemployer;