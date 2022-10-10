import { NavLink } from 'react-router-dom'
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
    <div className='flex items-end lg:fixed lg:block lg:left-0 lg:mx-8 w-10/12 mx-auto'>
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
            isActive
              ? myBody.clientWidth >= 1024
                ? 'text-gray-400'
                : 'text-gray-400 pr-2'
              : 'link'
          }
        >
          Projects
        </NavLink>

        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? myBody.clientWidth >= 1024
                ? 'text-gray-400'
                : 'text-gray-400 pl-2'
              : 'link'
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
