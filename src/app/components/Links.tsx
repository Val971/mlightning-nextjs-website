import Link from 'next/link';
import React from 'react';

interface LinksProps {
  text: string;
  link: string;
}
export default function Links({ text, link }: LinksProps) {
  return (
    <>
      <Link href={link} className='text-white uppercase text-lg cursor-pointer'>
        {text}
      </Link>
      <div className='bg-cyan-500 w-1/5 h-[1px]'></div>
    </>
  );
}
