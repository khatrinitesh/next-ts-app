import React from "react";
import Example from "./Example";
import "./style.css";

const sidebarItems: string[] = ["Item 1", "Item 2", "Item 3", "Item 4"];

const CustomApp = () => {
  return (
    <div className="App">
      <Example items={sidebarItems} />
      <div className="content">
        <h1>Collapsed Sidebar Example</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
};

export default CustomApp;
