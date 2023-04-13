import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between bg-white shadow-lg py-7 mb-4 border-b">
      <div className="container mx-auto flex justify-between px-4">
          <div className="flex items-center text-white">
            <span className="font-semibold text-xl tracking-tight text-gray-700">CZ2M Job Board</span>
          </div>
      <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6"/>}
      </button>
      <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="my-1 text-gray-700 hover:text-blue-500 lg:mx-4 lg:my-0">Home</Link>
        <a href="#" className="block my-1 text-gray-700 hover:text-blue-500 lg:mx-4 lg:my-0">Jobs</a>
        <a href="#" className="block my-1 text-gray-700 hover:text-blue-500 lg:mx-4 lg:my-0">Employers</a>
        <a href="#" className="block my-1 text-gray-700 hover:text-blue-500 lg:mx-4 lg:my-0">Companies</a>
        <a href="#" className="block my-1 text-gray-700 hover:text-blue-500 lg:mx-4 lg:my-0">Career Advice</a>
        <Link to="/blog" className="block my-1 text-gray-700 hover:text-blue-500 lg:mx-4 lg:my-0">Blog</Link>
        <a href="#" className="block my-1 text-gray-700 hover:text-blue-500 lg:mx-4 lg:my-0">Contact Us</a>
      </div>
      </div>
    </nav>
  );
}

export default Header;
