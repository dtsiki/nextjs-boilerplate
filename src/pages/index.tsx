import React from 'react';

const Home = (): JSX.Element => {
  return (
    <section className='section'>
      <h1>Next.js Boilerplate</h1>
      <p>
        Next.js is an open-source development framework built on top of Node.js enabling React based web applications
        functionalities such as server-side rendering and generating static websites. Powered by{' '}
        <a
          href='https://nextjs.org/'
          target='_blank'
          rel='noreferrer'>
          Vercel
        </a>
        .
      </p>
      <p>
        It`s starter project based on Next.js. It contains folder structure, code formatter and style linter. I
        made it for my own use but you can clone this project and use it to create your own Next.js project.
      </p>
    </section>
  );
};

export default Home;
