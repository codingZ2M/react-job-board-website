import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto">
          <div className="flex flex-wrap justify-between ml-12">
            <div className="w-full lg:w-1/4 mb-8">
                <h2 className="text-lg font-medium mb-4">Job Board</h2>
                <p className="text-sm">Find your next job with us</p>
            </div>
            <div className="w-full lg:w-1/4 mb-8">
                <h2 className="text-lg font-medium mb-4">Menu</h2>
                <ul className="list-none">
                  <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
                  <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Jobs</a></li>
                  <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Employers</a></li>
                  <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Companies</a></li>
                  <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Career Advice</a></li>
                  <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Blog</a></li>
                  <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Contact Us</a></li>
                </ul>
            </div>
            <div className="w-full lg:w-1/4 mb-8">
              <h2 className="text-lg font-medium mb-4">Connect with us</h2>
                <ul className="list-none flex">
                  <li className="mr-4"><a href="#" className="text-sm hover:text-gray-400"><FaFacebook /></a></li>
                  <li className="mr-4"><a href="#" className="text-sm hover:text-gray-400"><FaTwitter /></a></li>
                  <li className="mr-4"><a href="#" className="text-sm hover:text-gray-400"><FaInstagram /></a></li>
                </ul>
            </div>
          </div>

        <div className="flex justify-center mt-8">
            <p className="text-sm">&copy; 2023 CZ2M Job Board. All rights reserved.</p>
        </div>
      </div>
  </footer>
  )
}

export default Footer