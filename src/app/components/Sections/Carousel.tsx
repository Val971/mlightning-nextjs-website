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
            className='w-screen h-screen flex-shrink-0'
            style={{
              backgroundImage: `url(${item.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className='flex flex-col justify-end pb-20 mb:pb-32 lg:pb-20 2xl:pb-40 items-center w-full h-full p-4 bg-black bg-opacity-50 '>
              <div className='lg:max-w-7xl lg:mx-auto lg:flex lg:flex-col lg:pt-32 pt-20 lg:w-[1200px]'>
                <h1 className='text-white uppercase font-bold text-3xl lg:text-6xl self-start lg:w-[700px]'>
                  {item.title}
                </h1>
                <p className='text-[#d3d3d3d3] leading-7 my-4 lg:my-6 text-lg lg:w-[600px]'>
                  {item.description}
                </p>
                <Button text={item.btn} link={item.url} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton pour aller à l'image précédente */}
      <button
        className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full z-10 hover:bg-white/40 transition-colors'
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
        className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full z-10 hover:bg-white/40 transition-colors'
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
