import React from "react";
import { Link } from "react-router-dom";
import {BsArrowRightCircle} from "react-icons/bs";

const JobList = ({ jobs }) => {
  return (
    <div className="mt-4">
      {jobs.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {jobs.map((job) => (
            <li
              key={job.id}
              className="p-4 border border-gray-300 rounded-lg shadow-sm"
            >
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="text-gray-500 mt-2">
                    {job.company} | {job.location}
                </p>
                <div className="flex justify-between">
                    <p className="text-gray-600 mt-2">{job.salary}</p>
                    <Link to={`job/${job.id}`}>
                        <BsArrowRightCircle className='w-6 h-6 text-blue-600'/>
                    </Link>
                </div>
            </li>
            ))}
        </ul>
        ) : (
        <p>No jobs found</p>
      )}
    </div>
  );
};

export default JobList;
