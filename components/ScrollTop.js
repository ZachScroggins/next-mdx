import { useEffect, useState, useRef } from 'react';

const ScrollTop = () => {
  // let scrollPos;

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const scrollTop = () => {
  //       scrollPos = window.pageYOffset;
  //       if (scrollPos > 150) {
  //         document.getElementById('scroller').style.display = 'block';
  //       } else {
  //         document.getElementById('scroller').style.display = 'none';
  //       }
  //     };
  //     window.addEventListener('scroll', scrollTop);
  //     // return () => {
  //     //   document.removeEventListener('scroll', scrollTop);
  //     // };
  //   }
  // }, [scrollPos]);
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // if (prevScrollY.current < currentScrollY && goingUp) {
      //   setGoingUp(false);
      // }
      // if (prevScrollY.current > currentScrollY && !goingUp) {
      //   setGoingUp(true);
      // }
      if (prevScrollY.current < 150) {
        setGoingUp(false);
      }
      if (prevScrollY.current > 150) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      // console.log(goingUp, currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
    // }, [prevScrollY]);
  }, [goingUp]);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      {goingUp && (
        <div
          id='scroller'
          // className={`hidden cursor-pointer ${goingUp && 'block'}`}
          className='cursor-pointer'
          onClick={handleClick}
        >
          {/* <div id='scroller' className='hidden cursor-pointer' onClick={handleClick}> */}
          <div className='rounded-full w-12 h-12 fixed bottom-0 right-0 bg-primary flex items-center justify-center mb-4 mr-4'>
            <div>+</div>
            {/* {goingUp && <p>eyyyyyyyyyyyy</p>} */}
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollTop;
