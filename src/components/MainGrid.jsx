import Thumbnail from './Thumbnail'

function MainGrid({ setModalOn }) {
  return (
    <div className='mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-4 w-10/12 lg:absolute lg:right-0 lg:mr-8 pb-10'>
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/haxa.webp')}
        title={'Haxa'}
        id={0}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/pokemon-guesser.webp')}
        title={'Pokemon Guesser'}
        id={1}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/todoro.webp')}
        title={'Todoro'}
        id={2}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/arnid.webp')}
        title={'Arnid Xiong'}
        id={3}
      />
    </div>
  )
}

export default MainGrid
