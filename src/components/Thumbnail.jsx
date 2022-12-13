import { useNavigate } from 'react-router-dom'
import { data } from '../data'

function Thumbnail({ url, index, scale }) {
  const navigate = useNavigate()
  return (
    <div
      className='relative cursor-pointer'
      style={{ transform: `scale(${scale})` }}
      onClick={() => {
        navigate(`/${data[index].id}`)
      }}
    >
      <img
        src={url}
        draggable={false}
        className='saturate-0 transition-all hover:saturate-100 duration-500'
      />
    </div>
  )
}

export default Thumbnail
