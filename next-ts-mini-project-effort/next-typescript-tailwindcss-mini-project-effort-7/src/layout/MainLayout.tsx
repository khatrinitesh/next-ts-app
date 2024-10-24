import React from "react";
// components
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className="appLayout">
        <Header />
        <div className="mainContent min-h-[calc(100vh-128px)]">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
