import { setId } from '../store'
import { useDispatch, useSelector } from 'react-redux'

function Thumbnail({ url, title, setModalOn, id }) {
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
      <small className='block p-1'>{title}</small>
    </div>
  )
}

export default Thumbnail
