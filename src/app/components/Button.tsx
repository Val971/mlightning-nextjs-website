import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  text: string;
  link: string;
}
export default function Button({ text, link }: ButtonProps) {
  return (
    <Link
      href={`${link}`}
      className='text-white  bg-cyan-500 py-3 px-6 lg:py-5 lg:px-11  uppercase font-semibold'>
      {text}
    </Link>
  );
}
