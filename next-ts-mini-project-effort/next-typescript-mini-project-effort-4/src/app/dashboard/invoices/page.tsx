import React from "react";
import DashboardLayout from "../Layout";
import Link from "next/link";

const Invoices = () => {
  return (
    <DashboardLayout>
      <div className="content py-5">
        <div className="container mx-auto">
          <Link
            href="/dashboard"
            className="bg-tertiarycolor mb-2 inline-block px-5 py-2 rounded text-white"
          >
            Back
          </Link>
          <h1 className="font-bold text-fs32 text-white">
            Welcome to Invoices page
          </h1>
          <p className="font-semibold text-fs16 text-white">
            This is the Invoicespage.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Invoices;
