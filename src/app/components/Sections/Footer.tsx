'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

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
        <div className='flex justify-between'>
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
              className='dark:invert'
              src='/images/logo.png'
              alt='mlightning logo'
              width={40}
              height={40}
              unoptimized={true}
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
            <ul className='flex justify-center mt-5 space-x-5'>
              <li>
                <a href='#' className='text-gray-500 hover:text-blue-500 '>
                  <svg
                    className='w-10 h-10'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      fillRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clipRule='evenodd'></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-500 hover:text-blue-500 '>
                  <svg
                    className='w-10 h-10'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      fillRule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      clipRule='evenodd'></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-500 hover:text-blue-500 '>
                  <svg
                    className='w-10 h-10'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
