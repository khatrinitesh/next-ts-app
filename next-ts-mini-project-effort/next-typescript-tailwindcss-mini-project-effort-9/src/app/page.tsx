"use client";
import Banner from "@/components/Banner";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const btnInc = () => {
    setCount((prev) => prev + 1);
  };
  const btnDec = () => {
    setCount((prev) => prev - 1);
  };
  const btnReset = () => {
    setCount(0);
  };

  return (
    <>
      <MainLayout>
        <Banner>
          <h2>Home</h2>
          <p>Sit eiusmod laborum irure labore duis ex minim mollit.</p>
        </Banner>
        <div className="container mx-auto mt-8">
          <Link href="/about" className="text-blue-500 underline mb-4 block">
            Click next
          </Link>

          <div className="neumorphism-card p-6 rounded-xl text-center mb-6">
            <span className="font-bold text-2xl text-red-500">{count}</span>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={btnInc}
              className="neumorphism-button p-4 text-xl bg-white"
            >
              +
            </button>
            <button
              onClick={btnDec}
              className="neumorphism-button p-4 text-xl bg-white"
            >
              -
            </button>
            <button
              onClick={btnReset}
              className="neumorphism-button p-4 text-xl bg-white"
            >
              Reset
            </button>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
