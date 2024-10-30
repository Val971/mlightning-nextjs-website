import React from 'react';
import Image from 'next/image';

interface MediaSociauxProps {
  justify?: string;
}
export default function MediaSociaux({
  justify = 'justify-center',
}: MediaSociauxProps) {
  return (
    <ul className={`flex ${justify} space-x-5 items-center`}>
      <li>
        <a
          href='https://www.snapchat.com/add/mlightning95'
          className='text-white hover:text-cyan-500 '>
          <Image
            alt='instagram icon'
            width={40}
            height={40}
            src={'/images/snaptchat_Icon.png'}
          />
        </a>
      </li>
      <li>
        <a
          href='https://www.instagram.com/mlightning_custom/'
          className='text-white hover:text-cyan-500 '>
          <Image
            alt='instagram icon'
            width={40}
            height={40}
            src={'/images/instagram_Icon.png'}
          />
        </a>
      </li>
      <li>
        <a
          href='https://www.tiktok.com/@mlightning95?lang=en'
          className='text-white hover:text-cyan-500 '>
          <Image
            alt='tiktok icon'
            width={40}
            height={40}
            src={'/images/tiktok_Icon.png'}
          />
        </a>
      </li>
    </ul>
  );
}
