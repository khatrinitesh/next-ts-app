"use client";
import React, { useState } from "react";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// import './style.css';
import Link from "next/link";
import Image from "next/image";

const Example: React.FC = () => {
  return (
    <>
      <NewsletterForm/>
    </>
  );
};

export default Example;

const NewsletterForm: React.FC = () => {
    const [email, setEmail] = useState("");
  
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
      // Implement form submission logic here, e.g., sending email to backend
      console.log("Submitted email:", email);
      setEmail(""); // Clear the email input after submission
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 rounded-md p-2 w-64 mb-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Subscribe
        </button>
      </form>
    );
  };
