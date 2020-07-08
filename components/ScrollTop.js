import { useEffect } from 'react';

const ScrollTop = () => {
  let scrollPos;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scrollTop = () => {
        scrollPos = window.pageYOffset;
        if (scrollPos > 150) {
          document.getElementById('scroller').style.display = 'block';
        } else {
          document.getElementById('scroller').style.display = 'none';
        }
      };
      window.addEventListener('scroll', scrollTop);
      return () => {
        document.removeEventListener('scroll', scrollTop);
      };
    }
  }, [scrollPos]);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div id='scroller' className='hidden cursor-pointer' onClick={handleClick}>
      <div className='rounded-full w-12 h-12 fixed bottom-0 right-0 bg-primary flex items-center justify-center mb-4 mr-4'>
        <div>+</div>
      </div>
    </div>
  );
};

export default ScrollTop;
