import Thumbnail from './Thumbnail'

function MainGrid({ setModalOn }) {
  return (
    <div className='mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-8 sm:gap-12 w-10/12 lg:absolute lg:right-0 lg:mr-8 pb-10'>
      <Thumbnail
        setModalOn={setModalOn}
        url={`${process.env.PUBLIC_URL}/images/haxa.webp`}
        title={'Haxa'}
        id={0}
        badges={['SASS', 'REACT', 'FIREBASE']}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={`${process.env.PUBLIC_URL}/images/arnid.webp`}
        title={'Arnid Xiong'}
        id={1}
        badges={['HTML', 'CSS']}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={`${process.env.PUBLIC_URL}/images/pokemon-guesser.webp`}
        title={'Pokemon Guesser'}
        id={2}
        badges={['SASS', 'REACT', 'API']}
        scale='0.7'
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={`${process.env.PUBLIC_URL}/images/johnnyandco.webp`}
        title={'Johnny & Co.'}
        id={3}
        badges={['MONGODB', 'EXPRESS', 'REACT', 'NODEJS']}
        scale='0.55'
      />

      <Thumbnail
        setModalOn={setModalOn}
        url={`${process.env.PUBLIC_URL}/images/neilkim.webp`}
        title={'Neil Kim'}
        id={4}
        badges={['GODOT']}
        scale='0.9'
      />
    </div>
  )
}

export default MainGrid
