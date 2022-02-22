import React, { ReactElement } from 'react';
import Button from 'src/components/common/Button';

const Page = (): ReactElement => {
  const onClickButton = (): void => {
    console.log('Yay');
  };

  return (
    <>
      <section className='section'>
        <h1>Page</h1>
        <p>
          Next.js supports a file-system based router. That means if you want to create a new page, you simply create a
          new file with the name of route in <i>pages</i> folder. Just like this page.
        </p>
      </section>
      <section className='section'>
        <h2>Component</h2>
        <p>
          Example of Button component is below. You cand find its source in folder <i>components</i> and create your own
          custom components.
        </p>
        <Button onClick={() => onClickButton()}>Click me</Button>
      </section>
    </>
  );
};

export default Page;
