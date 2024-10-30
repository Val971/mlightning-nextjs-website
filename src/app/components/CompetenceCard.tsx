'use client';
import { IItem } from '@/types';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import React from 'react';

interface CompetenceCardProps {
  item: IItem;
  isServiceDetails?: boolean;
}
export default function CompetenceCard({
  item,
  isServiceDetails = false,
}: CompetenceCardProps) {
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
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 }, // Départ en bas (y: 100)
        visible: {
          opacity: 1,
          y: 0, // Remonte à sa position normale
          transition: {
            duration: item.duration, // Durée de l'animation
            ease: 'easeInOut', // Animation smooth
          },
        },
      }}
      className=' text-center'>
      {!isServiceDetails && (
        <div className='flex justify-center items-center gap-10 py-5'>
          <h4 className='stock font-extrabold text-white text-transparent stroke-orange-50 text-2xl'>
            {item.number}
          </h4>
          <div className='bg-white w-full h-[1px]'></div>
        </div>
      )}
      <div className='bg-black px-9 py-11 flex flex-col'>
        <div className=' animate-pulse bg-cyan-500 rounded-full self-center'>
          <div className='bg-cyan-500 p-3 rounded-full'>
            <Image
              className='self-center'
              src={item.url}
              alt='mlightning logo'
              width={30}
              height={30}
              priority
            />
          </div>
        </div>
        <h4 className='text-white uppercase font-bold text-2xl my-3'>
          {item.title}
        </h4>
        <p className='text-[#D3D3D3]'>{item.description}</p>
      </div>
    </motion.div>
  );
}
