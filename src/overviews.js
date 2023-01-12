const overviews = {
  prolog: [
    <>
      <h4 className='font-semibold'>How did I build it?</h4>
      <p className='ml-2 mt-0.5'>
        ProLog is the error tracking tool that was built on codebase during the{' '}
        <a
          href='https://profy.dev/'
          style={{ color: '#3366CC' }}
          target='_blank'
          rel='noreferrer'
        >
          React Job Simulator Program
        </a>
        . I participated in the program to simulate a professional work
        environment. Moreover, I chose this project since an error tracking tool
        is used in a lot of serious software products.
      </p>
      <h4 className='font-semibold mt-3'>
        What was the most challenging part?
      </h4>
      <p className='ml-2 mt-0.5'>
        The most challenging part was writing Cypress code for an email check
        which was part of the project tasks. The existing code was a{' '}
        <span className='code-block'>Button</span> component that is not
        applicable to <span className='code-block'>href</span> attribute. I had
        to figure out how to write code logic in order to check if send email
        function is working fine.
      </p>
      <h4 className='font-semibold mt-3'>How did I solve it?</h4>
      <p className='ml-2 mt-0.5'>
        I changed the button component to{' '}
        <span className='code-block'>Link</span> component first. After that, I
        could use the <span className='code-block'>href</span> attribute and
        implemented an email sending function. Eventually, I was able to write
        regular Cypress test code logic to check if the element has the right
        attribute for sending an email.
      </p>
      <h4 className='font-semibold mt-3'>What was the most fun part?</h4>
      <p className='ml-2 mt-0.5'>
        The most fun part was learning the Cypress. Cypress is a testing
        framework that requires code logic for testing purposes. I had fun
        playing around with a new syntax while coming up with different code
        logic for testing. Especially, I liked the user experience of Cypress,
        which provides browser developer tools like UI. It is very intuitive and
        beginner-friendly that lets me get used to it shortly. I definitely want
        to take advantage of this wonderful testing framework for my next
        project again.
      </p>
      <h4 className='font-semibold mt-3'>What did I learn?</h4>
      <p className='ml-2 mt-0.5'>
        I learned quite a bit of new technologies including Cypress, Styled
        Components, Storybook, GitHub Actions for Continuous Integration, and
        more. I learned the reason why people use testing frameworks like
        Cypress. It helps developers to identify easier which code logic is
        breaking the core functions. I realized the benefit of using Styled
        Components as well. It was more convenient to identify which component
        has which style since everything is in one file. I noticed good parts of
        using Storybook that lets developers visualize UI components. By doing
        so, developers can utilize UI components without being bothered by
        complex code logics. It is more useful when the developer team
        collaborates with the designer team since they can interact easier with
        Storybook. I learned how to take advantage of GitHub Actions for
        Continuous Integration. CI is the practice of frequently merging
        branches/PRs into the main branch. Having things like linter, type
        checks and automated tests running in a pipeline is a prerequisite for
        practicing Continuous Integration. I realized that CI makes software
        development easier, faster, and less risky for developers.
      </p>
      <h4 className='font-semibold mt-3'>
        What will I do differently next time?
      </h4>
      <p className='ml-2 mt-0.5'>
        If I were to build this kind of project next time again, I want to
        develop a similar project from scratch on my own. I learned a lot from
        this program while I was working on the large professional codebase.
        With the skills I gained from this program, I'm ready to build a complex
        app that is a real world-like project.
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
        I used Redux and the <span className='code-block'>useEffect</span> hook
        in React to optimize data fetching logic. It stores data in a state
        after the component is rendered initially. I set the last product update
        time as a dependency to fetch data only when there is a change made. In
        this way, I could improve the performance of my website.
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
        locally. I used the <span className='code-block'>useRouter</span> hook
        of NextJS to achieve that. This code logic produced an pre-rendering
        type error that says I'm trying to use undefined data. I had to figure
        out what was causing the issue.
      </p>
      <h4 className='font-semibold mt-3'>How did I solve it?</h4>
      <p className='ml-2 mt-0.5'>
        The problem occurred since the Post component is trying to use the url
        param before the page renders. I used the{' '}
        <span className='code-block'>useEffect</span> hook to make the code run
        only after rendering.
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
        to manipulate routes dynamically with new{' '}
        <span className='code-block'>[fileNameFormat].tsx</span> and URL params.
        I learned how to set type for variables, functions and parameters using
        TypeScript, as well. It was strictly required to write code with types
        in order to prevent type errors. I gained a better understanding of the
        main reason why people use TypeScript from this project.
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
}

export { overviews }
