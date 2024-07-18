"use client"
import Banner from "@/components/Banner";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  }
  return (
    <>
     <div className="content">
      <Banner bannerStyle="bg-cyan-500" title="home" desc="Nostrud ex ad exercitation sit ullamco consectetur id quis tempor."/>
      <button type="button" onClick={handleClick} className="bg-cyan-500 text-white px-6 py-2 rounded">Dashboard</button>
    </div>
    </>
  );
}
