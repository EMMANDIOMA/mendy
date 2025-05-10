import React, { useState } from "react";
import { User, MessageCircle, Briefcase, FileText, Settings, ShieldCheck, HelpCircle, LogOut } from "lucide-react";

export default function JobSeekerDashboard() {
  const [cvFile, setCvFile] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [profileInfo, setProfileInfo] = useState({
    name: "John Doe",
    qualification: "B.Sc. Computer Science",
    skills: "React, Node.js, Figma, SQL",
    jobs: "Frontend Dev at XYZ Ltd (2022–2024)",
    address: "123 Allen Ave, Lagos (Private)",
    id: "Voter's Card",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className={`absolute z-20 top-60 left-0 h-full bg-green-800 text-white w-64 p-5 transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <button onClick={toggleSidebar} className="md:hidden mb-4 text-gray-300">
          Close
        </button>
        <div className="flex items-center mb-8">
          <User size={40} className="text-white mr-3" />
          <h2 className="text-2xl font-bold">My Dashboard</h2>
        </div>
        <ul className="space-y-4">
          <li><User size={20} className="inline mr-2" /> Profile</li>
          <li><FileText size={20} className="inline mr-2" /> Documents</li>
          <li><Briefcase size={20} className="inline mr-2" /> Applied Jobs</li>
          <li><MessageCircle size={20} className="inline mr-2" /> Messages</li>
          <li><ShieldCheck size={20} className="inline mr-2" /> Verification</li>
          <li><Settings size={20} className="inline mr-2" /> Settings</li>
          <li><HelpCircle size={20} className="inline mr-2" /> Support</li>
          <li><LogOut size={20} className="inline mr-2" /> Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow ml-0 md:ml-64 p-6 md:px-16 lg:px-24">
        <button onClick={toggleSidebar} className="md:hidden mb-4 bg-green-800 text-white py-2 px-4 rounded">
          Menu
        </button>

        {/* Profile Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto md:mx-0">
              <User size={40} className="text-gray-500" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">Profile Information</h2>
                <button onClick={handleToggleEdit} className="text-blue-600 text-sm hover:underline">
                  {isEditing ? "Save" : "Edit"}
                </button>
              </div>

              {isEditing ? (
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <input name="name" value={profileInfo.name} onChange={handleChange} className="border rounded-md px-3 py-2 w-full" />
                  <input name="qualification" value={profileInfo.qualification} onChange={handleChange} className="border rounded-md px-3 py-2 w-full" />
                  <input name="skills" value={profileInfo.skills} onChange={handleChange} className="border rounded-md px-3 py-2 w-full" />
                  <input name="jobs" value={profileInfo.jobs} onChange={handleChange} className="border rounded-md px-3 py-2 w-full" />
                  <input name="address" value={profileInfo.address} onChange={handleChange} className="border rounded-md px-3 py-2 w-full" />
                  <input name="id" value={profileInfo.id} onChange={handleChange} className="border rounded-md px-3 py-2 w-full" />
                </div>
              ) : (
                <ul className="text-sm space-y-1">
                  <li><strong>Name:</strong> {profileInfo.name}</li>
                  <li><strong>Qualification:</strong> {profileInfo.qualification}</li>
                  <li><strong>Skills:</strong> {profileInfo.skills}</li>
                  <li><strong>Past/Present Jobs:</strong> {profileInfo.jobs}</li>
                  <li><strong>Address:</strong> {profileInfo.address}</li>
                  <li><strong>Means of ID:</strong> {profileInfo.id}</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
