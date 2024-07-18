import Banner from "@/components/banner";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";

export default function Home() {  
  return (
    <>
    <MainLayout>
       <Banner title="Home" description="In culpa excepteur amet irure in enim nostrud qui ut ea aliquip."/>
    </MainLayout>
    </>
  );
}
