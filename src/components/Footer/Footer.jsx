import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
  return (
    <footer className='bg-black text-white font-chivo p-[60px] text-center space-y-4'>
      <div className='flex space-x-4 justify-center items-center'>
        <img src='/icons/twitter.svg' alt='twitter icon' />
        <img width={45} src='/icons/discord.svg' alt='discord icon' />
      </div>
      <div className='flex items-center justify-center space-x-5'>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/"}>
          <a>Terms of Use</a>
        </Link>
        <Link href={"/"}>
          <a>Privacy Policy</a>
        </Link>
        <Link href={"/"}>
          <a>Community Guidelines</a>
        </Link>
      </div>

      <div>
        <p className='text-sm'>Copyright © 2022 NiftyKit. All rights reserved.</p>
      </div>
    </footer>
  );
};
