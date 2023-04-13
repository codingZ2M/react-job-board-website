import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {TbLogicAnd}  from 'react-icons/tb';

const CareerAdvice = ({ articles }) => {
  return (
    <section className='flex justify-center my-20'>
      <div className='flex flex-col mb-0 container max-auto'>
          <div className='flex gap-2 items-center mb-2 pl-4'>
              <h2 className="text-xl font-medium text-gray-800">Career Advice</h2>
              <TbLogicAnd className='w-12 h-12 text-blue-600'/>
          </div>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
              <div key={article.id} className="p-4 shadow-lg rounded-lg mb-4">
                  <img
                       src={article.image}
                       alt={`${article.title} article`}
                       className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
              <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
              <div className="flex items-center text-gray-500 mb-2">
                     <FaRegCalendarAlt className="mr-1" />
                     <p>{article.date}</p>
              </div>
              <div className="text-lg mb-2">{article.summary}</div>
              <Link to='/'  target="_self" className="text-blue-500 hover:text-blue-700">
                  Read More
              </Link>
              </div>
          ))}
        </div>
    </div>       
  </section>
  )
}

export default CareerAdvice