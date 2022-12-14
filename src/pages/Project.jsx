import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { data } from '../data'
import { useNavigate, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'

function Project() {
  const maxWidth = useSelector((state) => state.maxWidth)
  const { id } = useParams()
  const projectData = data.find((key) => {
    return key.id === id
  })
  const { url, title, contents } = projectData
  const navigate = useNavigate()

  useEffect(() => {
    document.title = `${title} - jonghwi kim`
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center align-center w-10/12 lg:w-9/12 pt-10 mx-auto relative lg:left-16'>
        <div className='flex flex-col justify-between items-center sm:flex-row'>
          <h1 className='text-4xl font-semibold pb-4'>{title}</h1>
        </div>
        <p className='border-l-2 border-gray-300 text-gray-500 pl-2 mx-auto sm:ml-2'>
          {contents.heading}
        </p>
        <div className='card-actions justify-end pt-4 pb-2 mx-auto sm:mx-0'>
          {contents.github ? (
            <a
              className='btn text-xs sm:text-sm rounded-none border border-black bg-transparent text-black hover:bg-transparent'
              href={contents.github}
              target='_blank'
              rel='noreferrer'
            >
              View Source Code
            </a>
          ) : null}
          {contents.website ? (
            <a
              className='btn text-xs sm:text-sm rounded-none border-0 bg-black text-white hover:bg-black'
              href={contents.website}
              target='_blank'
              rel='noreferrer'
            >
              View Website
            </a>
          ) : null}
        </div>
        {contents.alert && (
          <small className='text-sm sm:text-md mt-4 bg-slate-300 p-2 text-center'>
            {contents.alert}
          </small>
        )}
        <div className='w-full mt-6 mb-6'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className='mySwiper'
          >
            {url.map((src, index) => {
              return (
                <SwiperSlide>
                  <img key={index} src={src} draggable={false}></img>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <h4 className='modal-content-heading font-semibold'>OVERVIEW</h4>
        <hr className='mt-1' />
        <p className='pt-2 text-gray-700 text-xs sm:text-sm ml-4'>
          {contents.desc}
        </p>

        <h4 className='modal-content-heading font-semibold mt-6'>FEATURES</h4>
        <hr className='mt-1' />
        <ul className='list-disc pl-6 mt-2'>
          {contents.features.map((feature, index) => {
            return (
              <li key={index} className='text-gray-700 text-sm sm:text-md'>
                {feature}
              </li>
            )
          })}
        </ul>
        <h4 className='modal-content-heading font-semibold mb-1 mt-6'>TECH</h4>
        <div className='flex flex-wrap pb-4'>
          {contents.techs.map((tech, index) => {
            return <img key={index} src={tech} className='p-0.5' />
          })}
        </div>
        <p
          className='text-gray-700 cursor-pointer inline lg:pb-8 text-sm'
          onClick={() => {
            navigate(-1)
          }}
        >
          &lt; Back
        </p>
      </div>
      {maxWidth >= 1024 ? null : <Footer />}
    </>
  )
}

export default Project
