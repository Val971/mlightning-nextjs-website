import { IItem } from '@/types';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Links from './Links';
import { motion, useAnimation, useInView } from 'framer-motion';

interface ServiceCardProps {
  item: IItem;
}
export default function ServiceCard({ item }: ServiceCardProps) {
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
    <motion.div>
      <div className='flex lg:mb-8 bg-gradient-to-r from-black   w-full lg:h-96  overflow-hidden to-transparent'>
        <Image
          className=' self-center object-cover w-full md:w-96 h-96 transition-transform duration-500 ease-in-out transform hover:scale-110 '
          src={item.url}
          width={600}
          height={400}
          alt='mlightning logo'
        />
        <div className=' hidden md:flex flex-col pl-10 justify-center lg:w-1/2 '>
          <h3 className='text-white text-2xl lg:text-3xl uppercase font-bold'>
            {item.title}
          </h3>
          <p className='text-[#d3d3d3d3] py-2 lg:mb-6'>{item.description}</p>
          <Links link={`/services/${item.id}`} text={`Voir plus`} />
        </div>
      </div>
      <div className='md:hidden flex-col pb-20 pt-10 justify-center lg:w-1/2 '>
        <h3 className='text-white text-2xl lg:text-3xl uppercase font-bold'>
          {item.title}
        </h3>
        <p className='text-[#d3d3d3d3] py-2 lg:mb-6'>{item.description}</p>
        <Links link={`/services/${item.id}`} text={`Voir plus`} />
      </div>
    </motion.div>
  );
}
