import { setId } from '../store'
import { useDispatch } from 'react-redux'

function Thumbnail({ url, title, setModalOn, id, badges }) {
  const dispatch = useDispatch()
  return (
    <div
      className='thumbnail'
      onClick={(e) => {
        const div = e.target.parentElement
        let promise = new Promise((res) =>
          res(dispatch(setId(parseInt(div.getAttribute('data-id')))))
        )

        promise.then(() => setModalOn(true))
      }}
      data-id={id}
    >
      <img src={url} />
      <div className='flex mt-2'>
        {badges &&
          badges.map((badge, index) => {
            return (
              <div key={index} className={`badge badge-outline mr-1 ${badge}`}>
                {badge}
              </div>
            )
          })}
      </div>
      <small className='block p-2 thumbnail-title'>{title}</small>
    </div>
  )
}

export default Thumbnail
