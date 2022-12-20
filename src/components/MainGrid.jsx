import Thumbnail from './Thumbnail'

function MainGrid() {
  return (
    <div className='mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-8 w-10/12 lg:absolute lg:right-0 pb-10 test'>
      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/devlog.webp`}
        index={0}
        width='100%'
        lgPadding
      />
      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/haxa.webp`}
        index={1}
        width='75%'
      />
      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/arnid.webp`}
        index={2}
        width='80%'
      />
      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/pokemon-guesser.webp`}
        index={3}
        width='45%'
      />
      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/johnnyandco.webp`}
        index={4}
        width='35%'
      />

      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/neilkim.webp`}
        index={5}
        width='80%'
      />
    </div>
  )
}

export default MainGrid
