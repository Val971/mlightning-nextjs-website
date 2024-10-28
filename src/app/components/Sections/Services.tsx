import React from 'react';
import { services } from '../../../datas/services';
import ServiceCard from '../ServiceCard';
import Links from '../Links';

export default function Services() {
  return (
    <div
      id='services'
      className='gap-12 grid p-4 lg:pt-32 pt-20 lg:max-w-7xl lg:mx-auto  lg:grid lg:grid-cols-3 relative'>
      <div className='relative'>
        <div className='sticky top-40'>
          <h2 className='text-white uppercase text-4xl font-bold lg:text-5xl'>
            Dedicated Services
          </h2>
          <p className='text-[#d3d3d3d3] text-lg py-5'>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.`}
          </p>
          <Links text={`Voir tous les services`} />
        </div>
      </div>
      <div className='  gap-8 lg:col-span-2'>
        {services.map((item) => {
          return <ServiceCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
