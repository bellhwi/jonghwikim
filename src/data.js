const getURLs = (fileName) => {
  const urls = [...new Array(3).keys()].map((index) => {
    return `${process.env.PUBLIC_URL}/images/${fileName}${index}.webp`
  })

  return urls
}

const data = [
  {
    url: getURLs('haxa'),
    title: 'Haxa',
    desc: (
      <>
        Haxa is an eCommerce website that is outsourced from my client.
        <br></br>
        <small style={{ color: '#5a5a5a' }}>
          <em>
            admin@example.com / 123456 (*The admin page is accessible by
            clicking the copyright text at footer.)
          </em>
        </small>
      </>
    ),
    github: 'https://github.com/bellhwi/haxa',
    website: 'https://haxalabs.com/',
    badges: ['SASS', 'REACT', 'FIREBASE'],
  },
  {
    url: getURLs('arnid'),
    title: 'Arnid Xiong',
    desc: 'Arnid Xiong is a graphic design portfolio website for one of my clients.',
    github: 'https://github.com/bellhwi/ArnidXiong',
    website: 'https://arnidxiong.co/',
    badges: ['HTML', 'CSS'],
  },
  {
    url: getURLs('pokemon-guesser'),
    title: 'Pokemon Guesser',
    desc: (
      <>
        Pokemon Guesser is an{' '}
        <a href='https://pokeapi.co/' style={{ color: '#3366CC' }}>
          PokeAPI
        </a>{' '}
        project where users can play a guess game.
      </>
    ),
    github: 'https://github.com/bellhwi/pokemon-guesser',
    website: 'https://pokemon-guesser.netlify.app/',
    badges: ['SASS', 'REACT', 'API'],
  },
  {
    url: getURLs('johnnyandco'),
    title: 'Johnny & Co.',
    desc: (
      <>
        Johnny & Co. is an E-Commerce website created with MERN stack.
        <br></br>
        <small style={{ color: '#5a5a5a' }}>
          <em>admin@example.com / 123456</em>
        </small>
      </>
    ),
    github: 'https://github.com/bellhwi/johnnyandco',
    website: 'https://johnnyandco.uc.r.appspot.com/',
    badges: ['MONGODB', 'EXPRESS', 'REACT', 'NODEJS'],
  },
  {
    url: getURLs('todoro'),
    title: 'Todoro',
    desc: 'Todoro is a simple todo list with progress bar feature.',
    github: 'https://github.com/bellhwi/todoro',
    website: 'https://todoro-react.netlify.app/',
    badges: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
  },

  {
    url: getURLs('neilkim'),
    title: 'Neil Kim',
    desc: 'Neil Kim an independent game that I developed and published online.',
    website: 'https://jonghwikim.itch.io/neil-kim',
    badges: ['GODOT'],
  },
]

export { data }
