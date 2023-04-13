import React from 'react'
import {BiCategory} from "react-icons/bi";
import {BsArrowRightCircle} from "react-icons/bs";
import categories from '../data/jobCategories';

const JobCategories = () => {
  return (
    <section className='flex justify-center my-16'>
      <div className="container bg-white rounded-lg shadow-lg p-8 mx-auto">
          <div className='flex gap-2 items-center mb-4'>
              <h2 className="text-xl font-medium text-gray-800 mb-4">Browse Jobs by Category</h2>
              <BiCategory className='w-12 h-12 text-blue-600'/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categories.map(category => (
                <div key={category.name} className="rounded-lg p-4 border border-blue-600">
                  <h3 className="text-gray-700 font-medium mb-2">{category.name}</h3>
                  <div className='flex justify-between'>
                      <p className="text-gray-500">{category.jobCount} Jobs Available</p>
                      <BsArrowRightCircle className='w-6 h-6 text-blue-600'/>
                  </div>
               </div>
              ))}
          </div>
      </div>
    </section>
  )
}

export default JobCategories