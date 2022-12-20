import { useNavigate } from 'react-router-dom'
import { data } from '../data'

function Thumbnail({ url, index, width }) {
  const navigate = useNavigate()
  return (
    <div
      className='thumbnail relative cursor-pointer flex flex-col shadow-lg p-4'
      onClick={() => {
        navigate(`/${data[index].id}`)
      }}
    >
      <img
        src={url}
        draggable={false}
        className='mx-auto'
        style={{ width: `${width}` }}
      />
      <div className='mt-2'>
        {data[index].badges.map((badge, i) => {
          return (
            <div
              key={i}
              className={`badge badge-outline ${badge} badge-sm m-0.5`}
            >
              {badge}
            </div>
          )
        })}
        <h1 className='mt-1 text-gray-600 text-xs sm:text-sm'>
          {data[index].title}
        </h1>
      </div>
    </div>
  )
}

export default Thumbnail
