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
      <img src={url} draggable={false} className='thumbnail' />
    </div>
  )
}

export default Thumbnail
