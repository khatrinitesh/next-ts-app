import React from "react";
import MainLayout from "../layouts/MainLayout";

const Contact: React.FC = () => {
  return (
    <MainLayout>
      <div className="content py-[30px]">
        <div className="container mx-auto px-[1rem]">
          <h1 className="text-2xl font-bold">Contact Page</h1>
          <p>This is the contact page content.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
