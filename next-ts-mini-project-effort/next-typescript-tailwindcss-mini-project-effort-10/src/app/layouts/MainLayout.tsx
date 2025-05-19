import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <div className="appLayout">
        <Header />
        <div className="mainContent">
            {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
