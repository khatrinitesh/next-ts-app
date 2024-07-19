"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";

// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// STYLINGCSS
// import "./style.css";
// CONSTANTS
import { TIMELINE_EVENTS } from "./constants";
import { TimelineEvent } from "./interface";
// INTERFACE


const Example = () => {
  return (
    <>
       <div className="timeline-container">
            {TIMELINE_EVENTS.map((event: TimelineEvent) => (
                <div key={event.id} className="timeline-item">
                    <div className="timeline-date bg-blue-500 text-white px-4 py-1 rounded-md mb-2">
                        {event.date}
                    </div>
                    <div className="timeline-content bg-white shadow-md rounded-lg px-6 py-4">
                        <h2 className="text-lg font-bold mb-2">{event.title}</h2>
                        <p className="text-gray-700">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
  );
};

export default Example;
