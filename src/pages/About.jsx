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
          <h2>Hi, I'm Jonghwi from South Korea.</h2>
          <br></br>
          <p>
            I care about developing useful software services. I was a freelance
            web developer for a recent year. Previously, I used to be an
            independent game developer. Before that, I worked as a software
            quality assurance tester. I'm currently looking for a web developer
            job.
            <br></br>
            <br></br>
            I’d love to hear from you! johnnykim94@hotmail.com
          </p>
          <br></br>
          <h3 className='tech-title'>Tech Stack:</h3>
          <div className='tech-container'>
            <img
              src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
              alt='HTML'
            />
            <img
              src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
'
              alt='CSS'
            />
            <img
              src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
'
              alt='Javascript'
            />
            <img
              src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
'
              alt='Typescript'
            />
            <img
              src='https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
'
              alt='Sass'
            />
            <img
              src='https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
'
              alt='Bootstrap'
            />
            <img
              src='https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
'
              alt='Tailwind'
            />
            <img
              src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
'
              alt='React'
            />
            <img
              src='https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
'
              alt='Redux'
            />
            <img
              src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
'
              alt='NodeJS'
            />
            <img
              src='https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
'
              alt='Express'
            />
            <img
              src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
'
              alt='MongoDB'
            />
            <img
              src='https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white
'
              alt='MySQL'
            />
            <img
              src='https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black
'
              alt='Firebase'
            />
            <img
              src='https://img.shields.io/badge/Sketch-FFB387?style=for-the-badge&logo=sketch&logoColor=black
'
              alt='Sketch'
            />
            <img
              src='https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white
'
              alt='Figma'
            />
            <img
              src='https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white
'
              alt='Google Cloud'
            />
            <img
              src='https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white
'
              alt='Git'
            />
            <img
              src='https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white
'
              alt='Postman'
            />
            <img
              src='https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white
'
              alt='Unity'
            />
            <img
              src='https://img.shields.io/badge/Godot-478CBF?style=for-the-badge&logo=GodotEngine&logoColor=white
'
              alt='Godot'
            />
            <img
              src='https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white
'
              alt='macOS'
            />
            <img
              src='https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white
'
              alt='Windows'
            />
            <img
              src='https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black
'
              alt='Linux'
            />
          </div>
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
