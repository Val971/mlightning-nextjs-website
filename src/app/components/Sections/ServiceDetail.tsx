import React from 'react';
import Image from 'next/image';
import { IService } from '@/types';

interface ServiceDetailProps {
  service: IService;
}
export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className='flex flex-col gap-8'>
      <div className='h-fit space-y-5'>
        <h4 className='mb-5 text-3xl md:text-2xl font-semibold uppercase text-white '>
          {service.title}
        </h4>
        <p className='text-xl text-gray-100 md:text-lg'>
          {service.description}
        </p>
      </div>
      <div className='w-full h-64 overflow-hidden'>
        <Image
          loading='lazy'
          src={service.url}
          className='w-full h-full object-cover cursor-pointer'
          alt='close button'
          width={400}
          height={200}
        />
      </div>
      {service.details.map((item) => {
        return (
          <div key={item.id}>
            <div className=' h-fit space-y-5 '>
              {item.url && (
                <div className='w-full h-64 overflow-hidden'>
                  <Image
                    loading='lazy'
                    src={item.url}
                    className='w-full cursor-pointer'
                    alt='close button'
                    width={400}
                    height={200}
                  />
                </div>
              )}
              <h4 className='mb-5 text-3xl md:text-2xl font-semibold uppercase text-white'>
                {item.id}. {item.title}
              </h4>
              <p className='text-xl text-gray-100 md:text-lg'>
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
