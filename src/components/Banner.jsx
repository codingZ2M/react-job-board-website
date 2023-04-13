import React from 'react'

const Banner = () => {
  return (
  <div className="relative h-96 mb-0">
      <img src="https://images.pexels.com/photos/5940717/pexels-photo-5940717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Job Board Banner" className="w-full h-full object-cover brightness-50" />
      <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl w-72 sm:w-full font-normal  lg:text-5xl lg:font-bold text-white">Find Your Next Career Opportunity</h1>
        <p className="text-xl text-white mt-4 mb-8">Search and apply to thousands of jobs across various industries.</p>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold">Search Jobs</button>
      </div>
    </div>
  )
}

export default Banner