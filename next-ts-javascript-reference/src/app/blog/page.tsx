"use client"
import Banner from '@/components/Banner'
import { useRouter } from 'next/navigation';


const Blog = () => {
  const asdaddsd = useRouter();

  const handleBack = () => {
    asdaddsd.push(-1) //go back one step in history
  }
  const handleNext = () => {
    asdaddsd.push(1) //go forward one step in history
  }
  return (
    <>
     <div className='content'>
        <Banner title="Blog" desc="Officia do et anim velit irure cupidatat do non."/>
        <div className="container mx-auto">
            <button onClick={handleNext}>Next</button>
            <button onClick={handleBack}>Back</button>
        </div>
     </div>
    </>
  )
}

export default Blog