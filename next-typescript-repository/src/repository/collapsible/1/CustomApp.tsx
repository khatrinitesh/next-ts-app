import React from "react";
import Example from "./Example";
import "./style.css";

const sidebarItems: string[] = ["Item 1", "Item 2", "Item 3", "Item 4"];

const CustomApp = () => {
  return (
    <div className="flex">
      <Example items={sidebarItems} />
      <div className="flex-grow bg-gray-200 p-5">
        <h1 className="text-2xl font-bold mb-3">Collapsible Sidebar Example</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
};

export default CustomApp;
