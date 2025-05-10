import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { name: "Product Designer", uv: 4, pv: 2 },
  { name: "Data Analyst", uv: 5, pv: 3 },
  { name: "Project Manager", uv: 7, pv: 4 },
  { name: "Sales Associate", uv: 8, pv: 5 },
];

export default function Employerdashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen font-sans bg-gray-100">
      {/* Sidebar */}
      <div className={`absolute z-20 top-60 left-0 h-full bg-green-800 text-white w-64 p-5 transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <button onClick={toggleSidebar} className="md:hidden mb-4 text-gray-300">Close</button>
        <h2 className="text-2xl font-bold mb-6">My Dashboard</h2>
        <ul className="space-y-4 text-sm">
          <li>📊 Dashboard</li>
          <li>➕ Post a Job</li>
          <li>🗂 Manage Jobs</li>
          <li>📨 Applications</li>
          <li>⭐ Shortlisted Cand.</li>
          <li>💬 Messages</li>
          <li>🏢 Company Profile</li>
          <li>💳 Billing</li>
          <li>❓ Support</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 p-6 md:px-16 lg:px-24">
        {/* Mobile Toggle */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Abia State Ministry of Works</h1>
          <button onClick={toggleSidebar} className="text-2xl">☰</button>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Abia State Ministry of Works</h1>
          <div className="flex items-center gap-4">
            <span>🔔</span>
            <img src="https://via.placeholder.com/32" className="rounded-full" alt="user" />
          </div>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-green-400 text-white p-4 rounded-xl">
            <p>Total Jobs Posted</p>
            <h2 className="text-2xl font-bold">12</h2>
          </div>
          <div className="bg-green-400 text-white p-4 rounded-xl">
            <p>Active Jobs</p>
            <h2 className="text-2xl font-bold">5</h2>
          </div>
          <div className="bg-red-400 text-white p-4 rounded-xl">
            <p>Expired Jobs</p>
            <h2 className="text-2xl font-bold">3</h2>
          </div>
          <div className="bg-green-400 text-white p-4 rounded-xl">
            <p>Total Applicants</p>
            <h2 className="text-2xl font-bold">274</h2>
          </div>
        </div>

        {/* Graph + Activity */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2 bg-white p-4 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Job Performance</h3>
              <span className="text-sm bg-purple-100 text-purple-600 px-2 py-1 rounded">Application 8.8%</span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#6366f1" strokeWidth={2} />
                <Line type="monotone" dataKey="pv" stroke="#f472b6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-xl">
            <h3 className="font-semibold mb-2">Recent Activity</h3>
            <ul className="space-y-2 text-sm">
              <li>👩 Julia Smith applied for Marketing Manager <span className="text-gray-400">5 min</span></li>
              <li>💻 Front-End Developer <span className="text-gray-400">Expired 1 hr</span></li>
              <li>📨 Message from Michael Brown <span className="text-gray-400">3 hr</span></li>
              <li>🧾 Account Manager Posted <span className="text-gray-400">1 day</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
