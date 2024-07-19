"use client";
import React, { ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";


const Example:React.FC<> = ({}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Validation logic
        let valid = true;
        const newErrors = { name: '', email: '', message: '' };
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
          valid = false;
        }
        // Add more validation rules as needed
        if (!valid) {
          setErrors(newErrors);
          return;
        }
        // Form submission logic
        console.log('Form submitted:', formData);
      };
  return (
    <>
       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      {/* Repeat the above pattern for other form fields */}
      <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
    </>
  );
};

export default Example;
