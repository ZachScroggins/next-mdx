import Head from 'next/head';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import HeaderNav from '../components/HeaderNav';

import '../styles/index.css';
import '../styles/markdown.css';

const mdComponents = {
  h1: props => <h1 style={{ color: 'tomato' }} {...props} />,
};

const Wrapper = props => <main className='markdown-body' {...props} />;

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>next-mdx</title>
        <meta
          name='description'
          content='next-mdx tailwind framer react-icon playground'
        />
      </Head>
      <HeaderNav
        fixed={router.pathname === '/page2' && true}
        content={router.pathname === '/page2' && ':fixed'}
      >
        <MDXProvider components={{ wrapper: Wrapper }}>
          <Component {...pageProps} />
        </MDXProvider>
      </HeaderNav>
    </>
  );
};

export default App;
