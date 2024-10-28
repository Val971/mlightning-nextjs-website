'use client';
import { IReview } from '@/types';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);
  useEffect(() => {
    const fetchReviews = async () => {
      const map = new window.google.maps.Map(document.createElement('div'));
      const service = new window.google.maps.places.PlacesService(map);

      const request = {
        placeId: `${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`,
        fields: ['reviews'],
      };

      service.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setReviews(place?.reviews || []);
        }
      });
    };

    fetchReviews();
  }, []);

  return (
    <section id='testimonies' className='py-20 '>
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
        className='max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto'>
        <div className='transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100'>
          <div className='mb-12 space-y-5 md:mb-16 md:text-center'>
            <h1 className='mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl'>
              Avis des clients.
            </h1>
            <p className='text-xl text-gray-100 md:text-center md:text-2xl'>
              {`Chez Mlightning, la mission de transformer chaque véhicule en une
              œuvre d'art personnalisée, adaptée aux goûts et aux besoins
              uniques de nos clients. Ne vous fiez pas seulement à nos paroles,
              découvrez ce que nos clients disent de leur expérience avec nos
              services de personnalisation de luxe. Voici quelques avis de
              propriétaires de voitures de prestige qui ont fait confiance à
              notre savoir-faire pour redéfinir leur intérieur automobile.npm run d`}
            </p>
          </div>
        </div>

        <div className=''>
          <ul className='grid lg:grid-cols-3 auto-rows-auto gap-8'>
            {reviews.length > 1 &&
              reviews.map((review: IReview, index) => {
                return (
                  <li key={index} className='text-sm leading-6 h-fit'>
                    <div className='relative group'>
                      <div className='absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r  from-blue-800  to-blue-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200'></div>
                      <div className='cursor-pointer'>
                        <div className='relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5'>
                          <div className='flex items-center space-x-4'>
                            <Image
                              width={50}
                              height={50}
                              src={review.profile_photo_url}
                              className='w-12 h-12 bg-center bg-cover border rounded-full'
                              alt='Kanye West'
                            />
                            <div>
                              <h3 className='text-lg font-semibold text-white'>
                                {review.author_name}
                              </h3>
                              <p className='text-gray-500 text-md'>
                                {review.relative_time_description}
                              </p>
                            </div>
                          </div>
                          <p className='leading-normal text-gray-300 text-md'>
                            {review.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
