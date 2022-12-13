import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import MainGrid from '../components/MainGrid'
import { data } from '../data'
import Footer from '../components/Footer'

function Home() {
  const maxWidth = useSelector((state) => state.maxWidth)

  useEffect(() => {
    document.title = 'jonghwi kim'
  }, [])

  return (
    <div className='myContainer relative h-screen'>
      <Navbar />
      <MainGrid />
      {maxWidth >= 1024 ? null : <Footer />}
    </div>
  )
}

export default Home
