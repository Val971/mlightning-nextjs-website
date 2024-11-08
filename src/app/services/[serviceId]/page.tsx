'use client';
import Image from 'next/image';
import BreadCrumb from '@/app/components/BreadCrumb';
import React, { useEffect, useState } from 'react';
import CompetenceCard from '@/app/components/CompetenceCard';
import { competences } from '@/datas/competences';
import { services } from '@/datas/services';
import ServiceDetail from '@/app/components/Sections/ServiceDetail';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ServicesDetail() {
  const [isFirst, setIsFirst] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const params = useParams<{ serviceId: string }>();
  useEffect(() => {
    if (+params.serviceId === 0) {
      return setIsFirst(true);
    }
    if (+params.serviceId === services.length - 1) {
      return setIsLast(true);
    }
  }, [params]);
  const handleNextStep = () => {
    return +params.serviceId + 1;
  };
  const handlePreviousStep = () => {
    return +params.serviceId - 1;
  };
  return (
    <div className='pt-40 flex flex-col gap-8 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
      <div>
        <h3 className='text-5xl uppercase font-bold'>Services</h3>
        <BreadCrumb lastLink={services[+params.serviceId].title} />
      </div>
      <div className='flex gap-8 md:self-end'>
        <Link
          className={`px-6 flex justify-center items-center gap-2 py-2 min-w-[120px] text-center text-white border text-lg border-white uppercase disabled:opacity-75 ${
            isFirst ? 'pointer-events-none border-gray-700 text-gray-700' : ''
          }`}
          href={`/services/${handlePreviousStep()}`}>
          <Image
            loading='lazy'
            src='/icons/arrow-sm-left-svgrepo-com.svg'
            className={`cursor-pointer ${isFirst ? 'hidden' : 'bloc'}`}
            alt='close button'
            width={40}
            height={40}
          />

          <span>Précédent</span>
        </Link>
        <Link
          className={`px-6 py-2 min-w-[120px] flex justify-center items-center gap-2 text-center text-white border text-lg border-white uppercase ${
            isLast ? 'pointer-events-none border-gray-700 text-gray-700' : ''
          }`}
          href={`/services/${handleNextStep()}`}>
          <span>Suivant</span>
          <Image
            loading='lazy'
            src='/icons/arrow-sm-right-svgrepo-com.svg'
            className={`cursor-pointer ${isLast ? 'hidden' : 'bloc'}`}
            alt='close button'
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className='border-b-[0.1px] border-b-cyan-500'></div>
      <div className='grid grid-cols-1 lg:grid-cols-3  md:gap-8 '>
        <div className='flex flex-col gap-8 md:order-last mb-8'>
          {competences.map((item) => {
            return (
              <CompetenceCard
                isServiceDetails={true}
                key={item.id}
                item={item}
              />
            );
          })}
        </div>
        <div className='col-span-2'>
          <ServiceDetail service={services[+params.serviceId]} />
          <div className='flex mt-8 md:mt-20 flex-col gap-8 border-cyan-500 border-l-2 pl-8'>
            <h2 className='uppercase text-3xl font-bold'>
              {`Contactez-nous dès aujourd'hui pour transformer votre voiture !`}
            </h2>
            <p>{`N'attendez plus ! Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nos experts peuvent vous aider à transformer l'intérieur de votre voiture. Profitez d'une consultation gratuite et laissez-nous vous guider vers une expérience de conduite exceptionnelle.`}</p>
            <Link
              className='px-6 py-4 min-w-[120px] flex justify-center items-center gap-2 text-center text-white  text-lg bg-cyan-500 uppercase'
              href='tel:+33756946684'>
              <svg
                width='35px'
                height='35px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z'
                  fill='#fff'
                />
              </svg>
              <span className='font-semibold'>Appelez-nous!</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
