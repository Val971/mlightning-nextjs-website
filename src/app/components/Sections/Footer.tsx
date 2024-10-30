'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import MediaSociaux from '../MediaSociaux';

export default function Footer() {
  const controls = useAnimation();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
    if (isInView2) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView, isInView2]);
  return (
    <footer className='py-6 bg-black mt-20 text-white'>
      <div className='container px-6 mx-auto space-y-6 divide-y divide-blue-500  md:space-y-12 divide-opacity-50 lg:max-w-7xl lg:mx-auto  lg:pt-32 pt-20'>
        <div className='lg:flex justify-between'>
          <motion.div
            ref={ref}
            initial='hidden'
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: 'easeInOut',
                },
              },
            }}
            className='pb-6 col-span-full md:pb-0 md:col-span-6 flex flex-col gap-8'>
            <Image
              src='/images/logo.webp'
              alt='mlightning logo'
              width={180}
              height={38}
              priority
            />
            <p className='lg:w-[25rem]'>
              Transformez votre expérience de conduite avec Mlightning. Nous
              sommes spécialisés dans la personnalisation haut de gamme des
              intérieurs de voitures, alliant confort, élégance et innovation.
              Contactez-nous pour donner vie à vos rêves automobiles !
            </p>
          </motion.div>

          <motion.div
            ref={ref2}
            initial='hidden'
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                  ease: 'easeInOut',
                },
              },
            }}
            className='col-span-6 text-center md:text-left md:col-span-3 self-center'>
            <div className='flex items-center  gap-4'>
              <div className='pointer animate-pulse bg-cyan-500 rounded-full'>
                <div className='bg-cyan-500 p-3 rounded-full'>
                  <svg
                    width='30px'
                    height='30px'
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
              <a
                href='tel:+33750587711'
                className='hover:text-cyan-500 transition duration-300 ease-in-out text-3xl lg:text-5xl font-bold'>
                +33 7 50 58 77 11
              </a>
            </div>
          </motion.div>
        </div>
        <div className='grid justify-center pt-6 lg:justify-between'>
          <div className='flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6'>
            <span>©2024 All rights reserved</span>
            <a rel='noopener noreferrer' href='#'>
              <span>Privacy policy</span>
            </a>
            <p>
              Make with ❤️ by{' '}
              <a
                className='cursor-pointer'
                target='_blank'
                href='https://kaskod.dev'>
                Kaskod
              </a>{' '}
            </p>
          </div>
          <div className='flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13'>
            <MediaSociaux />
          </div>
        </div>
      </div>
    </footer>
  );
}
