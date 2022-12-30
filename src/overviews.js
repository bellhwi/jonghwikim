const overviews = {
  devlog: [
    <>
      <h4 className='font-semibold'>How did I build it?</h4>
      <p className='ml-2 mt-0.5'>
        Devlog is an imitation website of{' '}
        <a
          href='https://velog.io/'
          target='_blank'
          rel='noreferrer'
          style={{ color: '#3366CC' }}
        >
          velog
        </a>
        , the developer's blog. I'm currently studying how to use NextJS with
        Typescript. I created this website to learn from hands-on project.
      </p>
      <h4 className='font-semibold mt-3'>
        What was the most challenging part?
      </h4>
      <p className='ml-2 mt-0.5'>
        The most challenging part was learning the new routing system of NextJS.
        I had to write code logics to get url params in order to fetch post data
        locally. I used the 'useRouter' hook of NextJS to achieve that. This
        code logic produced an pre-rendering type error that says I'm trying to
        use undefined data. I had to figure out what was causing the issue.
      </p>
      <h4 className='font-semibold mt-3'>How did I solve it?</h4>
      <p className='ml-2 mt-0.5'>
        The problem occurred since the Post component is trying to use the url
        param before the page renders. I used the 'useEffect' hook to make the
        code run only after rendering.
      </p>
      <h4 className='font-semibold mt-3'>What was the most fun part?</h4>
      <p className='ml-2 mt-0.5'>
        The most fun part was the cool development experience. The way of how
        React displays an error is showing white blank space only. Unlike that,
        NextJS shows an error on the browser which makes it easier to debug the
        code. The error log can be viewed in the terminal of the code editor, as
        well. This feature saves a lot of time debugging compared to using the
        developer's tool in the browser.
      </p>
      <h4 className='font-semibold mt-3'>What did I learn?</h4>
      <p className='ml-2 mt-0.5'>
        I learned a new routing system in NextJS. It was more visually intuitive
        to structure routes under the pages folder. Along the way, I learned how
        to manipulate routes dynamically with new [fileNameFormat].tsx and URL
        params. I learned how to set type for variables, functions and
        parameters using TypeScript, as well. It was strictly required to write
        code with types in order to prevent type errors. I gained a better
        understanding of the main reason why people use TypeScript from this
        project.
      </p>
      <h4 className='font-semibold mt-3'>
        What will I do differently next time?
      </h4>
      <p className='ml-2 mt-0.5'>
        If I were to start this project all over again, I'd want to research how
        to connect the NextJS app with Firebase first. I presumed that it would
        work the same as React which was not the case. When I tried to use
        Firebase with an app, It required a paid plan since my project was using
        Image tag for image optimization. I had to minimize the project scope to
        avoid using charged service. If I knew that ahead of time, I wouldn't
        waste time implementing something that I don't need.
      </p>
    </>,
  ],
  haxa: [
    <>
      <h4 className='font-semibold'>How did I build it?</h4>
      <p className='ml-2 mt-0.5'>
        Haxa is the eCommerce project for my entrepreneur client. I closely
        communicated with my client to meet his visual and functional
        requirements. After discussion, I designed and developed an entire
        website and deployed it.
      </p>
      <h4 className='font-semibold mt-3'>
        What was the most challenging part?
      </h4>
      <p className='ml-2 mt-0.5'>
        I used Firebase database and storage for this project. I had to write
        code logics to fetch the products data. That code logic was being called
        every time I opened the products page. I found out that this number of
        fetching data causes quite a bit of loading delay. I had to solve this
        problem to make my website run faster.{' '}
        <a
          href='https://docs.google.com/document/d/1cCmYlvT7zN1VVJ4X7mH-5sxntNe4PvYZ5K1fgKZWyMg/edit'
          style={{ color: '#3366CC' }}
          target='_blank'
          rel='noreferrer'
        >
          See more on Google Docs.
        </a>
      </p>
      <h4 className='font-semibold mt-3'>How did I solve it?</h4>
      <p className='ml-2 mt-0.5'>
        I used Redux and the ‘useEffect’ hook in React to optimize data fetching
        logic. It stores data in a state after the component is rendered
        initially. I set the last product update time as a dependency to fetch
        data only when there is a change made. In this way, I could improve the
        performance of my website.
      </p>
      <h4 className='font-semibold mt-3'>What was the most fun part?</h4>
      <p className='ml-2 mt-0.5'>
        The most fun part was creating an admin page. It was my very first time
        implementing this feature with Firebase. I had to read the official
        document on Google Firebase to come up with code logics. I was surprised
        to see how the Firebase handles the data and makes it easy to apply
        backend to my web app. I enjoyed learning this new technology.
      </p>
      <h4 className='font-semibold mt-3'>What did I learn?</h4>
      <p className='ml-2 mt-0.5'>
        I learned how to build a full stack web app with the Firebase. It was
        significant achievement for me since it was my first website that is
        connected to the database. I learned how to integrate a PayPal payment
        with my app, as well. It was way more simple that I thought. It taught
        me that I shouldn't assume implementing new feature in the project is
        complicated. I learned that I should always be opened to face a new
        challenge and go over my comfort zone.
      </p>
      <h4 className='font-semibold mt-3'>
        What will I do differently next time?
      </h4>
      <p className='ml-2 mt-0.5'>
        I want to create a wireframe before starting to develop the website next
        time. At the early stage of the project, I didn't want to spend too much
        time coming up with design. I dived into the project with a very simple
        and vague design decision. I had no detailed visual blueprint of the
        completed project at all. It caused a lot of debating in terms of design
        during the development process. I had to spend way more time than I
        expected for this part. I overlooked the decision making of website
        design could be very time consuming overall the project. I'll definitely
        use design tools to create a detailed wireframe of the project next
        time.
      </p>
    </>,
  ],

  pokemon: [
    <>
      <h4 className='font-semibold'>How did I build it?</h4>
      <p className='ml-2 mt-0.5'>
        Pokemon Guesser is an API project where users can play a guess game. I
        made this website out of my interest in Pokemon. I wrote a code logic
        that questions might vary based on user answers. I implemented
        algorithms that narrow down the Pokemon until the only one is left.
      </p>
      <h4 className='font-semibold mt-3'>
        What was the most challenging part?
      </h4>
      <p className='ml-2 mt-0.5'>
        The goal of this project was to collect information of the Pokemon that
        users have come up with and guess it. I had to write the code logic that
        can guess the user's Pokemon accurately. I needed to figure out how to
        filter the common item between different arrays.
      </p>
      <h4 className='font-semibold mt-3'>How did I solve it?</h4>
      <p className='ml-2 mt-0.5'>
        I used the 'Filter' function of Javascript to find duplicates. After
        that, I used the 'Set' object to remove duplicates and leave only one. I
        applied this code logic on each question until the user reached the
        final result.
      </p>
      <h4 className='font-semibold mt-3'>What was the most fun part?</h4>
      <p className='ml-2 mt-0.5'>
        This was my first API project that I developed with React and Redux. I
        enjoyed playing around with the Pokemon API which is my favorite IP. At
        the same time, I gained a better understanding on how Redux works due to
        this project. Seeing this mini Pokemon game work as expected was the
        most fun part.
      </p>
      <h4 className='font-semibold mt-3'>What did I learn?</h4>
      <p className='ml-2 mt-0.5'>
        I learned how to use React to build a Single Page Application. I was
        able to understand how the components, props and states work in React. I
        realized what is the benefit of using Redux from the project, as well. I
        could manage global states way easier with Redux compared to using React
        only. I learned how to build a website using an external API. Along the
        way, I could understand how to deal with JSON data.
      </p>
      <h4 className='font-semibold mt-3'>
        What will I do differently next time?
      </h4>
      <p className='ml-2 mt-0.5'>
        If I were to start over this project, I'd love to start building with
        'mobile-first' practice. I started building the project focusing on the
        design for a desktop screen. I didn't consider responsive design at that
        point. By the time I finished designing, I found out that it's hard to
        apply responsive design with the styles I wrote in CSS. I had to start
        over writing new CSS codes for some parts to fix the problem. I'll
        target mobile screens first in terms of design next time.
      </p>
    </>,
  ],
}

export { overviews }
