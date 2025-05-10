import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

// Sample talent data
const talents = [
    { id: 1, name: 'Chidera Oforjuo', role: 'Frontend Developer', location: 'Umuahia', industry: 'Tech', experience: 'Mid', available: true },
    { id: 2, name: 'Chukwu Uche', role: 'Graphic Designer', location: 'Aba', industry: 'Creative', experience: 'Senior', available: false },
    { id: 3, name: 'Ngozi Nwankwo', role: 'Teacher', location: 'Umuahia', industry: 'Education', experience: 'Entry', available: true },
    { id: 4, name: 'Emeka Obi', role: 'Digital Marketer', location: 'Aba', industry: 'Marketing', experience: 'Mid', available: true },
    { id: 5, name: 'Amarachi Eze', role: 'Content Writer', location: 'Umuahia', industry: 'Media', experience: 'Senior', available: false },
    { id: 6, name: 'Ikechukwu Okoro', role: 'Backend Developer', location: 'Aba', industry: 'Tech', experience: 'Senior', available: true },
    { id: 7, name: 'Adaobi Okafor', role: 'Project Manager', location: 'Umuahia', industry: 'Business', experience: 'Mid', available: false },
    { id: 1, name: 'Chidera Oforjuo', role: 'Frontend Developer', location: 'Umuahia', industry: 'Tech', experience: 'Mid', available: true },
    { id: 2, name: 'Chukwu Uche', role: 'Graphic Designer', location: 'Aba', industry: 'Creative', experience: 'Senior', available: false },
    { id: 3, name: 'Ngozi Nwankwo', role: 'Teacher', location: 'Umuahia', industry: 'Education', experience: 'Entry', available: true },
    { id: 4, name: 'Emeka Obi', role: 'Digital Marketer', location: 'Aba', industry: 'Marketing', experience: 'Mid', available: true },
    { id: 5, name: 'Amarachi Eze', role: 'Content Writer', location: 'Umuahia', industry: 'Media', experience: 'Senior', available: false },
    { id: 6, name: 'Ikechukwu Okoro', role: 'Backend Developer', location: 'Aba', industry: 'Tech', experience: 'Senior', available: true },
    { id: 7, name: 'Adaobi Okafor', role: 'Project Manager', location: 'Umuahia', industry: 'Business', experience: 'Mid', available: false },
];


const TalentCard = ({ talent }) => (
    <div className="bg-green-100 p-6 rounded-xl shadow-md relative hover:shadow-lg transition duration-300">
        <div className="flex items-center gap-2 mb-4">
            <img src="/profile.png" alt="Profile" className="w-10 h-10 rounded-full" />
            <h3 className="text-gray-700 font-semibold text-lg">{talent.name}</h3>
            {talent.available && (
                <span className="bg-green-300 text-green-700 text-xs font-semibold py-1 px-2 rounded-full absolute top-4 right-4">Available Now</span>
            )}
        </div>
        <p className="text-blue-800 font-bold text-xl mb-2">{talent.role}</p>
        <p className="text-gray-600 text-sm mb-1">Location: {talent.location}</p>
        <p className="text-gray-600 text-sm mb-1">Industry: {talent.industry}</p>
        <p className="text-gray-600 text-sm mb-1">Experience: {talent.experience}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3">Contact</button>
    </div>
);

function TalentDirectory() {
    const [nameFilter, setNameFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [industryFilter, setIndustryFilter] = useState("");
    const [experienceFilter, setExperienceFilter] = useState("");

    const filteredTalents = talents.filter(talent => {
        const matchesName = nameFilter === "" || talent.name.toLowerCase().includes(nameFilter.toLowerCase()) || talent.role.toLowerCase().includes(nameFilter.toLowerCase());
        const matchesLocation = locationFilter === "" || talent.location === locationFilter;
        const matchesIndustry = industryFilter === "" || talent.industry === industryFilter;
        const matchesExperience = experienceFilter === "" || talent.experience === experienceFilter;
        return matchesName && matchesLocation && matchesIndustry && matchesExperience;
    });

    return (
        <>
            <div>
                <Header />
                <section className="text-center py-8 px-4 bg-green-300">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2">Discover Verified Talents Across Abia State</h2>
                    <p className="text-gray-600 mb-6">Search by skill, location, or experience level.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <input
                            type="text"
                            placeholder="Search talent by name or skill"
                            className="w-full md:w-1/3 p-2 border rounded-md"
                            value={nameFilter}
                            onChange={(e) => setNameFilter(e.target.value)}
                        />
                        <select className="p-2 border rounded-md" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
                            <option value="">Location</option>
                            <option value="Umuahia">Umuahia</option>
                            <option value="Aba">Aba</option>
                        </select>
                        <select className="p-2 border rounded-md" value={industryFilter} onChange={(e) => setIndustryFilter(e.target.value)}>
                            <option value="">Industry</option>
                            <option value="Tech">Tech</option>
                            <option value="Creative">Creative</option>
                            <option value="Education">Education</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Media">Media</option>
                            <option value="Business">Business</option>
                        </select>
                        <select className="p-2 border rounded-md" value={experienceFilter} onChange={(e) => setExperienceFilter(e.target.value)}>
                            <option value="">Experience</option>
                            <option value="Entry">Entry</option>
                            <option value="Mid">Mid</option>
                            <option value="Senior">Senior</option>
                        </select>

                        <button className="bg-red-500 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-md mt-4">
                            Search Job
                        </button>
                    </div>
                </section>

                <div className="container mx-auto p-6 gap-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                        {filteredTalents.map(talent => (
                            <TalentCard key={talent.id} talent={talent} />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default TalentDirectory;
