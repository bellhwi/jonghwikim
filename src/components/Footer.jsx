import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='lg:fixed lg:bottom-0 lg:mb-12'>
      <div className='flex justify-center lg:justify-start items-center text-gray-400 pb-10 lg:pb-0 pt-8 lg:pt-0'>
        <a
          className='mr-3 hover:text-black'
          href='https://github.com/bellhwi'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/jonghwikim/'
          target='_blank'
          rel='noreferrer'
          className='mr-3 hover:text-black'
        >
          <FaLinkedinIn />
        </a>
        <a
          href='https://www.youtube.com/@jonghwikim'
          target='_blank'
          rel='noreferrer'
          className='hover:text-black'
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  )
}

export default Footer
