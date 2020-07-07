import Link from 'next/link';

const HeaderNav = props => {
  return (
    <div className='bg-primary text-center p-2 sticky top-0 left-0'>
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
    </div>
  );
};

export default HeaderNav;
