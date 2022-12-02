import Thumbnail from './Thumbnail'

function MainGrid({ setModalOn }) {
  return (
    <div className='mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-8 sm:gap-4 w-10/12 lg:absolute lg:right-0 lg:mr-8 pb-10'>
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/haxa.webp')}
        title={'Haxa'}
        id={0}
        badges={['SASS', 'REACT', 'FIREBASE']}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/pokemon-guesser.webp')}
        title={'Pokemon Guesser'}
        id={1}
        badges={['SASS', 'REACT', 'API']}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/johnnyandco.webp')}
        title={'Johnny & Co.'}
        id={2}
        badges={['MONGODB', 'EXPRESS', 'REACT', 'NODEJS']}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/arnid.webp')}
        title={'Arnid Xiong'}
        id={3}
        badges={['HTML', 'CSS']}
      />

      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/neilkim.webp')}
        title={'Neil Kim'}
        id={4}
        badges={['GODOT']}
      />
    </div>
  )
}

export default MainGrid
