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
      <div className='profile flex justify-center align-center flex-col-reverse lg:flex-row w-10/12 lg:w-9/12 lg:pt-16 pt-10 mx-auto relative'>
        <div className='profile-info lg:pr-12 lg:w-1/2 pt-8 lg:pt-0'>
          <h2>Hi, I'm Jonghwi. I also go by Johnny.</h2>
          <br></br>
          <p>
            I care about developing useful software services. I believe good
            software can make people’s lives better.
            <br></br>
            <br></br>I am currently working as a freelance web developer for my
            clients. Previously, I was an independent game developer that
            created three games and published them online. Before that, I worked
            as a software quality assurance tester that detects errors of mobile
            apps in the company, Onycom Inc.
            <br></br>
            <br></br>
            My biggest commercial project is a business website that is
            outsourced from my client. I conducted an entire web development
            process for this project including designing, programming, testing
            and deploying.
            <br></br>
            <br></br>
            I’d love to hear from you! johnnykim94@hotmail.com
          </p>

          <a
            className='btn btn-tertiary mt-12'
            href='https://docs.google.com/document/d/1-X1DLL1w5mDYhfPo5MGjhvFamdA_74ZJt8DEc71j2pw/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            View My Resume
          </a>
        </div>
        <div className='profile-img w-1/2 mx-auto'>
          <img src={require('../images/jonghwikim.webp')} />
        </div>
      </div>
      {maxWidth >= 1024 ? null : <Footer />}
    </>
  )
}

export default About
