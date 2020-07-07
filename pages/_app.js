import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import '../styles/index.css';

const mdComponents = {
  h1: props => <h1 style={{ color: 'tomato' }} {...props} />,
};

export default ({ Component, pageProps }) => (
  <MDXProvider>
    {/* <MDXProvider components={mdComponents}> */}
    <Component {...pageProps} />
  </MDXProvider>
);
