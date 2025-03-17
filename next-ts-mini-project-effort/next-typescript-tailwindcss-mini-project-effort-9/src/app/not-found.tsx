"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const NotFound = () => {
  return (
    <>
      <div className="h-dvh flex flex-col items-center justify-center gap-[10px] bg-blue-200">
        <h2 className="font-bold">Error page</h2>
        <Link href="/" className="font-bold">Go to homepage</Link>
      </div>
    </>
  );
};

export default NotFound;
