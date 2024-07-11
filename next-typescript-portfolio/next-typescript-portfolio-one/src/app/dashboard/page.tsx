"use client"
import React from "react";
import DashboardLayout from "./Layout";
import Link from "next/link";

const DashboardPage = () => {
    
  return (
    <DashboardLayout>
    <div className="container mx-auto py-5">
      <h1 className="font-bold text-fs32 text-white">Welcome to Dashboard</h1>
      <p className="font-semibold text-fs16 mb-5 text-white">This is the dashboardpage.</p>
      <Link
        href="/"
        className="bg-tertiarycolor text-white rounded text-fs16 px-6 py-2"
      >
        Back Homepage
      </Link>
    </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
