const technicalDecision = {
  devlog: [
    <>
      <li className='mt-2'>
        I used NextJS to develop the project with a more intuitive routing
        system. NextJS provides SEO-friendly features for React apps as well.
      </li>
      <li className='mt-2'>
        I decided to use TypeScript more than JavaScript. Since TypeScript
        enables developers to add type safety to projects. I realized a lot of
        companies are starting to use more TypeScript for this reason.
      </li>
      <li className='mt-2'>
        My specialty is programming and I'm looking for frontend web developer
        job. That's why I decided to focus more on developing rather than
        designing. Therefore I designed the project visually similar to{' '}
        <a
          href='https://velog.io/'
          target='_blank'
          rel='noreferrer'
          style={{ color: '#3366CC' }}
        >
          velog
        </a>
        .
      </li>
    </>,
  ],
  haxa: [
    <>
      <li className='mt-2'>
        I used ReactJS on purpose for one of the features in the project. My
        client required a filter that showed the products without page
        reloading.
      </li>
      <li className='mt-2'>
        I used Redux to optimize the data fetching logic. It lets me manage
        global states in an easier and more intuitive way as well.
      </li>
      <li className='mt-2'>
        My goal is to become a full-stack developer ultimately. However I want
        to focus on the frontend for now. That's why I decided to use Firebase
        rather than create a custom server. I have basic backend knowledge in
        NodeJS, Express, MongoDB, and MySQL.
      </li>
    </>,
  ],

  pokemon: [
    <>
      <li className='mt-2'>
        I separated two different fetch API logic to ‘onClick’ and ‘onChange’ on
        purpose. The ‘onChange’ is to fetch the data for the next question. The
        ‘onClick’ is to fetch the corresponding data based on the user’s
        selection. That way I could reduce the delay between page loading.{' '}
        <a
          href='https://github.com/bellhwi/pokemon-guesser/blob/main/src/components/Color.jsx'
          target='_blank'
          rel='noreferrer'
          style={{ color: '#3366CC' }}
        >
          Example code
        </a>
      </li>
      <li className='mt-2'>
        I used Sass to write the CSS code more efficiently. I could reduce
        repetitive code by using mixin syntax in Sass.{' '}
        <a
          href='https://github.com/bellhwi/pokemon-guesser/blob/main/src/App.scss'
          target='_blank'
          rel='noreferrer'
          style={{ color: '#3366CC' }}
        >
          Example code
        </a>
      </li>
    </>,
  ],
}

export { technicalDecision }
