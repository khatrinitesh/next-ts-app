"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface FieldsetProps {
  legend: string;
  children: React.ReactNode;
}

const Example: React.FC<FieldsetProps> = ({ legend, children }) => {
  return (
    <>
      <fieldset className="border border-gray-300 p-4 rounded-md">
        <legend className="text-lg font-semibold px-2">{legend}</legend>
        {children}
      </fieldset>
    </>
  );
};

export default Example;
