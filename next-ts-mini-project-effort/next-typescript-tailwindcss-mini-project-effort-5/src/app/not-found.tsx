'use client'
import BtnPrimary from '@/components/BtnPrimary'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
 
export default function NotFound() {

    const router = useRouter();

    const handleBack = () => {
        router.push('/')
    }
  return (
    <div className="errorContent h-screen flex flex-col items-center justify-center bg-gray-400">
      <h2 className="font-bold text-[32px]">Not Found</h2>
      <p className="font-medium text-[16px] mb-2">Could not find requested resource</p>
      <BtnPrimary label="Return Home" onClick={handleBack}/>
    </div>
  )
}