const getURLs = (fileName) => {
  const urls = [...new Array(3).keys()].map((index) => {
    return `${process.env.PUBLIC_URL}/images/${fileName}${index}.webp`
  })

  return urls
}

const techURLs = {
  html: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
  css: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
  javascript:
    'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
  sass: 'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white',
  react:
    'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
  redux:
    'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white',
  firebase:
    'https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black',
  nodejs:
    'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
  mongodb:
    'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
  express:
    'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white',
  godot:
    'https://img.shields.io/badge/Godot-478CBF?style=for-the-badge&logo=GodotEngine&logoColor=white',
  gcloud:
    'https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white',
}

const data = [
  {
    url: getURLs('haxa'),
    title: 'Haxa',
    id: 'haxa',
    contents: {
      heading: 'eCommerce website built with React & Firebase.',
      desc: 'Haxa is the eCommerce project for my entrepreneur client. I closely communicated with my client to meet his visual and functional requirements. After discussion, I designed and developed an entire website and deployed it.',
      alert:
        '📌 Admin page is accessible by clicking the copyright text at footer. (admin@example.com / 123456)',
      features: [
        '🧑🏻‍💻 User authentication',
        '🔍 Search product',
        '🧑🏻‍💼 Admin product management',
        '🎯 Filter / sort product',
        '💳 PayPal integration',
        '✨ Live inventory',
      ],
      techs: [
        techURLs.html,
        techURLs.css,
        techURLs.javascript,
        techURLs.sass,
        techURLs.react,
        techURLs.redux,
        techURLs.firebase,
      ],
      github: 'https://github.com/bellhwi/haxa',
      website: 'https://haxalabs.com/',
    },
  },
  {
    url: getURLs('arnid'),
    id: 'arnidxiong',
    title: 'Arnid Xiong',
    contents: {
      heading: 'Graphic design portfolio website built with HTML, CSS.',
      desc: 'Arnid Xiong is a portfolio project for my graphic designer client. She provided a wireframe and requested me to implement it on the website. I developed this project without any frameworks.',
      features: [
        '💻 Wireframe design to code',
        '📱 Responsive design',
        '🎨 Design with pure CSS',
        '🧭 See more navigation',
      ],
      techs: [techURLs.html, techURLs.css],
      github: 'https://github.com/bellhwi/ArnidXiong',
      website: 'https://arnidxiong.co/',
    },
  },
  {
    url: getURLs('pokemon-guesser'),
    id: 'pokemon-guesser',
    title: 'Pokemon Guesser',
    contents: {
      heading: (
        <>
          <a
            href='https://pokeapi.co/'
            style={{ color: '#3366CC' }}
            target='_blank'
          >
            PokeAPI
          </a>{' '}
          project built with React & Redux.
        </>
      ),
      desc: (
        <>
          Pokemon Guesser is an API project where users can play a guess game. I
          made this website out of my interest in Pokemon. I wrote a code logic
          that questions might vary based on user answers. I implemented
          algorithms that narrow down the Pokemon until the only one is left.
        </>
      ),
      features: [
        '🕹️ Fetch API',
        '🎯 User selection filter',
        '🤖 Different question algorithm by user response',
        '🚫 Not found page',
      ],
      techs: [
        techURLs.html,
        techURLs.css,
        techURLs.javascript,
        techURLs.sass,
        techURLs.react,
        techURLs.redux,
      ],
      github: 'https://github.com/bellhwi/pokemon-guesser',
      website: 'https://pokemon-guesser.netlify.app/',
    },
  },
  {
    url: getURLs('johnnyandco'),
    id: 'johnny-and-co',
    title: 'Johnny & Co.',
    contents: {
      heading: 'eCommerce website built with MERN stack.',
      desc: (
        <>
          Johnny & Co. is an eCommerce website that I developed along with this{' '}
          <a
            href='https://www.udemy.com/course/mern-ecommerce/'
            style={{ color: '#3366CC' }}
            target='_blank'
          >
            Udemy course
          </a>
          . I gained better understanding of full stack development from this
          hands-on project. I customized a design inspired by{' '}
          <a
            href='https://www.tiffany.com/'
            style={{ color: '#3366CC' }}
            target='_blank'
          >
            Tiffany & Co.
          </a>{' '}
          official website. I used Google Cloud Platform for hosting.
        </>
      ),
      alert: '📌 Admin page is available. (admin@example.com / 123456)',
      features: [
        '🧑🏻‍💼 Admin product management',
        '👨‍👩‍👦 Admin user management',
        '🎁 Admin order management',
        '💳 PayPal / credit card integration',
        '⭐️ Product reviews / ratings',
        '🔍 Search product',
        '🛒 Shopping cart',
        '👩🏻 User profile with orders',
        '🚚 Checkout process (shipping, payment method, etc.)',
      ],
      techs: [
        techURLs.html,
        techURLs.css,
        techURLs.javascript,
        techURLs.react,
        techURLs.redux,
        techURLs.nodejs,
        techURLs.mongodb,
        techURLs.express,
        techURLs.gcloud,
      ],
      github: 'https://github.com/bellhwi/johnnyandco',
      website: 'https://johnnyandco.uc.r.appspot.com/',
    },
  },
  {
    url: getURLs('neilkim'),
    id: 'neil-kim',
    title: 'Neil Kim',
    contents: {
      heading: '2D platformer game built with Godot game engine.',
      desc: 'Neil Kim is an independent game that I developed and published online. I created this game to experience game development. I performed an entire process of game production including planning, designing, developing, testing, publishing and marketing.',
      features: [
        '🧨 10 exclusive weapons',
        '🎮 21 levels',
        '👾 37 miscellaneous enemy abilities',
        '🚨 Various difficulty mechanics by detection status',
        '📘 Unique storyline through collectible items',
      ],
      techs: [techURLs.godot],
      website: 'https://jonghwikim.itch.io/neil-kim',
    },
  },
]

export { data }
