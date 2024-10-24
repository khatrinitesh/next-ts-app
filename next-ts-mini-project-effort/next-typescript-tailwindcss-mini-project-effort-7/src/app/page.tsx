"use client"
import Image from "next/image";
import BtnPrimary from "@/components/BtnPrimary";
import MainLayout from "@/layout/MainLayout";
import { useRouter } from "next/navigation";
import Banner from "@/components/Banner";

export default function Home() {
  const router = useRouter();

    const handleNext = () => {
      router.push('/about')
    }
  return (
    <>
      <MainLayout>
        <div className="container mx-auto">
          <Banner>
          <h3 className="font-poppiunsmedium  text-red-500">
            Home
          </h3>
            <p>Do ipsum minim duis sunt reprehenderit.</p>
          </Banner>
         
          <BtnPrimary onClick={handleNext}>Next</BtnPrimary>
        </div>
      </MainLayout>
    </>
  );
}
