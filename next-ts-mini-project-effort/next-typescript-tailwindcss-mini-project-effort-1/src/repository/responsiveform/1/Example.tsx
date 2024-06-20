"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
// interface

// constants

const Example = () => {
  return (
    <>
    <ResponsiveFloatComponent/>
    </>
  );
};

export default Example;

const ResponsiveFloatComponent: React.FC<> = ({}) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
      };
   
  return (
    <>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Form Title */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Form</h2>
          <p className="text-sm text-gray-600">Please fill in the fields below to register.</p>
        </div>

        {/* Form Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-2">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Password */}
          <div className="col-span-2">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              required
              minLength={6}  // Example: Minimum password length
            />
          </div>

          {/* Checkbox */}
          <div className="col-span-2">
            <label htmlFor="agree" className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                className="mr-2 leading-tight"
                required
              />
              <span className="text-sm text-gray-700">I agree to the terms and conditions</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </>
  )
};
