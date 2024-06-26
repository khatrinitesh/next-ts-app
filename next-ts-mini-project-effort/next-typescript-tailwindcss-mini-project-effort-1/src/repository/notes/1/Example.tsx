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
    const [notes, setNotes] = useState<NoteData[]>([
        { id: 1, title: 'Note 1', content: 'Content of Note 1' },
        { id: 2, title: 'Note 2', content: 'Content of Note 2' },
        { id: 3, title: 'Note 3', content: 'Content of Note 3' },
      ]);
    
      const handleDeleteNote = (id: number) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
      };

  return (
    <>
   {notes.map(note => (
        <NotesComponent key={note.id} id={note.id} title={note.title} content={note.content} onDelete={handleDeleteNote} />
      ))}
    </>
  );
};

export default Example;


interface NoteProps {
    id: number;
    title: string;
    content: string;
    onDelete: (id: number) => void;
  }

  interface NoteData {
    id: number;
    title: string;
    content: string;
  }

const NotesComponent: React.FC<NoteProps> = ({ id,title,content,onDelete }) => {
    return (
      <>
       <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{content}</p>
      <button
        className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md focus:outline-none"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
      </>
    );
  };