import React from "react";
import MainLayout from "@/layout/MainLayout";
import Banner from "../../components/Banner";
import Posts from "@/components/Posts";

const About: React.FC = () => {
  return (
    <>
      <MainLayout>
        <Banner>
          <h2>About</h2>
          <p>Labore laborum amet pariatur pariatur do.</p>
        </Banner>
        <div className="container mx-auto">
          <Posts />
        </div>
      </MainLayout>
    </>
  );
};

export default About;
