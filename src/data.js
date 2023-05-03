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
    url: getURLs('prolog'),
    title: 'ProLog',
    id: 'prolog',
    badges: ['TYPESCRIPT', 'NEXTJS', 'REACT', 'CYPRESS', 'STORYBOOK'],
    contents: {
      heading: (
        <p>
          Error tracking tool that built on codebase during the{' '}
          <a
            href='https://profy.dev/'
            style={{ color: '#3366CC' }}
            target='_blank'
            rel='noreferrer'
          >
            React Job Simulator Program
          </a>
          .
        </p>
      ),
      desc: (
        <div className='ml-2'>
          {overviews['prolog'].map((desc, index) => {
            return <div key={index}>{desc}</div>
          })}
        </div>
      ),
      technicalDecision: (
        <div className='ml-2'>
          {technicalDecision['prolog'].map((desc, index) => {
            return <div key={index}>{desc}</div>
          })}
        </div>
      ),
      features: [
        <p>
          📄 Project list:{' '}
          <a
            href='https://github.com/profydev/prolog-app-bellhwi/blob/main/features/projects/components/project-list/project-list.tsx#L70-L111'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            Example code
          </a>
        </p>,
        <p>
          📫 REST API interaction:{' '}
          <a
            href='https://github.com/profydev/prolog-app-bellhwi/blob/main/api/issues.ts'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            Example code
          </a>
        </p>,
        <p>
          📋 Issue list table:{' '}
          <a
            href='https://github.com/profydev/prolog-app-bellhwi/blob/main/features/issues/components/issue-list/issue-list.tsx#L89-L184'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            Example code
          </a>
        </p>,
        <p>
          🔬 Test with Cypress:{' '}
          <a
            href='https://github.com/profydev/prolog-app-bellhwi/blob/main/cypress/e2e/issue-list.cy.ts'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            Example code
          </a>
        </p>,
        <p>
          📱 Ui kit:{' '}
          <a
            href='https://github.com/profydev/prolog-app-bellhwi/blob/main/features/ui/button/button.stories.tsx'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#3366CC' }}
          >
            Example code
          </a>
        </p>,
      ],
      techs: [
        techURLs.typescript,
        techURLs.nextjs,
        techURLs.react,
        techURLs.reactquery,
        techURLs.styledcomponents,
        techURLs.cypress,
        techURLs.jest,
        techURLs.storybook,
        techURLs.eslint,
        techURLs.prettier,
      ],
      github: 'https://github.com/profydev/prolog-app-bellhwi',
      website: 'https://prolog-react.vercel.app/dashboard',
    },
  },
  {
    url: getURLs('haxa'),
    title: 'Haxa',
    id: 'haxa',
    badges: ['REACT', 'REDUX', 'FIREBASE', 'SASS'],
    contents: {
      heading:
        'Freelance e-commerce project built with React for my entrepreneur client.',
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
    url: getURLs('devlog'),
    title: 'Devlog',
    id: 'devlog',
    badges: ['TYPESCRIPT', 'NEXTJS', 'REACT', 'REDUX', 'TAILWIND'],
    contents: {
      heading: 'Blog website built with NextJS & TypeScript.',
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
]

export { data }
