import React from 'react';
import { VscAccount, VscGitStashApply } from 'react-icons/vsc';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Footer from './Footer';
import Header from './Header';



function Indexpage() {
    
    const slides = [
        '../employment-pic1.webp',
        '../employment_pic2.jpg',
        '../employment_pic.jpg'
    ];

    return (
        <>
            <div>
                <Header />

                <div
                    className="relative bg-cover bg-center min-h-[400px] flex flex-col items-center justify-center p-6"
                    style={{ backgroundImage: "url('../employment-pic.webp')" }}>

                    <div className="absolute inset-0 bg-green-300/70 backdrop-blur-none"></div>
                    <div className="relative  flex flex-col items-center gap-8 ">
                        <h1 className="text-4xl md:text-5xl font-bold text-green-800 drop-shadow-md text-center">
                            Empowering Abians, One Job <br className='hidden md:block' /> at a Time
                        </h1>
                        <p className="flex text-white text-center font-bold text-[20px] md:text-3xl">Your gateway to verified jobs, skill empowerment, and career opportunities <br className="hidden md:block" /> across Abia State.</p>

                        <div className="flex justify-between items-center md:text-2xl bg-gray-100 rounded-t-lg      shadow-md       ps-6 w-[80%] h-8 md:h-12">
                            <input className='w-[90%] border-none focus:outline-none' type="text"
                                placeholder='Search'
                            />
                            <button className="bg-red-300 items-end w-15 md:w-30 flex justify-center cursor-pointer"> <CiSearch size='2em' /></button>
                        </div>

                    </div>
                </div>

                <div className="category my-10">
                    <p className="p-5 font-semibold text-3xl text-center">Browse Talent By Category</p>
                    <div className="flex justify-center">
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8">
                            {[
                                "TECHNOLOGY/IT",
                                "DESIGNS/CREATIVES",
                                "SALES/MARKETING",
                                "ACCOUNTING",
                                "GOVT./AGENCIES",
                                "NGO's",
                                "UNSKILLED LABOUR",
                                "CONSTRUCTION"
                            ].map((category, index) => (
                                <div
                                    key={index}
                                    className="bg-green-300 p-3 rounded-2xl shadow-md text-center hover:bg-green-800 hover:text-white"
                                >
                                    <p className="text-lg font-medium mb-1">{category}</p>
                                    <a href="#" className="text-blue-500 text-sm font-semibold hover:underline">
                                        Check Listing
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-green-800 w-full h-fit mt-10 text-center grid justify-center md:flex items-center md:justify-center gap-20">
                        <div>
                            <p className="text-3xl font-semibold text-white">Looking for a Talent!</p>
                            <p className="text-white mt-2 mb-5">
                                Find the talent needed to
                                <br />
                                get your business growing.
                            </p>
                            <NavLink to={'/Talent'} className="bg-red-500 px-4 mt-5 py-2 text-white hover:bg-white hover:text-red-500 rounded-md">
                                View All Talent
                            </NavLink>
                        </div>
                        <div>
                            <img className="h-70" src="../job_search_png.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="px-5 md:px-40 my-10">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-3xl">Explore Popular Jobs</p>
                            <p className="text-[15px] md:text-[20px]">
                                Catch up with the individuals and companies hiring now!
                            </p>
                        </div>
                        <NavLink to={'/Joblisting'} className="bg-green-800 text-sm md:text-lg px-4 py-2 text-white hover:bg-red-500 rounded-md">
                            View all Jobs
                        </NavLink>
                    </div>

                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="relative bg-green-300 rounded-lg hover:bg-green-800 hover:text-white shadow-md p-4"
                            >
                                <div className="absolute top-3 right-3">
                                    <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                                        Urgent
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3 mb-3">
                                    <img
                                        className="w-10 h-10 rounded-full object-cover"
                                        src="https://via.placeholder.com/150"
                                        alt="Employer Logo"
                                    />
                                    <div>
                                        <h2 className="text-sm font-semibold text-gray-800">Tech Solutions Inc.</h2>
                                        <p className="text-gray-400 text-xs">Posted 2d ago</p>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <h3 className="text-lg font-bold text-blue-700 mb-1">Frontend Dev</h3>
                                    <div className="text-gray-600 text-xs space-y-1">
                                        <p>
                                            <strong>Salary:</strong> $60k - $80k
                                        </p>
                                        <p>
                                            <strong>Type:</strong> Remote
                                        </p>
                                        <p>
                                            <strong>Location:</strong> Lagos, NG
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <a
                                        href="/job-details-page"
                                        className="text-xs font-medium bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition"
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-10 items-center justify-center text-center">
                    <p className="text-2xl font-semibold px-5">
                        Find Your Next Job / Talent in 3 Easy Steps!
                    </p>

                    <div className="flex flex-col md:flex-row gap-2 md:gap-20 items-center justify-center">
                        {/* Step 1 */}
                        <div className="py-5 flex flex-col items-center text-green-800">
                            <VscAccount size="5em" />
                            <p className="mt-2">Step 1:</p>
                            <p className="font-semibold">Register an Account</p>
                        </div>

                        {/* Step 2 */}
                        <div className="py-5 flex flex-col items-center text-green-800">
                            <MdOutlineScreenSearchDesktop size="5em" />
                            <p className="mt-2">Step 2:</p>
                            <p className="font-semibold">Find a Job / Talent</p>
                        </div>

                        {/* Step 3 */}
                        <div className="py-5 flex flex-col items-center text-green-800">
                            <VscGitStashApply size="5em" />
                            <p className="mt-2">Step 3:</p>
                            <p className="font-semibold">Apply / Connect</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center px-5 mb-5">
                    <div className="w-120 h-50 border-2 border-green-800 mt-15 flex items-center justify-center">
                        <div className="flex flex-col gap-6 items-center justify-center py-5">
                            <p>Get Exclusive Update</p>

                            <input className="border border-green-800 px-2 w-100" type="text"
                                placeholder='enter your email address'
                            />

                            <button className="rounded-2xl text-white bg-green-800 w-fit h-fit px-3">Subscribe</button>
                        </div>
                    </div>
                </div>

                        

            </div>
            <Footer />

            
        </>
    )

    
}

export default Indexpage
