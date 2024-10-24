import AppLayout from "@/layout/AppLayout";
import Banner from "@/layout/Banner";
import Image from "next/image";

export default function About() {
  return (
    <>
    <div className="content">
      <AppLayout>
        <Banner title="About" desc="Enim cillum excepteur est officia id magna ex do ipsum ex reprehenderit mollit eu eiusmod."/>
        
      </AppLayout>
    </div>
    </>
  );
}
