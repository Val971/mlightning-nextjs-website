import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Button from '../Button';
import aboutImg from '../../../../public/images/about.webp';

export default function About() {
  const controls = useAnimation();
  const ref2 = useRef(null);
  const ref2IsInView = useInView(ref2);

  useEffect(() => {
    if (ref2IsInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, ref2IsInView]);
  return (
    <section
      id='about'
      className='pt-10 overflow-hidden   md:pt-0 sm:pt-16 2xl:pt-16 mt-20'>
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='grid items-center grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <h2 className='text-white uppercase text-3xl lg:text-5xl font-bold'>
              Pourquoi choisir la qualité
            </h2>
            <p className='text-lg text-[#d3d3d3] py-5'>{`Faire appel à un service de customisation d'intérieur de voiture offre de nombreux avantages qui vont au-delà de l'amélioration esthétique de votre véhicule.`}</p>
            <div className='flex flex-col gap-4 lg:gap-8 py-10 mb-10'>
              <h3 className='mark text-[#d3d3d3] cursor-pointer  uppercase text-[32px] leading-10'>
                Techniciens certifiés
              </h3>
              <h3 className='mark text-[#d3d3d3] cursor-pointer  uppercase text-[32px] leading-10'>
                CONFORT AMÉLIORÉ
              </h3>
              <h3 className='mark text-[#d3d3d3] cursor-pointer  uppercase text-[32px] leading-10'>
                PERSONNALISATION UNIQUE
              </h3>
              <h3 className='mark text-[#d3d3d3] cursor-pointer  uppercase text-[32px] leading-10'>
                AUGMENTATION DE LA VALEUR
              </h3>
            </div>
            <Button text='Voir plus' link='/' />
          </div>

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
                  duration: 1.9,
                  ease: 'easeInOut',
                },
              },
            }}
            className='relative'>
            <Image
              className='dark:invert w-full '
              src={aboutImg || null}
              alt='mlightning logo'
              width={600}
              height={400}
              layout='responsive'
              quality={100}
              objectFit='cover'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
