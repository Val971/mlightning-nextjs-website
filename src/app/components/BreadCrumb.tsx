'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface BreadCrumbProps {
  lastLink: string;
}
export default function BreadCrumb({ lastLink }: BreadCrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <nav aria-label='breadcrumb' className='w-full  '>
      <ol className='flex h-8 space-x-2  max-w-full'>
        <li className='flex items-center'>
          <Link
            rel='noopener noreferrer'
            href='/'
            title='Back to homepage'
            className='flex items-center hover:underline'>
            home
          </Link>
        </li>
        {pathNames.map((link, index) => {
          return (
            <li key={index} className='flex items-center space-x-1'>
              <span className=''>/</span>
              <p
                rel='noopener noreferrer'
                className={`flex items-center px-1 normal-case hover:underline`}>
                {index === pathNames.length - 1 ? lastLink : link}
              </p>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
