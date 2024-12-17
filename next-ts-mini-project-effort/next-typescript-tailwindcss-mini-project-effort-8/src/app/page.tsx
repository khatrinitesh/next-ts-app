import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import Banner from '@/components/Banner';
import Accoridon from "@/components/Accoridon";
import { accordionitems } from "@/constants/accordiondata";

export default function Home() {
  return (
    <>
    <MainLayout>
      <Banner title="Home" description="Aute eiusmod nulla ut culpa non anim dolore exercitation mollit Lorem do."/>
      {accordionitems.map((item) => (
        <Accoridon key={item.id} title={item.title} content={item.content}/>
      ))}
    </MainLayout>
    </>
  );
}
