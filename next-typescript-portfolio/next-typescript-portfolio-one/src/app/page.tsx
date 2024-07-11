"use client"
import Image from "next/image";
import RootLayout from "./layout";
import Link from "next/link";

export default function Home() {
  
  return (
    <>
      <div className="content py-5">
        <div className="container mx-auto">
          <h1 className="font-bold text-fs32">Welcome to Home</h1>
          <p className="font-semibold text-fs16 mb-5">This is the homepage.</p>
          <Link href="/dashboard" className="bg-tertiarycolor text-white rounded text-fs16 px-6 py-2">Click to Dashboard</Link>
        </div>
      </div>
    </>
  );
}
