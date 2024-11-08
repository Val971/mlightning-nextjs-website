'use client';
import React, { useEffect, useState } from 'react';
import { carouselDatas } from '../../../datas/carousel';
import Button from '../Button';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayDelay = 9000; // Durée entre les slides (en ms)

  // Fonction pour aller à la prochaine image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselDatas.length);
  };

  // Fonction pour revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselDatas.length - 1 : prevIndex - 1
    );
  };

  // Utilisation de useEffect pour mettre en place l'autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Défilement automatique
    }, autoPlayDelay);

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, [currentIndex]); // Déclenchement lorsque currentIndex change

  return (
    <div className='relative w-[100%] h-screen overflow-hidden'>
      {/* Images du carousel */}
      <div
        className='flex transition-transform ease-in-out duration-1000' // Durée de la transition augmentée à 1000ms (1 seconde)
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}>
        {carouselDatas.map((item, index) => (
          <div
            key={index}
            className='w-full h-screen flex-shrink-0 '
            style={{
              backgroundImage: `url(${item.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <section className=' pt-24 h-screen flex '>
              <div className='grid max-w-screen-xl px-4 py-8  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
                <div className='mr-auto gap-8 place-self-center lg:col-span-7'>
                  <h1 className='max-w-lg mb-4 text-4xl font-extrabold tracking-tight leading-none xl:text-6xl  inset-0 text-white  flex items-center justify-center'>
                    {item.title}
                  </h1>
                  <p className='max-w-2xl mb-6 font-light text-white lg:mb-8 text-lg lg:text-xl'>
                    {item.description}
                  </p>
                  <div className='mt-10'>
                    <Button text={item.btn} link={'tel:+33756946684'} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>

      {/* Bouton pour aller à l'image précédente */}
      <div className='bg-red-300 h-20'>
        <button
          className='absolute top-1/2 mt-[70%] md:mt-0 left-4 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full z-10 hover:bg-white/40 transition-colors'
          onClick={prevSlide}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>

        {/* Bouton pour aller à l'image suivante */}
        <button
          className='absolute top-1/2 mt-[70%] right-60 md:mt-0 md:right-4 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full z-10 hover:bg-white/40 transition-colors'
          onClick={nextSlide}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div>
      {/* Indicateurs (points en bas du carousel) */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {carouselDatas.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
