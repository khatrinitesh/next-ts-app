"use client";
import React, { ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";

Cotton Green Local Train | Best In One Shot India Railways

const Example:React.FC<> = ({}) => {

  return (
    <>
    <div className="container mx-auto px-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              John Doe
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              Software Engineer
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              Active
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              Admin
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              Jane Smith
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              Project Manager
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              Inactive
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              User
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Example;
