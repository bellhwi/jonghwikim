import { techURLs } from './techs'
import { overviews } from './overviews'
import { technicalDecision } from './technicalDecision'

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
      technicalDecision: (
        <div className='ml-2'>
          {technicalDecision['devlog'].map((desc, index) => {
            return <div key={index}>{desc}</div>
          })}
        </div>
      ),
      features: [
        <p>
          🌗 Light / dark mode:{' '}
          <a
            href='https://github.com/bellhwi/devlog/blob/main/components/Navbar.tsx#L79-L87'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            Example code
          </a>
        </p>,
        <p>
          🔍 Search blog post:{' '}
          <a
            href='https://github.com/bellhwi/devlog/blob/main/components/Navbar.tsx#L54-L72'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            Example code
          </a>
        </p>,
        <p>
          🗃️ Sort posts:{' '}
          <a
            href='https://github.com/bellhwi/devlog/blob/main/components/Sort.tsx#L8-L25'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            Example code
          </a>
        </p>,

        <p>📱 Responsive design</p>,
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
    title: 'Haxa',
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
      technicalDecision: (
        <div className='ml-2'>
          {technicalDecision['haxa'].map((desc, index) => {
            return <div key={index}>{desc}</div>
          })}
        </div>
      ),
      alert: (
        <p className='font-semibold'>
          Admin page is accessible by clicking the copyright text at footer!
          (admin@example.com / 123456)
        </p>
      ),
      features: [
        <p>
          🧑🏻‍💼 Admin product management:{' '}
          <a
            href='https://github.com/bellhwi/haxa/blob/main/src/pages/Edit.jsx#L86-L139'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            Example code
          </a>
        </p>,
        <p>
          🧑🏻‍💻 User authentication:{' '}
          <a
            href='https://github.com/bellhwi/haxa/blob/main/src/pages/Login.jsx#L61-L86'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            Example code
          </a>
        </p>,
        <p>
          🎯 Filter / sort product:{' '}
          <a
            href='https://github.com/bellhwi/haxa/blob/main/src/components/Products.jsx#L25-L73'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            Example code
          </a>
        </p>,
        <p>💳 PayPal integration</p>,
        <p>🔍 Search product</p>,
        <p>✨ Live inventory</p>,
        <p>📱 Responsive design</p>,
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
      technicalDecision: (
        <div className='ml-2'>
          {technicalDecision['pokemon'].map((desc, index) => {
            return <div key={index}>{desc}</div>
          })}
        </div>
      ),
      features: [
        <p>
          🤖 Different question algorithm by user response:{' '}
          <a
            href='https://github.com/bellhwi/pokemon-guesser/blob/main/src/components/FirstCharacter.jsx#L80-L105'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            Example code
          </a>
        </p>,
        <p>
          🎯 User selection filter:{' '}
          <a
            href='https://github.com/bellhwi/pokemon-guesser/blob/main/src/components/Letter.jsx#L29-L43'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            Example code
          </a>
        </p>,

        <p>
          🕹️{' '}
          <a
            href='https://pokeapi.co/'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            PokeAPI
          </a>{' '}
          project
        </p>,
        <p>🚫 Not found page</p>,
        <p>📱 Responsive design</p>,
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
]

export { data }
