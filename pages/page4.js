import React, { useRef, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import HOneExample from '../components/HOneExample.mdx';
import HeaderNav from '../components/HeaderNav';
import ScrollTop from '../components/ScrollTop';
import ExampleContent from '../components/ExampleContent.mdx';
import useClickAway from '../utils/useClickAway';
import { MdAndroid } from 'react-icons/md';
import { FiChrome } from 'react-icons/fi';
import { FaChrome } from 'react-icons/fa';
import LinearProgress from '../components/LinearProgress';

const greenH1 = {
  h1: props => <h1 className='text-3xl text-green-600' {...props} />,
};
const blueH1 = {
  h1: props => <h1 className='text-3xl text-blue-600' {...props} />,
};
const redH1 = {
  h1: props => <h1 className='text-3xl text-red-600' {...props} />,
};

const page4 = () => {
  const testRef = useRef(null);
  const [open, setOpen] = useState(false);

  useClickAway(testRef, setOpen);

  return (
    <div>
      <HeaderNav content={'(JS component in JSX file position:fixed)'} />
      <HOneExample type={'default'} />
      <h1>JSX h1 with no className</h1>
      <a
        href='#test'
        className='text-primary underline hover:text-primary-dark'
      >
        JSX same page anchor tag
      </a>
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
      <MdAndroid
        // color='blue'
        color='#fa7aaa'
        size='4rem'
        className='shadow-outline hover:bg-black'
        style={{ border: '3px solid green' }}
        title='Material Design Android Icon'
      />
      <MdAndroid
        size='4rem'
        className='text-purple-700 hover:text-green-500 '
      />
      <FiChrome size='4rem' className='stroke-2 text-pink-600 ' />
      <FaChrome size='4rem' className='text-teal-400' />
      {/* <LinearProgress fgClasses='bg-green-600' bgClasses='bg-white' /> */}
      <LinearProgress />
      <div
        ref={testRef}
        className='bg-blue-400 h-40 w-48 p-3 cursor-pointer'
        onClick={() => setOpen(true)}
      >
        <p className='pt-4'>Click to open</p>
        <p>Click away to close</p>
      </div>
      {open && <div className='bg-red-400 h-40 w-48'></div>}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi
        expedita, voluptatum culpa vitae, exercitationem commodi praesentium
        aperiam, id error itaque. Quos ab placeat laboriosam nisi reprehenderit
        nostrum tempora cupiditate deserunt aut doloremque quis saepe eveniet,
        voluptates et quo ipsa? Quibusdam iure voluptatem, aliquam beatae
        provident voluptates nobis asperiores ipsa quidem laudantium architecto
        cum nam magnam iste! Molestias culpa consectetur cumque magnam sequi
        optio aspernatur fuga saepe minus ipsa pariatur porro expedita, aliquam
        itaque recusandae facilis quidem, maiores eaque nisi nihil nam
        consequatur quas ipsam eius? Mollitia possimus quam facere, commodi
        numquam eveniet quisquam ut necessitatibus, ipsa a atque non nobis animi
        amet saepe id accusantium quasi voluptatem quo officiis expedita
        molestiae asperiores voluptates! Dicta, deserunt quidem. Quia ex illum
        nemo eum incidunt velit beatae ratione enim in fugit amet soluta dicta,
        earum distinctio deserunt voluptate cum est fugiat. Est, voluptatem
        maiores distinctio non laudantium laboriosam exercitationem. Eligendi
        soluta doloremque natus repellendus nulla sunt amet ducimus praesentium
        dignissimos dicta voluptatibus, fuga harum aliquid ab tempora provident
        dolorem inventore ratione iste consequuntur quidem! Aliquid aut
        accusamus inventore, pariatur illo repudiandae hic voluptates nihil,
        corporis porro tempore ducimus quidem dolorum placeat quos, suscipit
        veniam nemo iure a doloremque! Recusandae suscipit voluptatibus
        corrupti.
      </p>

      <p className='pt-32 -mt-32' id='test'>
        JSX same page anchor tag should scroll here
      </p>
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
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default page4;
