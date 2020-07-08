import React, { useRef, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import HOneExample from '../components/HOneExample.mdx';
import HeaderNav from '../components/HeaderNav';
import ScrollTop from '../components/ScrollTop';
import ExampleContent from '../components/ExampleContent.mdx';
import useClickAway from '../utils/useClickAway';

const greenH1 = {
  h1: props => <h1 className='text-3xl text-green-600' {...props} />,
};
const blueH1 = {
  h1: props => <h1 className='text-3xl text-blue-600' {...props} />,
};
const redH1 = {
  h1: props => <h1 className='text-3xl text-red-600' {...props} />,
};

const page2 = () => {
  const testRef = useRef(null);
  const [open, setOpen] = useState(false);

  useClickAway(testRef, setOpen);

  return (
    <div>
      <HeaderNav content={'(This is a JS component in a JSX file)'} />
      <HOneExample type={'default'} />
      <h1>JSX h1 with no className</h1>
      <h1 className='text-3xl'>This is a JSX h1 💯</h1>
      <MDXProvider components={greenH1}>
        <HOneExample type={'green'} />
        <MDXProvider components={blueH1}>
          <HOneExample type={'nested blue'} />
        </MDXProvider>
      </MDXProvider>
      <MDXProvider components={redH1}>
        <HOneExample type={'red'} />
      </MDXProvider>
      <div
        ref={testRef}
        className='bg-blue-400 h-40 w-48 p-3 cursor-pointer'
        onClick={() => setOpen(true)}
      >
        <p className='pt-4'>Click to open</p>
        <p>Click away to close</p>
      </div>
      {open && <div className='bg-red-400 h-40 w-48'></div>}
      <svg
        className='w-12 h-12 fill-current text-pink-600'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
      >
        <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM5 7h6v2H5V7z' />
      </svg>
      <div className='markdown-body'>
        <ExampleContent />
      </div>
      <ScrollTop />
    </div>
  );
};

export default page2;