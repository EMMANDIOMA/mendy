import React from 'react';
import { NavLink } from 'react-router-dom';

const Signupjobseeker = () => {
  return (
    <>
        
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        
        <div className="text-center bg-green-900 text-white py-6">
          <h1 className="text-2xl font-semibold">Create a Job Seeker Account</h1>
          <p className="text-sm">Your career transformation starts here</p>
          <h2 className="mt-2 font-bold uppercase">Step 1 of 2</h2>
        </div>

        {/* Personal Information Section */}
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-white mt-6 shadow rounded-md overflow-hidden">
          <div className="w-full md:w-1/4 bg-green-900 text-white p-6">
            <h3 className="font-semibold mb-2">Personal Information</h3>
            <p className="text-sm">This is information pertaining to you as an individual</p>
          </div>
          <div className="w-full md:w-3/4 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border rounded px-4 py-2" />
            <input type="text" placeholder="Last Name" className="border rounded px-4 py-2" />
            <input type="email" placeholder="Email Address" className="border rounded px-4 py-2" />
            <input type="password" placeholder="Create Password" className="border rounded px-4 py-2" />
            <div className="col-span-1 grid grid-cols-3 gap-2">
              <input type="text" placeholder="Day" className="border rounded px-2 py-2" />
              <input type="text" placeholder="Month" className="border rounded px-2 py-2" />
              <input type="text" placeholder="Year" className="border rounded px-2 py-2" />
            </div>
            <select className="border rounded px-4 py-2">
              <option>Select Gender *</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input type="text" value="Nigerian" className="border rounded px-4 py-2" readOnly />
            <input type="text" placeholder="Location (current) *" className="border rounded px-4 py-2" />
            <select className="border rounded px-4 py-2">
              <option>Nigeria (+234)</option>
            </select>
            <input type="text" placeholder="Mobile Number *" className="border rounded px-4 py-2" />
            <div className="col-span-2 flex justify-between items-center mt-4">
              <p>Already have an account? <a href="#" className="text-blue-500">Log in</a></p>
              <button className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-300">Next</button>
            </div>
          </div>
        </div>

        {/* Step 2 Header */}
        <div className="text-center py-6">
          <h2 className="bg-green-900 text-white text-center flex flex-col items-center justify-center p-5 text-lg font-medium mb-4">Step 2 of 2</h2>
        </div>

        {/* Work Information Section */}
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-white mb-10 shadow rounded-md overflow-hidden">
          <div className="w-full md:w-1/4 bg-green-900 text-white p-6">
            <h3 className="font-semibold mb-2">Work Information</h3>
            <p className="text-sm">This is information pertaining to your past work experience and your qualifications</p>
          </div>
          <div className="w-full md:w-3/4 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="border rounded px-4 py-2">
              <option>Highest Qualification</option>
            </select>
            <select className="border rounded px-4 py-2">
              <option>Years of Experience</option>
            </select>
            <select className="border rounded px-4 py-2">
              <option>Current Job Function</option>
            </select>
            <select className="border rounded px-4 py-2">
              <option>Desired Job Function</option>
            </select>
            <select className="border rounded px-4 py-2">
              <option>Availability</option>
            </select>
            <div className="col-span-2 mt-4 space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                I would like a free CV review
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                I agree to the <a href="#" className="text-blue-500">TERMS & CONDITIONS</a> and <a href="#" className="text-blue-500">PRIVACY POLICY</a>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                I would like to receive top jobs and career tips
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Sign me up for email and browser Job alerts.
              </label>
            </div>
            <div className="col-span-2 mt-4 text-right">
                <NavLink to={'/Signup'} className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-300 hover:text-black me-3">Go Back</NavLink>
              <button className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-300 hover:text-black">Create Your Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signupjobseeker;
