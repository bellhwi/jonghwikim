import Thumbnail from './Thumbnail'

function MainGrid() {
  return (
    <div className='mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-8 w-10/12 lg:absolute lg:right-0 pb-10'>
      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/haxa.webp`}
        index={0}
        scale='0.9'
      />
      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/arnid.webp`}
        index={1}
      />
      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/pokemon-guesser.webp`}
        index={2}
        scale='0.65'
      />
      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/johnnyandco.webp`}
        index={3}
        scale='0.5'
      />

      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/neilkim.webp`}
        index={4}
        scale='0.95'
      />
    </div>
  )
}

export default MainGrid
