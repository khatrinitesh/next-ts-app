"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
import Link from "next/link";
// interface
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import { Tab,TabProps } from "./interface";

// constants


const tabs: Tab[] = [
  { id: 1, title: 'Tab 1', content: 'Content for Tab 1' },
  { id: 2, title: 'Tab 2', content: 'Content for Tab 2' },
  { id: 3, title: 'Tab 3', content: 'Content for Tab 3' },
];

const Example = () => {
  return (
    <>
    <TabGallery tabs={tabs}/>
    </>
  );
};

export default Example;

const TabGallery:React.FC<TabProps> = ({tabs}) => {

  const [activeTab,setActiveTab] = useState<number>(tabs[0]?.id);

  const handleTabClick = (tabId:number) => {
    setActiveTab(tabId);
  }
  return(
    <>
<div className="max-w-screen-lg mx-auto">
      <div className="flex items-center justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-lg font-medium leading-5 focus:outline-none ${
              activeTab === tab.id ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`p-4 ${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            <p className="text-xl font-bold">{tab.title}</p>
            <p className="mt-2 text-gray-700">{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}