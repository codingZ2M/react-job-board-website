import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import jobs from '../data/jobs';
import {BsBriefcase} from "react-icons/bs";
import {FaRegBuilding} from "react-icons/fa";
import {GoLocation} from "react-icons/go";
import {BsBoxArrowInUpRight} from "react-icons/bs";
import {FaListUl} from "react-icons/fa";

const JobDetails = () => {

  const {id} = useParams();
  const [job, setJob] = useState({});

  useEffect( () => {
      const existingJob = jobs.find((job)=> job.id === parseInt(id))
      setJob(existingJob);
      console.log(existingJob)
}, [id])
  

  return (
    <section className='flex justify-center my-6 lg:my-12'>
      <div className="container bg-white rounded-lg shadow-lg p-8 mx-auto">
        <div className='flex flex-col gap-1 items-start mb-6 ml-2'>
          <span className="text-2xl font-normal">{job.title}</span>
          <span className='text-sm'>{job.company} | 24 Hours Ago | 91 Applicants</span>
        </div>
        <div className="flex flex-col mb-8">
            <img src={job.image} alt={job.title}
                className="h-[200px] w-full  object-cover rounded-md"
            />
           <div className="p-4  bg-white rounded-md border border-gray-300">
              <div className="text-gray-700 text-base w-full text-justify mb-8">
                  <span className='font-medium'>Job Description:</span> {job.desc}
              </div>

              <div className="text-gray-700 text-base mt-4 flex gap-2">
                <GoLocation className='text-blue-600  w-6 h-6 ' /> 
                ${job.salary} | {job.contract}
              </div>
              <div className="text-gray-700 text-base mt-4 flex gap-2">
                <BsBriefcase className='text-blue-600  w-6 h-6 ' /> 
                ${job.salary} | {job.contract}
              </div>
              <div className="text-gray-700 text-base mt-4 flex gap-2 max-w-4xl text-justify">
                <FaListUl className='text-blue-600  w-10 h-10 ' /> 
                {job.skills}
              </div>
              <div className="text-gray-700 text-base mt-4 flex gap-2">
                <FaRegBuilding className='text-blue-600  w-6 h-6 ' /> 
                {job.profile}
              </div>

              <div className='flex gap-2 items-center mt-8'>
                <button className=" px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium">
                    <div className='flex gap-4  '>
                      Apply <BsBoxArrowInUpRight/>
                    </div>
                </button>
                <button className="px-8 py-2 bg-white hover:bg-blue-700  text-blue-600 hover:text-white border border-blue-600 rounded-full font-medium">Save</button>
              </div>

              <div className='w-full text-justify my-8'>
                <ul className='list-disc pl-4'>
                  <li>
                    Creating and implementing web designs: Front-end developers are responsible for creating web designs and implementing them using HTML, CSS, and JavaScript.
                  </li>
                  <li>
                    Developing and testing web applications: Front-end developers are responsible for developing and testing web applications to ensure they function properly and provide an optimal user experience.
                  </li>
                  <li>
                    Ensuring web application accessibility: Front-end developers must ensure that web applications are accessible to users with disabilities, including those who use assistive technologies like screen readers.
                  </li>
                  <li>
                    Ensuring web application performance: Front-end developers must optimize web applications for speed and performance, including minimizing load times, reducing the number of HTTP requests, and optimizing images and other media.
                  </li>
                  <li>
                    Collaborating with back-end developers: Front-end developers must collaborate with back-end developers to ensure that web applications are integrated seamlessly with back-end systems.
                  </li>
                  <li>
                    Working with designers: Front-end developers often work closely with designers to ensure that web designs are implemented accurately and according to design specifications.
                  </li>
                  <li>
                    Maintaining code quality: Front-end developers must maintain high-quality code by adhering to best practices, documenting code changes, and using version control systems.
                  </li>
                  <li>
                    Keeping up-to-date with industry trends: Front-end developers must stay up-to-date with the latest industry trends and technologies to ensure that they are using the most effective tools and techniques in their work.
                  </li>
                  <li>
                    Debugging and troubleshooting: Front-end developers must be able to identify and resolve issues with web applications, including debugging code and troubleshooting problems.
                  </li>
                  <li>
                    Collaborating with cross-functional teams: Front-end developers must work collaboratively with other members of cross-functional teams, including designers, back-end developers, and project managers, to ensure that projects are completed on time and meet the requirements of stakeholders.
                  </li>
                </ul>
              </div>
            </div>
        </div>
        <a href="/" className="ml-2 text-blue-600 hover:text-blue-800">
          &larr; Back to Jobs
        </a>
      </div>
  </section>
  )
}

export default JobDetails
