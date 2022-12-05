import { setId } from '../store'
import { useDispatch } from 'react-redux'

function Thumbnail({ url, setModalOn, id, scale }) {
  const dispatch = useDispatch()
  return (
    <div
      className='thumbnail'
      style={{ transform: `scale(${scale})` }}
      onClick={(e) => {
        const div = e.target.parentElement
        let promise = new Promise((res) =>
          res(dispatch(setId(parseInt(div.getAttribute('data-id')))))
        )

        promise
          .then(() => setModalOn(true))
          .then(
            () =>
              setTimeout(() =>
                document.querySelector('.myModal').classList.add('show')
              ),
            100
          )
      }}
      data-id={id}
    >
      <img src={url} draggable={false} />
    </div>
  )
}

export default Thumbnail
