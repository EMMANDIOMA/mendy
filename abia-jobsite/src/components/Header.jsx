import React from 'react'
import { FaList } from "react-icons/fa";
import { NavLink } from 'react-router-dom';




function Header() {
    return (
        <>
            <header>
                <div className="flex items-center justify-between mx-5 mt-5">
                    <div className="flex items-center gap-7">
                        <img className="w-[100px] md:w-[140px]" src="../abia-jobs-logo.png" alt="" />
                        <p className="hidden md:block font-bold">
                            BE VISIBLE- <span className="text-green-800">CONNECT</span>-WORK BETTER
                        </p>
                    </div>

                    <div className="ms-10 flex gap-8">
                        <input
                            className="hidden md:block w-40 h-[30px] border border-red-500 px-2"
                            type="text"
                            placeholder="Search"
                        />
                        <div className="flex gap-5 items-center justify-center">
                           <NavLink to={'/Login'}>
                           <button className="w-[80px] h-[30px] bg-red-500 text-white hover:bg-green-800">
                                Log-in
                            </button>
                           </NavLink>
                           <NavLink to={'/Signup'}>
                           <button className="w-[80px] h-[30px] bg-red-500 text-white hover:bg-green-800">
                                Sign-up
                            </button>
                           </NavLink>
                           <NavLink to={'/Helpcenter'}>
                           <a className="text-[10px] md:text-[15px]" href="xxx">
                                Help Center
                            </a>
                           </NavLink>
                        </div>
                    </div>

                    <div className="flex md:hidden cursor-pointer">
                        <FaList color="black" size="2em" />
                    </div>
                </div>

                <div className="hidden md:flex bg-green-800 text-white justify-between items-center py-1 px-5">
                    <NavLink className="hover:text-yellow-500 hover:underline" to={'/'}>Home</NavLink>
                    <NavLink className="hover:text-yellow-500 hover:underline" to={'/Joblisting'}>Job Listing</NavLink>
                    <NavLink className="hover:text-yellow-500 hover:underline" to={'/Talent'}>Talent Directory</NavLink>
                    <NavLink className="hover:text-yellow-500 hover:underline" to={'/Dashboard'}>Dashboard</NavLink>
                    {/* <NavLink className="hover:text-yellow-500 hover:underline" to={'/Empowerment'}>Empowerment</NavLink> */}
                    <NavLink className="hover:text-yellow-500 hover:underline" to={'/Blogs'}>Blogs/Resources</NavLink>
                    <NavLink className="hover:text-yellow-500 hover:underline" to={'/About'}>About us</NavLink>
                    <NavLink className="hover:text-yellow-500 hover:underline" to={'/Contact'}>Contact us</NavLink>
                    <NavLink className="hover:text-yellow-500 hover:underline" to={'/Admin'}>Admin</NavLink>
                
                </div>
            </header>
        </>
    )
}

export default Header
