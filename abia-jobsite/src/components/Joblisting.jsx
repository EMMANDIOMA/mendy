import React from 'react'
import Header from './Header'
import Footer from './Footer'
import JobListingGrid from './Joblistingrid'




function Joblisting() {

    // const [selectedCategory, setSelectedCategory] = useState("");

    // const filteredJobs = selectedCategory
    //     ? jobs.filter((job) => job.category === selectedCategory)
    //     : jobs;

    return (
        <>
            <Header />
            <div>
                <div className="relative bg-cover bg-center min-h-[400px] flex flex-col items-center justify-center p-6"
                    style={{ backgroundImage: "url('../employment-pic.webp')" }}>

                    <div className="absolute inset-0 bg-green-300/70 backdrop-blur-none"></div>
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-green-800 drop-shadow-md text-center">
                            Find your dream job!
                        </h1>

                        {/* Search Form */}
                        <div className="flex flex-wrap gap-4 justify-center text-white">
                            <input
                                type="text"
                                placeholder="Enter Keyword"
                                className="border-2 border-white text-white rounded-md px-4 py-2 w-64 focus:outline-none focus:border-green-600"
                            />

                            <select className="border-2 border-white text-black rounded-md px-4 py-2 w-64 focus:outline-none focus:border-green-600">
                                <option>Choose City</option>
                                <option>All</option>
                                <option>Aba</option>
                                <option>Umuahia</option>
                            </select>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <select className="border-2 border-white text-black rounded-md px-4 py-2 w-48 focus:outline-none focus:border-green-600">
                                <option>Work Type</option>
                                <option>Full-time</option>
                                <option>Part-time</option>
                                <option>Contract/Temp</option>
                                <option>Casual/Vacation</option>
                            </select>
                            <select className="border-2 border-white text-black rounded-md px-4 py-2 w-48 focus:outline-none focus:border-green-600">
                                <option>Remote Options</option>
                                <option>On-site</option>
                                <option>Hybrid</option>
                                <option>Remote</option>
                            </select>
                            <select className="border-2 border-white text-black rounded-md px-4 py-2 w-48 focus:outline-none focus:border-green-600">
                                <option>Salary Range</option>
                                <option>Less than 50k</option>
                                <option>50k - 200k</option>
                                <option>200k - 500k</option>
                                <option>500k - 1m</option>
                                <option>1m and above</option>
                            </select>
                            <select className="border-2 border-white text-black rounded-md px-4 py-2 w-48 focus:outline-none focus:border-green-600">
                                <option>Listing Date</option>
                                <option>All</option>
                                <option>Today</option>
                                <option>Last 3 days</option>
                                <option>Last 7 days</option>
                                <option>Last 14 days</option>
                                <option>Last 30 days</option>
                            </select>
                        </div>

                        <button className="bg-red-500 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-md mt-4">
                            Search Job
                        </button>
                    </div>
                </div>

                <JobListingGrid />

            </div>
            <Footer />
        </>
    )
}

export default Joblisting
