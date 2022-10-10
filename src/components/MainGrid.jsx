import Thumbnail from './Thumbnail'

function MainGrid({ setModalOn }) {
  return (
    <div className='mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-4 w-10/12 lg:absolute lg:right-0 lg:mr-8 pb-10'>
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/haxa.png')}
        title={'Haxa'}
        id={0}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/pokemon-guesser.png')}
        title={'Pokemon Guesser'}
        id={1}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/todoro.png')}
        title={'Todo List'}
        id={2}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/arnid.png')}
        title={"Graphic Designer's Portfolio"}
        id={3}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/baegopa.png')}
        title={'Food Recommend'}
        id={4}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/itea.png')}
        title={'Redesign iTea'}
        id={5}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/neilkim.jpeg')}
        title={'Neil Kim'}
        id={6}
      />
      <Thumbnail
        setModalOn={setModalOn}
        url={require('../images/squarehead.png')}
        title={'Squarehead'}
        id={7}
      />
    </div>
  )
}

export default MainGrid
