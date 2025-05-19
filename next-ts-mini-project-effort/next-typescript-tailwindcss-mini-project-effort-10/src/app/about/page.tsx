import React from "react";
import MainLayout from "../layouts/MainLayout";

const About: React.FC = () => {
  return (
    <MainLayout>
      <div className="content py-[30px]">
        <div className="container mx-auto px-[1rem]">
          <h1 className="text-2xl font-bold">About Page</h1>
          <p>This is the about page content.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
