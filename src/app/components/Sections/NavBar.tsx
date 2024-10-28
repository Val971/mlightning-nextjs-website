'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const params = usePathname();

  return (
    <nav
      className={`fixed h-24 w-full  top-0 left-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-sm shadow-lg border-b-[0.1rem]`}>
      <div className='max-w-7xl mx-auto py-4 px-8 flex justify-between items-center'>
        {/* Logo */}
        <Image
          className='dark:invert'
          src='/images/logo.png'
          alt='mlightning logo'
          width={180}
          height={38}
          priority
        />

        {/* Lien de Navigation */}
        <ul className='hidden md:flex space-x-8 text-white text-lg'>
          <li className='hover:text-cyan-500 transition duration-300 ease-in-out hover:scale-110'>
            <Link
              href='/'
              className={`${params.includes('home') ? 'text-cyan-500' : ''}`}>
              Accueil
            </Link>
          </li>
          <li className='hover:text-cyan-500 transition duration-300 ease-in-out hover:scale-110'>
            <a
              href='#services'
              className={`${
                params.includes('services') ? 'text-cyan-500' : ''
              }`}>
              Services
            </a>
          </li>
          <li className='hover:text-cyan-500 transition duration-300 ease-in-out hover:scale-110'>
            <a
              href='#about'
              className={`${params.includes('about') ? 'text-cyan-500' : ''}`}>
              À propos
            </a>
          </li>
        </ul>

        {/* Numéro de téléphone */}
        <div className=' hidden md:block text-white text-lg '>
          <div className='flex items-center justify-center gap-4'>
            <div className='pointer animate-pulse bg-cyan-500 rounded-full'>
              <div className='bg-cyan-500 p-3 rounded-full'>
                <svg
                  width='25px'
                  height='25px'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z'
                    fill='#fff'
                  />
                </svg>
              </div>
            </div>
            <div className='flex items-center'>
              <a
                href='tel:+33750587711'
                className='hover:text-cyan-500 transition duration-300 ease-in-out'>
                +33 7 50 58 77 11
              </a>
            </div>
          </div>
        </div>

        {/* Bouton Menu (Mobile) */}
        <div className='md:hidden text-white text-3xl cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-8 h-8'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
