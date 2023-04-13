import React, { useState } from 'react';
import JobList from "./JobList";
import {BsPersonWorkspace} from "react-icons/bs";
import jobs from '../data/jobs';

const JobSearch = () => {

  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [salaryRange, setSalaryRange] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Filter the search results based on the search parameters
    const filteredJobs = jobs.filter((job) => {
      const { title, company, location, salary } = job;
      return (
        title.toLowerCase().includes(jobTitle.toLowerCase()) &&
        company.toLowerCase().includes(company.toLowerCase()) &&
        location.toLowerCase().includes(location.toLowerCase()) &&
        salary.toLowerCase().includes(salaryRange.toLowerCase())
      );
    });

    // Set the search results in state
    setSearchResults(filteredJobs);
  };

  return (
    <section className='flex justify-center mt-0 mb-4'>
      <div className="bg-white shadow-md  border-b container mx-auto p-4">
        <div className='flex gap-2 items-center mb-4'>
          <h3 className='text-xl font-medium p-2 mb-2'>Find a Job</h3>
          <BsPersonWorkspace className='w-10 h-10 text-blue-600'/>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <select 
                value={jobTitle}  
                onChange={(event) => setJobTitle(event.target.value)}
                className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="React Developer">React Developer</option>
                <option value="Front-End Engineer">Front-End Engineer</option>
                <option value="Back-End Developer">Back-End Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
              </select>
              <select 
                value={location}  
                onChange={(event) => setLocation(event.target.value)}
                className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="San Francisco, CA">San Francisco, CA</option>
                <option value="Menlo Park, CA">Menlo Park, CA</option>
                <option value="Seattle, WA">Seattle, WA</option>
                <option value="Los Gatos, CA">Los Gatos, CA</option>
                <option value="California - Sacramento">California - Sacramento</option>
              </select>
              <select 
                value={company}  
                onChange={(event) => setCompany(event.target.value)}
                className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="Abc Soft">Abc Soft</option>
                <option value="ZSB Info">ZSB Info</option>
                <option value="CZ2M Technology">CZ2M Technology</option>
                <option value="FDG Infra">FDG Infra</option>
                <option value="FlipSoft Tech">FlipSoft Tech</option>
              </select>
              <select 
                value={salaryRange}  
                onChange={(event) => setSalaryRange(event.target.value)}
                className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="120k-180k">120k-180k</option>
                <option value="100k-150k">100k-150k</option>
                <option value="110k-160k">110k-160k</option>
               <option value="130k-190k">130k-180k</option>
              </select>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <span>Search</span>
            </button>
          </div>
        </form>

        <JobList jobs={searchResults} />
      </div>
    </section>
  );
};
  

export default JobSearch;
