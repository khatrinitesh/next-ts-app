"use client";
import React, {useRef , ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from 'axios';


const Example:React.FC<> = ({}) => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const handleSearch = async () => {
        try {
          const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
            params: {
              key: 'YOUR_API_KEY',
              cx: 'YOUR_SEARCH_ENGINE_ID',
              q: query,
            },
          });
          setResults(response.data.items);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
  return (
    <>
       <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.cacheId}>
            <a href={result.link}>{result.title}</a>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;

