
"use client"
import React, { useState } from "react";



const Example: React.FC<> = ({}) => {

  return (
    <>
     <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-600">Your Name</label>
                <input type="text" id="name" name="name" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-600">Your Email</label>
                <input type="email" id="email" name="email" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-600">Message</label>
                <textarea id="message" name="message" rows={4} className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-md shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <p className="text-gray-600">You can reach us via email or phone:</p>
              <ul className="mt-4">
                <li className="flex items-center space-x-2 text-gray-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>contact@example.com</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600 mt-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>+1234567890</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Example;
