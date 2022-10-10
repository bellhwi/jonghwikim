import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'

function About() {
  const maxWidth = useSelector((state) => state.maxWidth)

  return (
    <>
      <Navbar />
      <div className='profile w-10/12 mt-16 mx-auto relative'>
        <div className='profile-info pr-12'>
          <h2>Hi, I'm Jonghwi, aka Johnny from my people.</h2>
          <br></br>
          <p>
            I’m a self-taught software developer. I started learning how to code
            to make good services. I've always wanted to create something useful
            for people. And I found infinite possibilities in software
            development to achieve that goal.
            <br></br>
            <br></br>I want to share one of the behind story about my web
            project. My graphic designer girlfriend used to look for jobs
            before. She wanted to have a good-looking portfolio website to
            present her works. That’s why I created a website for her. It was my
            first time to make an actual service to meet someone’s needs. It was
            such a huge satisfaction to develop something worthwhile. From
            there, my programming journey has been started to focus on ‘what
            value to offer’ to people. <br></br>
            <br></br>I understand the true value of software development. I
            believe good software can make people’s lives better and happier. I
            want to commit my passion to the company which follows that mission.
            I desire to grow with great people who want to benefit the world.
            <br></br>
            <br></br>I’d love to hear from you very soon!
            johnnykim94@hotmail.com
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
        <div className='profile-img'>
          <img src={require('../images/jonghwikim.webp')} />
        </div>
      </div>
      {maxWidth >= 1024 ? null : <Footer absolute={true} />}
    </>
  )
}

export default About
