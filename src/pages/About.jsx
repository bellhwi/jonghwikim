import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function About() {
  const maxWidth = useSelector((state) => state.maxWidth)

  useEffect(() => {
    document.title = 'About - jonghwi kim'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div className='profile flex justify-center align-center flex-col-reverse lg:flex-row w-10/12 lg:w-9/12 lg:pt-16 pt-10 mx-auto relative lg:justify-between'>
        <div className='profile-info lg:pr-10 lg:w-1/2 pt-8 lg:pt-0'>
          <h2 className='text-sm font-bold'>
            Hi, I'm Jonghwi from South Korea.
          </h2>
          <br></br>
          <p className='text-xs sm:text-sm text-gray-600'>
            I have 3+ years overall experience in software development and
            testing. I've been freelancing at Upwork for a recent year. I've
            created eCommerce and portfolio websites for clients. I'm currently
            looking for React Frontend Developer job position. Below are my
            specialties,
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
              className='btn text-xs sm:text-sm rounded-none border border-black bg-transparent text-black hover:bg-transparent '
              href='https://docs.google.com/document/d/1-X1DLL1w5mDYhfPo5MGjhvFamdA_74ZJt8DEc71j2pw/edit?usp=sharing'
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
            src={`${process.env.PUBLIC_URL}/images/jonghwikim.jpg`}
          />
        </div>
      </div>
      {maxWidth >= 1024 ? null : <Footer />}
    </>
  )
}

export default About
