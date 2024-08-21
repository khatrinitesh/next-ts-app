"use client"
import Modal from "@/components/Modal";
import SelectDropdown from "@/components/SelectDropdown";
import { months, options, years } from "@/constants/constants";
import Banner from "@/layout/Banner";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');


  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
     <MainLayout>
      <div className="content homePage">
        <Banner title="Home" description="Laborum commodo ad elit cupidatat ullamco laboris nisi excepteur."/>
       <div className="container mx-auto">
       <div>
        <h1>Select Dropdown Example</h1>
        <SelectDropdown 
          options={months} selectedValue={month} onChange={setMonth}
        />
        <SelectDropdown 
          options={years} selectedValue={year} onChange={setYear}
        />
         <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded">
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="My Modal">
        <p>This is a modal popup. You can add any content here.</p>
        <button onClick={closeModal} className="bg-blue-500 text-white p-2 rounded">
          Close
        </button>
      </Modal>
      </div>
       </div>
       </div>
     </MainLayout>
    </>
  );
}
