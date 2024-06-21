"use client";
// styling
// import './custom.css';
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
import {
  ArrowUpIcon,
  DocumentIcon,
  HomeIcon,
  MenuIcon,
  UserIcon,
} from "@heroicons/react/outline"; // Heroicons for menu icon
// next image / link
import Image from "next/image";
import Link from "next/link";
// images
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// constants
import { API_KEY,API_URL} from "./constants";
// interface
import { Photo } from "./interface";
import axios from "axios";

const Example = () => {
 
  return (
    <>
      <SearchPhoto />
    </>
  );
};

export default Example;

const SearchPhoto: React.FC<> = ({  }) => {
    const [query, setQuery] = useState<string>('');
    const [photos, setPhotos] = useState<Photo[]>([]);

    
    useEffect(() => {
        const fetchPhotos = async () => {
          try {
            const response = await axios.get(`${API_URL}/photos?page=1`, {
              params: {
                per_page: 10,
                client_id: API_KEY,
              },
            });
            console.log(response);
            
            setPhotos(response.data);
          } catch (error) {
            console.error('Error fetching photos:', error);
          }
        };
    
          fetchPhotos();
      }, []);


      


  return (
    <div className="relative">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos?.map(photo => (
          <div key={photo.id} className="overflow-hidden rounded-lg shadow-md">
            <img src={photo.urls.regular} alt={photo.alt_description} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
