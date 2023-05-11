import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function About() {
  const maxWidth = useSelector((state) => state.maxWidth)

  useEffect(() => {
    document.title = 'About - jonghwi kim'
  }, [])

  return (
    <>
      <Navbar />
      <div className='profile flex justify-center align-center flex-col-reverse lg:flex-row w-10/12 lg:w-9/12 lg:pt-16 pt-10 mx-auto relative lg:justify-between'>
        <div className='profile-info lg:pr-10 lg:w-1/2 pt-8 lg:pt-0'>
          <h2 className='text-sm font-bold'>
            Hi, I am Jonghwi from California.
          </h2>
          <br></br>
          <p className='text-xs sm:text-sm text-gray-600'>
            I am currently looking for a remote React Frontend Developer job
            position. I have developed a{' '}
            <a
              href='https://haxalabs.com/'
              target='_blank'
              rel='noreferrer'
              style={{ color: '#3366CC' }}
            >
              members-only eCommerce web app
            </a>{' '}
            that has users and admin features for an entrepreneur client. I am
            pursuing my vision to offer valuable software to people. Below are
            my specialties,
          </p>
          <br></br>
          <ul className='text-xs sm:text-sm text-gray-600 ml-4 list-disc'>
            <li>🧑🏻‍💻 I write extendable and clean code.</li>
            <li>💎 I pursue creating error-free software.</li>
            <li>🔬 I have a persistent attitude of problem solving.</li>
            <li>⭐️ I prioritize visually aesthetic and pleasant UI/UX.</li>
            <li>
              🚀 I care about developing highly performant web application.
            </li>
          </ul>
          <div className='flex mt-12'>
            <a
              className='btn text-xs sm:text-sm rounded-none border border-black bg-transparent text-black hover:bg-transparent'
              href='https://docs.google.com/document/d/1sb04-iGHiQJpp8Cfb_CJ_IknxdDJvcF5v5schEDJLeQ/edit?usp=share_link'
              target='_blank'
              rel='noreferrer'
            >
              view my resume
            </a>
            <a
              className='btn text-xs sm:text-sm rounded-none border-0 bg-black text-white hover:bg-black ml-2'
              href='mailto: johnnykim94@hotmail.com'
              target='_blank'
              rel='noreferrer'
            >
              contact me
            </a>
          </div>
        </div>
        <div className='max-w-screen-sm w-4/5 mx-auto lg:w-full lg:m-0'>
          <img
            className='profile-img relative'
            src={`${process.env.PUBLIC_URL}/images/jonghwikim.webp`}
            alt='profileImage'
          />
        </div>
      </div>
      {maxWidth >= 1024 ? null : <Footer />}
    </>
  )
}

export default About
