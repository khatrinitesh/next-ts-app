import Banner from '@/components/banner'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='errorContent flex items-center justify-center bg-cyan-200 flex-col h-screen'>
        <Banner title="Not Found" description="Could not find requested resource"/>
        <Link href="/" className='bg-cyan-400 px-3 py-2 rounded'>Return Home</Link>
    </div>
  )
}

export default NotFound