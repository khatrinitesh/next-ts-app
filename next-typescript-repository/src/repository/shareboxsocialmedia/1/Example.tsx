"use client";
import { useState, useEffect } from "react";
// LIBRARY
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
// INTERFACE
import { SocialMediaPlatform } from "./interface";
// STYLING
// import './style.css';

const Example: React.FC = () => {

    const socialMediaPlatforms: SocialMediaPlatform[] = [
        { name: 'Facebook', icon: FaFacebook, color: 'bg-blue-500' },
        { name: 'Twitter', icon: FaTwitter, color: 'bg-blue-400' },
        { name: 'LinkedIn', icon: FaLinkedin, color: 'bg-blue-600' },
        // Add more platforms as needed
      ];
  return (
    <>
   <div className="flex justify-center items-center h-screen bg-gray-100">
      <SocialMediaShareBox platforms={socialMediaPlatforms} />
    </div>
    </>
  );
};

export default Example;

const SocialMediaShareBox: React.FC<SocialMediaPlatformProps> = ({ platforms }) => {
    const share = (platform: string) => {
      // Implement your sharing logic here
      console.log(`Sharing on ${platform}`);
    };
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
      <p className="text-lg font-semibold mb-4">Share this post</p>
      <div className="flex space-x-4">
        {platforms.map((platform) => (
          <button
            key={platform.name}
            onClick={() => share(platform.name)}
            className={`flex items-center justify-center w-12 h-12 rounded-full ${platform.color} text-white focus:outline-none`}
          >
            <platform.icon className="text-lg" />
          </button>
        ))}
      </div>
    </div>
    );
  };
