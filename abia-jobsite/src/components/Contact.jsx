import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import { Phone, MapPin, Clock, Mail, Send } from "lucide-react";
import Footer from './Footer';


function Contact() {
  return (
    <>
      <div>
        <Header />
        <div>
          <div className="bg-[#f3f8fd] py-16 px-4 md:px-20">
            {/* Section Header */}
            <h2 className="text-center text-3xl font-bold text-[#1a2942] mb-8">Get In Touch With Us Now!</h2>

            {/* Contact Info and Form Wrapper */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Contact Info Cards */}
              <div className="flex-1 bg-white p-6 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div className="flex flex-col items-center">
                  <Phone className="text-4xl text-green-800 mb-2" />
                  <h3 className="text-lg font-bold text-green-800">Phone Number</h3>
                  <p className="text-green-800">+234 810 0194 351</p>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center">
                  <Mail className="text-4xl text-[#016630] mb-2" />
                  <h3 className="text-lg font-bold text-[#1a2942]">Email</h3>
                  <p className="text-green-800">info@abiajobs.com</p>
                  <p className="text-green-800">contact@abiajobs.com</p>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center">
                  <MapPin className="text-4xl text-[#016630] mb-2" />
                  <h3 className="text-lg font-bold text-[#016630]">Location</h3>
                  <p className="text-green-800 text-center">518, Jaac Building, Abia state secretariat , off BCA road, Umuahia - 382350</p>
                </div>

                {/* Working Hours */}
                <div className="flex flex-col items-center">
                  <Clock className="text-4xl text-[#016630] mb-2" />
                  <h3 className="text-lg font-bold text-[#016630]">Working Hours</h3>
                  <p className="text-green-800">Monday to Saturday</p>
                  <p className="text-green-800">09:00 AM to 04:00 PM</p>
                  <p className="text-green-800">Support 24/7</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="flex-1 bg-green-800 p-6 rounded-lg shadow-md">
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name *" className="p-3 rounded bg-white outline-none" />
                  <input type="text" placeholder="Last Name" className="p-3 rounded bg-white outline-none" />
                  <input type="tel" placeholder="Mobile No *" className="p-3 rounded bg-white outline-none col-span-1 sm:col-span-2" />
                  <input type="email" placeholder="Email ID *" className="p-3 rounded bg-white outline-none col-span-1 sm:col-span-2" />
                  <textarea placeholder="Message" rows="4" className="p-3 rounded bg-white outline-none col-span-1 sm:col-span-2"></textarea>
                  <input type="text" placeholder="Please type the characters *" className="p-3 rounded bg-white outline-none col-span-1 sm:col-span-2" />
                  <button type="submit" className="bg-green-300 hover:bg-white hover:text-black cursor-pointer  p-3 rounded w-full flex items-center justify-center gap-2">
                    Submit <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
          <Footer />
      </div>
    </>
  )
}

export default Contact
