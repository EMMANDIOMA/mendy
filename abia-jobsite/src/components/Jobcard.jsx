import React from "react";
import { FiMapPin } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { SlCalendar } from "react-icons/sl";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";





const JobCard = ({ job }) => {
  return (
    <Card className="w-full p-5 rounded-2xl shadow-md bg-white transition hover:shadow-lg space-y-4">
      {/* Header Section */}
      <div className="flex items-center gap-4">
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="w-14 h-14 object-cover rounded-full border"
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{job.company}</h3>
          <div className="flex items-center text-sm text-gray-500 gap-1">
            <FiMapPin className="w-4 h-4" />
            {job.location}
          </div>
        </div>
      </div>

      {/* Job Info */}
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-green-700">{job.title}</h2>
        <div className="flex flex-wrap items-center text-sm text-gray-600 gap-3">
          <span className="flex items-center gap-1">
            <CiWallet className="w-4 h-4" />
            {job.salary}
          </span>
          <span className="flex items-center gap-1">
            <FaBriefcase className="w-4 h-4" />
            {job.type}
          </span>
          <span className="flex items-center gap-1">
            <SlCalendar  className="w-4 h-4" />
            Posted: {job.posted}
          </span>
        </div>
        <p className="text-sm text-gray-700 pt-1">{job.description}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-2">
        <Badge variant="outline" className="text-sm text-green-800 border-green-300">
          {job.category}
        </Badge>
        <Button size="sm" className="bg-green-600 text-white hover:bg-green-700">
          Apply Now
        </Button>
      </div>
    </Card>
  );
};

export default JobCard;
