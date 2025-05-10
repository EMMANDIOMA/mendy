import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const jobCategories = [
  "All",
  "Information Technology (IT)",
  "Healthcare",
  "Construction",
  "Education",
  "Finance & Accounting",
  "Engineering",
  "Sales & Marketing",
  "Transportation & Logistics",
  "Customer Service",
  "Agriculture",
  "Creative & Design",
  "Manufacturing",
  "Administrative & Office",
  "Legal",
  "Hospitality & Tourism",
  "Science & Research",
  "Skilled Trades",
  "Media & Communication",
  "Real Estate",
  "Non-Profit & NGO",
];

const jobs = [
  { id: 1, title: "Frontend Dev", company: "Tech Solutions", location: "Lagos, NG", salary: "$60k - $80k", type: "Remote", category: "Information Technology (IT)", posted: "2d ago", urgent: true },
  { id: 2, title: "Backend Dev", company: "DevCorp", location: "Lagos, NG", salary: "$70k - $90k", type: "Remote", category: "Information Technology (IT)", posted: "1d ago", urgent: false },
  { id: 3, title: "Nurse", company: "HealthFirst", location: "Abuja, NG", salary: "$50k - $70k", type: "On-site", category: "Healthcare", posted: "5d ago", urgent: false },
  { id: 4, title: "Medical Lab Scientist", company: "LabCorp", location: "Port Harcourt, NG", salary: "$70k - $90k", type: "Hybrid", category: "Healthcare", posted: "3d ago", urgent: true },
  { id: 5, title: "Marketing Manager", company: "BrandX", location: "Port Harcourt, NG", salary: "$45k - $65k", type: "Hybrid", category: "Sales & Marketing", posted: "1w ago", urgent: false },
  { id: 6, title: "Sales Executive", company: "RetailCorp", location: "Abuja, NG", salary: "$30k - $50k", type: "On-site", category: "Sales & Marketing", posted: "1w ago", urgent: false },
  { id: 7, title: "Graphic Designer", company: "Creative Studio", location: "Lagos, NG", salary: "$30k - $50k", type: "Remote", category: "Creative & Design", posted: "4d ago", urgent: false },
  { id: 8, title: "Art Director", company: "Design Hub", location: "Port Harcourt, NG", salary: "$60k - $80k", type: "On-site", category: "Creative & Design", posted: "2d ago", urgent: true },
  { id: 9, title: "Construction Project Manager", company: "BuildCorp", location: "Lagos, NG", salary: "$80k - $100k", type: "On-site", category: "Construction", posted: "5d ago", urgent: false },
  { id: 10, title: "Site Engineer", company: "Constructix", location: "Abuja, NG", salary: "$70k - $90k", type: "On-site", category: "Construction", posted: "3d ago", urgent: false }
];

const JobCard = ({ job }) => (
  <div className="bg-green-200 p-6 rounded-xl shadow-md w-full relative hover:shadow-lg transition duration-300">
    <div className="flex items-center gap-2 mb-4">
      <img src="/logo.png" alt="Company Logo" className="w-8 h-8 rounded-full" />
      <h3 className="text-gray-700 font-semibold text-lg">{job.company}</h3>
      {job.urgent && (
        <span className="bg-red-200 text-red-700 text-xs font-semibold py-1 px-2 rounded-full absolute top-4 right-4">Urgent</span>
      )}
    </div>
    <p className="text-blue-800 font-bold text-xl mb-2">{job.title}</p>
    <p className="text-gray-600 text-sm mb-1">Salary: {job.salary}</p>
    <p className="text-gray-600 text-sm mb-1">Type: {job.type}</p>
    <p className="text-gray-600 text-sm mb-1">Location: {job.location}</p>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3">Apply Now</button>
  </div>
);

const JobListingGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredJobs = selectedCategory === "All" ? jobs : jobs.filter(job => job.category === selectedCategory);

  return (
    <div className="container mx-auto p-6 gap-8">
      <FilterCardGroup onSelectCategory={setSelectedCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 ">
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

const FilterCardGroup = ({ onSelectCategory }) => {
  const [selected, setSelected] = useState("");

  const handleClick = (category) => {
    const newCategory = selected === category ? "" : category;
    setSelected(newCategory);
    onSelectCategory(newCategory);
  };

  return (
    <div className="text-center py-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Explore Jobs by Category</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {jobCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleClick(category)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition duration-200 ${selected === category ? "bg-green-100 text-green-800 border-green-500" : "bg-white text-green-700 border-gray-300 hover:bg-green-50"}`}
          >
            <FaSearch size={14} />
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobListingGrid;