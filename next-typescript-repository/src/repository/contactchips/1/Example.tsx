"use client";
// custom hooks - state management
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
// LIBRARY
import ReactPlayer from 'react-player';
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// // STYLINGCSS
// import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {

    const [contacts, setContacts] = useState<Contact[]>([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Michael Johnson', email: 'michael@example.com' },
      ]);
    
      const handleDelete = (id: number) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
      };
    
  return (
    <>
    <div className="flex flex-wrap">
        {contacts.map(contact => (
          <ContactChip key={contact.id} contact={contact} onDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default Example;

interface Contact {
    id: number; //1
    name: string; //name
    email: string; //email
  }
  
  interface ContactChipProps {
    contact: Contact;
    onDelete: (id: number) => void;
  }

const ContactChip: React.FC<ContactChipProps> = ({ contact, onDelete }) => {
    return (
      <div className="flex items-center bg-gray-200 text-gray-800 rounded-lg px-3 py-1 m-1">
        <span className="mr-2">{contact.name}</span>
        <Link href={`mailto:${contact.email}`} className="text-xs text-gray-500">{contact.email}</Link>
        <button
          className="ml-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </button>
      </div>
    );
  };