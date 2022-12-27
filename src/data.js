import { techURLs } from './techs'
import { overviews } from './overviews'

const getURLs = (fileName) => {
  const urls = [...new Array(3).keys()].map((index) => {
    return `${process.env.PUBLIC_URL}/images/${fileName}${index}.webp`
  })

  return urls
}

const data = [
  {
    url: getURLs('devlog'),
    title: 'Devlog',
    id: 'devlog',
    badges: ['NEXTJS', 'TYPESCRIPT', 'REACT', 'REDUX', 'TAILWIND'],
    contents: {
      heading: 'Blog website built with NextJS & Typescript.',
      desc: (
        <div className='ml-2'>
          {overviews['devlog'].map((desc, index) => {
            return <div key={index}>{desc}</div>
          })}
        </div>
      ),
      features: [
        '🔍 Search blog post',
        '🗃️ Sort posts',
        '🌗 Light / dark mode',
        '📱 Responsive design',
      ],
      techs: [
        techURLs.nextjs,
        techURLs.typescript,
        techURLs.react,
        techURLs.redux,
        techURLs.tailwind,
      ],
      github: 'https://github.com/bellhwi/devlog',
      website: 'https://devlog-next.vercel.app/',
    },
  },
  {
    url: getURLs('haxa'),
    title: 'Client project: Haxa',
    id: 'haxa',
    badges: ['REACT', 'REDUX', 'FIREBASE', 'SASS'],
    contents: {
      heading:
        'eCommerce project built with React & Firebase for my entrepreneur client.',
      desc: (
        <div className='ml-2'>
          {overviews['haxa'].map((desc, index) => {
            return <div key={index}>{desc}</div>
          })}
        </div>
      ),
      alert: (
        <div className='flex flex-col items-start'>
          <p className='font-semibold'>
            Admin page is accessible by clicking the copyright text at footer!
          </p>
          <p>admin@example.com / 123456</p>
        </div>
      ),
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
    title: 'Client project: Arnid Xiong',
    badges: ['HTML', 'CSS'],
    contents: {
      heading:
        'Portfolio website built with HTML and CSS for my graphic designer client.',
      desc: (
        <div className='ml-2'>
          {overviews['arnid'].map((desc, index) => {
            return <div key={index}>{desc}</div>
          })}
        </div>
      ),
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
    badges: ['SASS', 'REACT', 'REDUX', 'API'],
    contents: {
      heading: (
        <>
          <a
            href='https://pokeapi.co/'
            style={{ color: '#3366CC' }}
            target='_blank'
            rel='noreferrer'
          >
            PokeAPI
          </a>{' '}
          project built with React & Redux.
        </>
      ),
      desc: (
        <div className='ml-2'>
          {overviews['pokemon'].map((desc, index) => {
            return <div key={index}>{desc}</div>
          })}
        </div>
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
    badges: ['MONGODB', 'EXPRESS', 'NODEJS', 'REACT', 'REDUX'],
    contents: {
      heading: 'eCommerce website built with MERN stack.',
      desc: (
        <div className='ml-2'>
          {overviews['johnnyandco'].map((desc, index) => {
            return <div key={index}>{desc}</div>
          })}
        </div>
      ),
      alert: (
        <div className='flex flex-col items-start'>
          <p className='font-semibold'>Admin page is available!</p>
          <p>admin@example.com / 123456</p>
        </div>
      ),
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
    badges: ['GODOT'],
    contents: {
      heading: '2D platformer game built with Godot game engine.',
      desc: (
        <div className='ml-2'>
          {overviews['neilkim'].map((desc, index) => {
            return <div key={index}>{desc}</div>
          })}
        </div>
      ),
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
