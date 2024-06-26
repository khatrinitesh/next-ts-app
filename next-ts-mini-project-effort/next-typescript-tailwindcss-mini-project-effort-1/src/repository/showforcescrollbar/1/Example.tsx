"use client";
import { useState, useEffect } from "react";
// LIBRARY
// INTERFACE
// STYLING
import './style.css';

const Example: React.FC = () => {

  return (
    <>
        <ScrollableContent/>
    </>
  );
};

export default Example;

const ScrollableContent = () => {
    return (
      <div className="content h-[100px] overflow-y-auto">
        <ul>
          <li>I want the user to know that an area is scrollable</li>
          <li>But in macOS the bar disappears</li>
          <li>The only way the user would know that</li>
          <li>they can scroll is if they make the scroll gesture</li>
          <li>Is there a way to keep the scrollbar present all the time?</li>
          <li>I want the user to know that an area is scrollable</li>
          <li>But in macOS the bar disappears</li>
          <li>The only way the user would know that</li>
          <li>they can scroll is if they make the scroll gesture</li>
          <li>Is there a way to keep the scrollbar present all the time?</li>
          <li>I want the user to know that an area is scrollable</li>
          <li>But in macOS the bar disappears</li>
          <li>The only way the user would know that</li>
          <li>they can scroll is if they make the scroll gesture</li>
          <li>Is there a way to keep the scrollbar present all the time?</li>
          <li>I want the user to know that an area is scrollable</li>
          <li>But in macOS the bar disappears</li>
          <li>The only way the user would know that</li>
          <li>they can scroll is if they make the scroll gesture</li>
          <li>Is there a way to keep the scrollbar present all the time?</li>
          <li>I want the user to know that an area is scrollable</li>
          <li>But in macOS the bar disappears</li>
          <li>The only way the user would know that</li>
          <li>they can scroll is if they make the scroll gesture</li>
          <li>Is there a way to keep the scrollbar present all the time?</li>
          <li>I want the user to know that an area is scrollable</li>
          <li>But in macOS the bar disappears</li>
          <li>The only way the user would know that</li>
          <li>they can scroll is if they make the scroll gesture</li>
          <li>Is there a way to keep the scrollbar present all the time?</li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    );
  };