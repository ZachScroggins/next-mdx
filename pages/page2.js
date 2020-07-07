import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import HOneExample from '../components/HOneExample.mdx';
import HeaderNav from '../components/HeaderNav';

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
    </div>
  );
};

export default page2;
