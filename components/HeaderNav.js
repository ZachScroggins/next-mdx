import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeaderNav = ({ content, fixed, children }) => {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && currentScrollY > 150) {
        setGoingUp(true);
      }
      if (prevScrollY.current > currentScrollY) {
        setGoingUp(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  const variants = {
    open: {
      y: 0,
      transition: {
        damping: 5,
        delay: 0.3,
      },
    },
    closed: {
      y: -100,
      transition: {
        delay: 0.3,
      },
    },
  };

  if (fixed) {
    return (
      <>
        <div className='nav bg-primary text-center p-2 fixed w-full top-0 left-0 z-10'>
          <h1 className='text-2xl font-semibold underline'>
            Next MDX Tailwind{content}
          </h1>
          <div className='flex'>
            <div className='w-1/4'>
              <Link href='/'>
                <a className='text-white underline'>Home</a>
              </Link>
            </div>
            <div className='w-1/4'>
              <Link href='/page2'>
                <a className='text-white underline'>Page 2</a>
              </Link>
            </div>
            <div className='w-1/4'>
              <Link href='/page3'>
                <a className='text-white underline'>Page 3</a>
              </Link>
            </div>
            <div className='w-1/4'>
              <Link href='/page4'>
                <a className='text-white underline'>Page 4</a>
              </Link>
            </div>
          </div>
        </div>
        {children}
      </>
    );
  }

  return (
    <>
      <motion.div
        className='nav bg-primary text-center p-2 sticky top-0 left-0 z-10'
        animate={goingUp ? 'closed' : 'open'}
        variants={variants}
      >
        <h1 className='text-2xl font-semibold underline'>Next MDX Tailwind</h1>
        <p>{content}</p>
        <div className='flex'>
          <div className='w-1/4'>
            <Link href='/'>
              <a className='text-white underline'>Home</a>
            </Link>
          </div>
          <div className='w-1/4'>
            <Link href='/page2'>
              <a className='text-white underline'>Page 2</a>
            </Link>
          </div>
          <div className='w-1/4'>
            <Link href='/page3'>
              <a className='text-white underline'>Page 3</a>
            </Link>
          </div>
          <div className='w-1/4'>
            <Link href='/page4'>
              <a className='text-white underline'>Page 4</a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          .nav {
            transition: top 0.3s;
          }
        `}</style>
      </motion.div>
      {children}
    </>
  );
};

export default HeaderNav;
