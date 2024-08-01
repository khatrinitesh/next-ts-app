"use client" 
import Image from "next/image";
import Banner from './../layout/Banner/Banner';
import MainLayout from "@/layout/MainLayout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className='content'>
        <div className="container mx-auto">
            <Banner title="Home" description="Esse aute consequat consectetur ipsum proident culpa do ad."/>
        </div>
    </div> 
    </MainLayout>
  );
}
