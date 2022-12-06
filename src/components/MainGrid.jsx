import Thumbnail from './Thumbnail'

function MainGrid({ setModalOn }) {
  return (
    <div className='mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-8 w-10/12 lg:absolute lg:right-0 pb-10'>
      <Thumbnail
        setModalOn={setModalOn}
        url={`${process.env.PUBLIC_URL}/images/haxa.webp`}
        id={0}
        scale='0.9'
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={`${process.env.PUBLIC_URL}/images/arnid.webp`}
        id={1}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={`${process.env.PUBLIC_URL}/images/pokemon-guesser.webp`}
        id={2}
        scale='0.65'
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={`${process.env.PUBLIC_URL}/images/johnnyandco.webp`}
        id={3}
        scale='0.5'
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={`${process.env.PUBLIC_URL}/images/todoro.webp`}
        id={4}
        scale='0.6'
      />

      <Thumbnail
        setModalOn={setModalOn}
        url={`${process.env.PUBLIC_URL}/images/neilkim.webp`}
        id={5}
        scale='0.95'
      />
    </div>
  )
}

export default MainGrid
