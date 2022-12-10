import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import MainGrid from '../components/MainGrid'
import Modal from '../components/Modal'
import { data } from '../data'
import Footer from '../components/Footer'

function Home() {
  const [modalOn, setModalOn] = useState(false)
  const myContainer = document.querySelector('.myContainer')
  const id = useSelector((state) => state.id)
  const maxWidth = useSelector((state) => state.maxWidth)

  if (myContainer != null) {
    myContainer.addEventListener('click', (e) => {
      if (e.target.className == 'myModal-container') {
        setModalOn(false)
        document.getElementById('myBody').classList.contains('scrollLock') &&
          document.getElementById('myBody').classList.remove('scrollLock')
      }
    })
  }

  useEffect(() => {
    document.title = 'jonghwi kim'

    document.getElementById('myBody').classList.add('scrollLock')
  }, [modalOn])

  return (
    <div className='myContainer relative h-screen'>
      {modalOn ? (
        <Modal
          url={data[id].url}
          title={data[id].title}
          desc={data[id].desc}
          github={data[id].github}
          website={data[id].website}
          badges={data[id].badges}
        />
      ) : null}
      <Navbar />
      <MainGrid setModalOn={setModalOn} />
      {maxWidth >= 1024 ? null : <Footer />}
    </div>
  )
}

export default Home
