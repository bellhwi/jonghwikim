import { NavLink, Link } from 'react-router-dom'
import Footer from './Footer'
import { setMaxWidth } from '../store'
import { useDispatch, useSelector } from 'react-redux'

function Navbar() {
  const myBody = document.getElementById('myBody')
  const maxWidth = useSelector((state) => state.maxWidth)
  const dispatch = useDispatch()

  window.addEventListener('resize', () => {
    dispatch(setMaxWidth(myBody.clientWidth))
  })

  return (
    <div className='flex items-end mx-auto lg:fixed lg:block lg:left-0 lg:mx-8 w-10/12 '>
      <div className='block lg:mt-12 mt-6 lg:ml-0 text-xl'>
        <NavLink to='/'>
          jonghwi {myBody.clientWidth >= 1024 ? <br /> : null}
          kim
        </NavLink>
      </div>
      {myBody.clientWidth >= 1024 ? null : <div className='grow'></div>}
      <ul className='lg:flex lg:flex-col lg:mt-6 text-sm leading-6'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'text-gray-400 pr-2' : 'link pr-2'
          }
        >
          Projects
        </NavLink>
        <a
          href='https://docs.google.com/document/d/1cCmYlvT7zN1VVJ4X7mH-5sxntNe4PvYZ5K1fgKZWyMg/edit'
          target='_blank'
          rel='noreferrer'
        >
          Docs
        </a>

        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'text-gray-400 pl-2 lg:pl-0' : 'link pl-2 lg:pl-0'
          }
        >
          About
        </NavLink>
      </ul>

      {maxWidth >= 1024 ? <Footer /> : null}
    </div>
  )
}

export default Navbar
