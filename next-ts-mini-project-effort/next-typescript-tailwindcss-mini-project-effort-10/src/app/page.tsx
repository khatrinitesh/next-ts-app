import Image from "next/image";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="content py-[30px]">
          <div className="container mx-auto px-[1rem]">
            <h1 className="text-2xl font-bold">Home Page</h1>
             <p>This is the Home page content.</p>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
