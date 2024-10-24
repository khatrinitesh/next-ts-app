import Link from 'next/link'

export default function NotFound() {
    return (
      <div className='h-[100vh] bg-cyan-200 flex items-center justify-center flex-col gap-[20px]'>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/" className='bg-black px-[20px] py-[10px] text-white rounded-[10px]'>Return Home</Link>
      </div>
    )
  }