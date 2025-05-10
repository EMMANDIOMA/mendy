import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { PiHandshakeFill } from "react-icons/pi";
import { GiLaptop } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";




function About() {
  return (
    <>
      <div>
        <Header />
        <div>
          <div>
            <main>
              <div className="flex  items-center gap-[5px] px-10">
                <div className="flex flex-col gap-[20px] ml-6 w-[60%]">
                  <h1 className="text-green-800 font-bold text-[30px]">About ABIA JOBS</h1>
                  <p className="font-serif text-[16px]">Abia jobs has been the #1 job site for finding the best remote,work-from-home,on site jobs and flexible jobs.With exclusive experience,we specialize in helping job seekers navigate the  remote job market with confidence.</p>
                  <p className="font-serif text-[16px]">Our Expert team hands-screens every job listing  to ensure legitmacy,saving you time and  protecting you from scams.whether you're  looking for full time,part time,freelance or flexible schedule opportunities,Abia jobs makes  the jb search faster,easier and safer so you can focus on landing the right role.</p>
                </div>
                <div className="w-[40%]">
                  <img className="w-[300px] h-[300px] rounded-full mt-6" src="jan-baborak-O4nTgxWr5Sc-unsplash.jpg" alt="" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <p className=" w-[25%] text-[white] bg-green-800 font-bold py-2 text-center rounded-md">Find Your Next Remote Job!</p>
                <div className="grid grid-cols-3 h-[30vh] gap-[20px] px-[70px] mt-4">
                  <div className=" flex gap-[10px] items-center justify-around rounded-lg bg-gray-100 px-3">
                    <div className="font-serif pl-4 ">
                      <p>10,000,000+</p>
                      <p>Job seekers served</p>
                    </div>
                    <GiLaptop size='7em' color='#016630' />
                  </div>
                  <div className=" rounded-lg bg-gray-100 flex justify-around items-center px-3">
                    <div className="font-serif pl-4">
                      <p>152,435</p>
                      <p>Verified Remote,on site <br/> jobs and flexible jobs</p>
                    </div>
                    <PiHandshakeFill size='7em' color='#016630'/>
                  </div>

                  <div className="rounded-lg bg-gray-100 flex justify-around items-center px-3">
                    <div className="font-serif">
                      <p>9,656</p>
                      <p>Companies currently hiring</p>
                    </div>
                    <FaWarehouse size='7em' color='#016630'/>
                  </div>
                </div>
              </div>

              <div>
                <div className="w-[100%] h-[90vh] bg-gray-100 mt-6">
                  <h1 className="font-bold text-4xl text-center py-5">How Abia jobs Works</h1>
                  <div className="grid grid-cols-3 gap-[20px] justify-self-center mt-4  h-[70vh] w-[70vw]">
                    <div className=" bg-[white] flex flex-col gap-[20px] justify-center px-4 pt-10">
                      <h1 className="font-bold text-2xl">Explore Verified Job listings</h1>
                      <p>All of abia jobs,remote jobs,on-site jobs and flexible opportunities are thoroughly screened to ensure they are legitimate.when you log in,you'll only find high quality oppourtunities-no scams,junk,listings,or commission-only roles</p>
                    </div>
                    <div className=" bg-[white] flex flex-col gap-[20px] justify-center px-4">

                      <h1 className="font-bold text-2xl">Search Smarter,Apply Faster</h1>
                      <p>Use advanced search filters to find roles that martch your skills,schedule,and preferences.Save searches,track applications,and to follow companies to stay updates on new openings</p>
                    </div>
                    <div className=" bg-[white] flex flex-col gap-[20px] justify-center px-4">
                      <h1 className="font-bold text-2xl">Access Center support & Resources</h1>
                      <p>Get experts guidance with webinars,downloadable guides,job search articles,and more,all degned to help you land the right job faster.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-green-800 h-[70vh] mt-8 ">
                  <div className="flex flex-col items-center py-2">
                    <h1 className="font-bold text-[white] text-4xl">Benefits Of using Abia jobs</h1>
                    <button className="text-[white] w-[200px]  h-[7vh] bg-[red] text-2xl text-center my-3">Get Started</button>
                  </div>
                  <div className="grid grid-cols-2 gap-[20px] px-10 mt-2 h-[50vh]">
                    <div className=" rounded-lg bg-[white] px-4 py-2 flex flex-col justify-center gap-[10px]">
                      <h1 className="font-bold text-2xl">High-quality Remote and flexible jobs</h1>
                      <p>we help people find professional,remote and flexible jobs in 50+ carrer fields,from entry level to eexutive,part time to full time,in Nigeria and around the world</p>
                    </div>
                    <div className="rounded-lg bg-[white] px-4 flex flex-col justify-center gap-[10px]">
                      <h1 className="font-bold text-2xl">Every Job and Company Researched For You</h1>
                      <p>Our expert team finds and screens the best remote and flexible jobs and providesinformation on eah company to help you decide if you wan to apply</p>
                    </div>
                    <div className=" rounded-lg bg-[white] px-4 flex flex-col justify-center gap-[10px]">
                      <h1 className="font-bold text-2xl">High Quality Support and resources</h1>
                      <p>When it comes to Abia jobs remote work we offer great rrsources to provide support,guidance and tools so you can land the remote or flexible job you want,and that includes client support you can talk to</p>
                    </div>
                    <div className="rounded-lg bg-[white] px-4 flex flex-col gap-[10px] justify-center">
                      <h1 className="font-bold text-2xl">No-Risk Satisfaction Guarantee</h1>
                      <p>We want our users to be happy with our services.if for any reason you're not.simply let us know you will like a refund withnin 14 days.you'll get it.it's that easy</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mt-5">
                  <h1 className="font-bold text-2xl text-center">Abia Jobs Reviews & Success Stories </h1>
                  <div className="grid grid-cols-2 h-[40vh] gap-[20px] px-16 mt-4">
                    <section className=" border-t-4 border-t-green-800 rounded-lg bg-gray-100"></section>
                    <section className="border-t-4 border-t-green-800 rounded-lg bg-gray-100"></section>
                  </div>
                </div>
              </div>
            </main>






            {/* <!-- THIS IS ANOTHER PAGE --> */}
            {/* <div>
              <h1>What kind of remote work are you looking for? </h1>
              <div className="grid grid-cols-3 gap-[20px] h-[30vh] px-10">
                <div className="border border-white flex justify-center items-center">
                  <img className="h-[100px] w-[100px] rounded-full" src="jan-baborak-O4nTgxWr5Sc-unsplash.jpg" alt="" />
                </div>
                <div className="border flex justify-center items-center">
                  <img className="h-[100px] w-[100px] rounded-full" src="jan-baborak-O4nTgxWr5Sc-unsplash.jpg" alt="" />
                </div>
                <div className="border flex justify-center items-center   shadow-black">
                  <img className="h-[100px] w-[100px] rounded-full" src="jan-baborak-O4nTgxWr5Sc-unsplash.jpg" alt="" />
                </div>
              </div>
            </div> */}
          </div>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default About
