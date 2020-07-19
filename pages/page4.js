import React, { useRef, useState, useEffect } from 'react';

const page4 = ({ posts }) => {
  useEffect(() => {
    console.log(posts);
  }, []);

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4  p-6'>
        <div className='bg-gray-400 p-20 text-center xl:col-span-6'>
          CSS Grid 1
        </div>
        <div className='bg-gray-600 p-20 text-center xl:row-span-3'>2</div>
        <div className='bg-gray-400 p-20 text-center xl:col-start-6 xl:row-span-3'>
          3
        </div>
        <div className='bg-gray-600 p-20 text-center xl:col-span-2 xl:row-span-2'>
          4
        </div>
        <div className='bg-gray-400 p-20 text-center'>5</div>
        <div className='bg-gray-600 p-20 text-center'>6</div>
        <div className='bg-gray-400 p-20 text-center xl:col-span-2'>7</div>
        <div className='bg-gray-600 p-20 text-center'>8</div>
        <div className='bg-gray-400 p-20 text-center'>9</div>
        <div className='bg-gray-600 p-20 text-center'>10</div>
        <div className='bg-gray-400 p-20 text-center'>11</div>
        <div className='bg-gray-600 p-20 text-center'>12</div>
        <div className='bg-gray-400 p-20 text-center'>13</div>
        <div className='bg-gray-600 p-20 text-center xl:row-start-2 xl:col-start-2 xl:col-span-4'>
          14
        </div>
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await res.json();

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default page4;
