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
        <p>Haxa is an eCommerce website that is outsourced from my client.</p>
        <small style={{ color: '#5a5a5a' }}>
          <em>
            admin@example.com / 123456 (*The admin page is accessible by
            clicking the copyright text at footer.)
          </em>
        </small>
      </>
      //       <div className='modal-content'>
      //         <div className='modal-desc-container'>
      //           <p className='modal-desc'>
      //             Haxa is an eCommerce website that is outsourced from my client 🌱
      //           </p>
      //           <small style={{ color: '#5a5a5a' }}>
      //             <em>
      //               admin@example.com / 123456 (*The admin page is accessible by
      //               clicking the copyright text at footer.)
      //             </em>
      //           </small>
      //         </div>
      //         <h4 className='modal-content-heading'>Features</h4>
      //         <ul>
      //           <li>💎 Freelance project</li>
      //           <li>🧑🏻‍💻 User authentication</li>
      //           <li>🔍 Search product</li>
      //           <li>🧑🏻‍💼 Admin product management</li>
      //           <li>🎯 Filter / sort product</li>
      //           <li>💳 PayPal integration</li>
      //           <li>✨ Live inventory</li>
      //         </ul>
      //         <h4 className='modal-content-heading'>Tech</h4>
      //         <div className='flex flex-wrap'>
      //           <img
      //             src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
      //             alt='HTML'
      //           />
      //           <img
      //             src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
      // '
      //             alt='CSS'
      //           />
      //           <img
      //             src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
      // '
      //             alt='Javascript'
      //           />
      //           <img
      //             src='https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
      // '
      //             alt='Sass'
      //           />
      //           <img
      //             src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
      // '
      //             alt='React'
      //           />
      //           <img
      //             src='https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
      // '
      //             alt='Redux'
      //           />
      //           <img
      //             src='https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black
      // '
      //             alt='Firebase'
      //           />
      //         </div>
      //       </div>
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
    url: getURLs('neilkim'),
    title: 'Neil Kim',
    desc: 'Neil Kim an independent game that I developed and published online.',
    website: 'https://jonghwikim.itch.io/neil-kim',
    badges: ['GODOT'],
  },
]

export { data }
