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
    </>,
    <>
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
    </>,
    <>
      <h4 className='font-semibold mt-3'>How did I solve it?</h4>
      <p className='ml-2 mt-0.5'>
        The problem occurred since the Post component is trying to use the url
        param before the page renders. I used the 'useEffect' hook to make the
        code run only after rendering.
      </p>
    </>,
    <>
      <h4 className='font-semibold mt-3'>What was the most fun part?</h4>
      <p className='ml-2 mt-0.5'>
        The most fun part was the cool development experience. The way of how
        React displays an error is showing white blank space only. Unlike that,
        NextJS shows an error on the browser which makes it easier to debug the
        code. The error log can be viewed in the terminal of the code editor, as
        well. This feature saves a lot of time debugging compared to using the
        developer's tool in the browser.
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
    </>,
    <>
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
    </>,
    <>
      <h4 className='font-semibold mt-3'>How did I solve it?</h4>
      <p className='ml-2 mt-0.5'>
        I used Redux and the ‘useEffect’ hook in React to optimize data fetching
        logic. It stores data in a state after the component is rendered
        initially. I set the last product update time as a dependency to fetch
        data only when there is a change made. In this way, I could improve the
        performance of my website.
      </p>
    </>,
    <>
      <h4 className='font-semibold mt-3'>What was the most fun part?</h4>
      <p className='ml-2 mt-0.5'>
        The most fun part was creating an admin page. It was my very first time
        implementing this feature with Firebase. I had to read the official
        document on Google Firebase to come up with code logics. I was surprised
        to see how the Firebase handles the data and makes it easy to apply
        backend to my web app. I enjoyed learning this new technology.
      </p>
    </>,
  ],
  arnid: [
    <>
      <h4 className='font-semibold'>How did I build it?</h4>
      <p className='ml-2 mt-0.5'>
        Arnid Xiong is a portfolio project for my graphic designer client. She
        provided a wireframe and requested me to implement it on the website. I
        developed this project without any frameworks.
      </p>
    </>,
    <>
      <h4 className='font-semibold mt-3'>
        What was the most challenging part?
      </h4>
      <p className='ml-2 mt-0.5'>
        My client wanted to display each of her work in the same shape. I had to
        adjust a whole different size of her work to fit in the same 1:1 ratio
        square. I had to figure out how to implement this request from a CSS
        perspective.
      </p>
    </>,
    <>
      <h4 className='font-semibold mt-3'>How did I solve it?</h4>
      <p className='ml-2 mt-0.5'>
        I used the CSS property 'aspect-ratio: 1;' to keep the 1:1 ratio of each
        image. I applied 'object-fit: cover;' to maintain its aspect ratio while
        filling the element's entire content box.
      </p>
    </>,
    <>
      <h4 className='font-semibold mt-3'>What was the most fun part?</h4>
      <p className='ml-2 mt-0.5'>
        This project was my very first freelance work. I had fun communicating
        with the client. I was satisfied to build something useful for people
        who need it. Due to this experience, I started focusing on 'what value
        to offer' when it comes to software development.
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
    </>,
    <>
      <h4 className='font-semibold mt-3'>
        What was the most challenging part?
      </h4>
      <p className='ml-2 mt-0.5'>
        The goal of this project was to collect information of the Pokemon that
        users have come up with and guess it. I had to write the code logic that
        can guess the user's Pokemon accurately. I needed to figure out how to
        filter the common item between different arrays.
      </p>
    </>,
    <>
      <h4 className='font-semibold mt-3'>How did I solve it?</h4>
      <p className='ml-2 mt-0.5'>
        I used the 'Filter' function of Javascript to find duplicates. After
        that, I used the 'Set' object to remove duplicates and leave only one. I
        applied this code logic on each question until the user reached the
        final result.
      </p>
    </>,
    <>
      <h4 className='font-semibold mt-3'>What was the most fun part?</h4>
      <p className='ml-2 mt-0.5'>
        This was my first API project that I developed with React and Redux. I
        enjoyed playing around with the Pokemon API which is my favorite IP. At
        the same time, I gained a better understanding on how Redux works due to
        this project. Seeing this mini Pokemon game work as expected was the
        most fun part.
      </p>
    </>,
  ],
  johnnyandco: [
    <>
      <h4 className='font-semibold'>How did I build it?</h4>
      <p className='ml-2 mt-0.5'>
        Johnny & Co. is an eCommerce website that I developed along with this{' '}
        <a
          href='https://www.udemy.com/course/mern-ecommerce/'
          style={{ color: '#3366CC' }}
          target='_blank'
          rel='noreferrer'
        >
          Udemy course
        </a>
        . I learned how full stack development works from this hands-on project.
        I customized a design inspired by{' '}
        <a
          href='https://www.tiffany.com/'
          style={{ color: '#3366CC' }}
          target='_blank'
          rel='noreferrer'
        >
          Tiffany & Co.
        </a>{' '}
        I used Google Cloud Platform for hosting.
      </p>
    </>,
    <>
      <h4 className='font-semibold mt-3'>
        What was the most challenging part?
      </h4>
      <p className='ml-2 mt-0.5'>
        It was quite hard to understand the concept of how the frontend and
        backend are connected and work. Especially, having a grasp on the server
        design pattern like controllers, middleware, models etc. were confusing.
        I had to figure out how this full stack web app works technically.
      </p>
    </>,
    <>
      <h4 className='font-semibold mt-3'>How did I solve it?</h4>
      <p className='ml-2 mt-0.5'>
        I customized the website design and changed the sample products. While I
        applied a different look to the project, I could play around with the
        codes. Along the way, I started to understand how this complex web app
        works. I figured out where the data came from and how it was delivered
        to the end user's screen eventually.
      </p>
    </>,
    <>
      <h4 className='font-semibold mt-3'>What was the most fun part?</h4>
      <p className='ml-2 mt-0.5'>
        Figuring out how the full stack web app works was the hard part but it
        was interesting at the same time. There were a lot of new concepts that
        I didn't know before such as the server design pattern. I learned the
        basics of the backend technologies like MongoDB, Mongoose, NodeJS and
        Express. It helped me understand deeper in terms of how the client and
        server works on the internet.
      </p>
    </>,
  ],
  neilkim: [
    <>
      <h4 className='font-semibold'>How did I build it?</h4>
      <p className='ml-2 mt-0.5'>
        Neil Kim is an independent game that I developed and published online. I
        created this game to experience game development. I chose this game
        genre since I used to like playing these kinds. I got inspired by my
        childhood games; Metal Slug and Megaman.
      </p>
    </>,
    <>
      <h4 className='font-semibold mt-3'>
        What was the most challenging part?
      </h4>
      <p className='ml-2 mt-0.5'>
        Doing everything on my own was the hardest part. I performed an entire
        process of game production including planning, designing, developing,
        testing, publishing and marketing. I used pixel-art for characters and
        animations. Especially, this graphic designing part was challenging the
        most since there were a lot of things to draw like player, enemies,
        backgrounds and etc. I wanted to focus more on game mechanics and player
        experience other than drawing. I had to figure out how to reduce time on
        graphic work.
      </p>
    </>,
    <>
      <h4 className='font-semibold mt-3'>How did I solve it?</h4>
      <p className='ml-2 mt-0.5'>
        I found out that there are online stores that sell graphic assets
        including pixel-art. I bought graphic assets for my background. I used
        free open source audio assets for my sound effects. I had to search a
        lot to find the best assets that match the game mood. For the game
        mechanic part, I analyzed Metal Slug and Megaman to find what are the
        fun things in these kinds of game genres. Due to this process, I could
        save a lot of time on graphic designing and come up with unique game
        mechanics.
      </p>
    </>,
    <>
      <h4 className='font-semibold mt-3'>What was the most fun part?</h4>
      <p className='ml-2 mt-0.5'>
        Looking at the characters that I drew and game mechanics playing well
        together was satisfying. The most fun part was hearing feedback from
        players after launching. My brother was the first player ever since I
        finished this game project. Seeing his reactions like frustration,
        tension and etc. while he's playing my own game was so funny. I enjoyed
        reading good comments about my game from other people online. Due to
        this experience, I learned that my software can make people have fun. I
        gained knowledge of the overall process of game development.
      </p>
    </>,
  ],
}

export { overviews }
