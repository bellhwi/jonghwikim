import Thumbnail from './Thumbnail'

function MainGrid() {
  return (
    <div className='mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-8 w-10/12 lg:absolute lg:right-0 pb-10'>
      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/devlog.webp`}
        index={0}
        width='100%'
      />
      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/haxa.webp`}
        index={1}
        width='75%'
      />
      <Thumbnail
        url={`${process.env.PUBLIC_URL}/images/pokemon-guesser.webp`}
        index={2}
        width='45%'
      />
      <div className='flex justify-center mt-8'>
        <a
          className='btn text-sm rounded-none border border-black bg-transparent text-black hover:bg-transparent w-1/2 sm:w-3/4 lg:w-1/2'
          href='https://github.com/bellhwi'
          target='_blank'
          rel='noreferrer'
        >
          view more on github
        </a>
      </div>
    </div>
  )
}

export default MainGrid
