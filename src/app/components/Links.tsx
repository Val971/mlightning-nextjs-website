import React from 'react';

interface LinksProps {
  text: string;
}
export default function Links({ text }: LinksProps) {
  return (
    <>
      <a className='text-white uppercase text-lg cursor-pointer'>{text}</a>
      <div className='bg-cyan-500 w-1/5 h-[1px]'></div>
    </>
  );
}
