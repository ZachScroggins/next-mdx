import Link from 'next/link';
import { useEffect } from 'react';

const HeaderNav = props => {
  let prevScrollpos;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      prevScrollpos = window.pageYOffset;
      const hideNav = () => {
        let currentScrollpos = window.pageYOffset;
        if (currentScrollpos > 150) {
          if (prevScrollpos > currentScrollpos) {
            document.getElementById('nav').style.top = '0';
          } else {
            document.getElementById('nav').style.top = '-100px';
          }
        }
        prevScrollpos = currentScrollpos;
      };
      window.addEventListener('scroll', hideNav);
      return () => {
        document.removeEventListener('scroll', hideNav);
      };
    }
  }, [prevScrollpos]);

  // if (typeof window !== 'undefined') {
  //   let prevScrollpos = window.pageYOffset;
  //   const hideNav = () => {
  //     let currentScrollpos = window.pageYOffset;
  //     if (currentScrollpos > 150) {
  //       if (prevScrollpos > currentScrollpos) {
  //         document.getElementById('nav').style.top = '0';
  //       } else {
  //         document.getElementById('nav').style.top = '-100px';
  //       }
  //     }
  //     prevScrollpos = currentScrollpos;
  //   };
  //   window.addEventListener('scroll', hideNav);
  // }

  return (
    <div
      id='nav'
      className='nav bg-primary text-center p-2 sticky top-0 left-0'
    >
      <h1 className='text-2xl font-semibold underline'>Next MDX Tailwind</h1>
      <p>{props.content}</p>
      <div className='flex'>
        <div className='w-1/3'>
          <Link href='/'>
            <a className='text-white underline'>Home</a>
          </Link>
        </div>
        <div className='w-1/3'>
          <Link href='/page2'>
            <a className='text-white underline'>Page 2</a>
          </Link>
        </div>
        <div className='w-1/3'>
          <Link href='/page3'>
            <a className='text-white underline'>Page 3</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .nav {
          transition: top 0.3s;
        }
      `}</style>
    </div>
  );
};

export default HeaderNav;