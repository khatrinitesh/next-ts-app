import { constants } from '@/app/constants/constants'
import Footer from '@/components/footer'
import Header from '@/components/header'

const MainLayout = ({children}) => {
  return (
    <>
     <Header constants={constants}/>
      <div className='mainContent'>
        {children}
      </div>
     <Footer/>
    </>
  )
}

export default MainLayout