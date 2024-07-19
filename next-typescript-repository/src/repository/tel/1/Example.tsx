"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
import Link from "next/link";
// interface
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import { CONTACTS } from "./constants";
import { Contact } from "./interface";


// constants


const Example = () => {
  return (
    <>
    <ContactList/>
    </>
  )
};

export default Example;

const ContactList: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CONTACTS.map((contact: Contact) => (
          <div key={contact.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{contact.name}</h3>
            <div className="flex items-center mb-2">
              <span className="mr-2 text-gray-600">Telephone:</span>
              <span className="text-gray-800">{contact.telephone}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">Mobile:</span>
              <span className="text-gray-800">{contact.mobile}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
