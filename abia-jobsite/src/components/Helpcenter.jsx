import React from 'react'
import Header from './Header';
import { CiSearch } from "react-icons/ci";
import { VscAccount, VscWorkspaceTrusted } from "react-icons/vsc";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { LuScrollText } from "react-icons/lu";
import { FaRegNoteSticky } from "react-icons/fa6";
import Footer from './Footer';



function Helpcenter() {
    return (
        <>
            <Header />
            <div className="flex items-center justify-center mt-10">
                <div className="w-[80%] h-fit py-10 flex flex-col items-center bg-green-800 rounded-2xl ">
                    <p className="text-white text-[15px] md:text-[20px]">Abia jobs help center</p>
                    <p className="text-2xl md:text-3xl my-5 font-semibold text-white">HOW CAN WE HELP YOU TODAY?</p>

                    <div className="flex justify-between items-center md:text-2xl bg-gray-100 rounded-t-lg      shadow-md       ps-6 w-[80%] h-8 md:h-12">
                        <input className='w-[90%] border-none focus:outline-none' type="text"
                            placeholder='Search'
                        />
                        <button className="bg-red-300 items-end w-15 md:w-30 flex justify-center cursor-pointer"> <CiSearch size='2em' /></button>
                    </div>

                    <div className="flex text-white gap-4 md:gap-7 mt-7 font-semibold">
                        <p>Popular searches:</p>
                        <div className="flex gap-2">
                            <button className="bg-red-500 px-1 md:px5 py-1 text-white cursor-pointer rounded-sm">Get Paid</button>
                            <button className="bg-red-500 px-1 md:px5 py-1 text-white cursor-pointer rounded-sm">Account</button>
                            <button className="bg-red-500 px-1 md:px5 py-1 text-white cursor-pointer rounded-sm">Refund</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center">
                <p className="my-3 text-2xl font-semibold py-5">Search By Category</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-10 gap-15">
                    <div className="card w-50 h-40 border border-black rounded-2xl p-5 gap-5">
                        <div className="flex justify-end">
                            <VscAccount size='3em' />
                        </div>
                        <p className="flex justify-center text-[22px] mt-3 font-semibold">Account</p>
                    </div>


                    <div className="card w-50 h-40 border border-black rounded-2xl p-5">
                        <div className="flex justify-end">
                            <VscWorkspaceTrusted size='3em' />
                        </div>
                        <p className="flex justify-center mt-3 text-[22px] font-semibold">Trust & Safety</p>
                    </div>

                    <div className="card w-50 h-40 border border-black rounded-2xl p-5">
                        <div className="flex justify-end">
                            <RiUserCommunityFill size='3em' />
                        </div>
                        <p className="flex justify-center text-[22px] mt-3 font-semibold">Community Hub</p>
                    </div>

                    <div className="card w-50 h-40 border border-black rounded-2xl p-5">
                        <div className="flex justify-end">
                            <IoWalletOutline size='3em' />
                        </div>
                        <p className="flex justify-center text-[22px] mt-3 font-semibold">Payment</p>
                    </div>

                    <div className="card w-50 h-40 border border-black rounded-2xl p-5">
                        <div className="flex justify-end">
                            <LuScrollText size='3em' />
                        </div>
                        <p className="flex justify-center text-[22px] mt-3 font-semibold">Regulations & Guildlines</p>
                    </div>

                    <div className="card w-50 h-40 border border-black rounded-2xl p-5">
                        <div className="flex justify-end">
                            <FaRegNoteSticky size='3em' />
                        </div>
                        <p className="flex justify-center text-[22px] mt-3 font-semibold">Gigs & Jobs</p>
                    </div>

                </div>
            </div>
            <div className='my-7 ps-10 md:ps-25'>
                <p className="text-[30px]">If you are looking for something else!</p>
                <p className="text-[22px]">Please let us know!</p>
                <button className='bg-red-500 py-1 px-1 rounded-2xl w-35 text-white hover:bg-green-800 cursor-pointer'>Contact Us</button>
            </div>

            <Footer />
        </>
    );
};

export default Helpcenter
