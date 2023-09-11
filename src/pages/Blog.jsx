import React from 'react';
import {FaRegCalendarAlt}  from "react-icons/fa";
import {MdOutlineArticle} from "react-icons/md";

const Blog = ({ posts }) => {
  return (
    <section className='flex flex-col items-center justify-center my-6 lg:my-8'>
      <div className='flex gap-2 items-center mb-4'>
          <h3 className='text-xl font-medium p-2 mb-2'>Blog Posts</h3>
          <MdOutlineArticle className='w-10 h-10 text-blue-600'/>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((article) => (
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
                <div className="text-lg mb-2 text-justify">{article.content}</div>
                <a href='#' target="_parent" rel="noopener noreferrer" 
                    className="text-blue-500 hover:text-blue-700"
                > Read More </a>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
