
"use client"
import React, { useState } from "react";

interface SidearProps {
  items: string[];
}

const Example: React.FC<SidearProps> = ({items}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <button onClick={toggleSidebar} className="toggle-btn">
          {collapsed ? ">>" : "<<"}
        </button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Example;
