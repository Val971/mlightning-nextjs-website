import React from 'react';
import { services } from '../../../datas/services';
import ServiceCard from '../ServiceCard';

export default function Services() {
  return (
    <div
      id='services'
      className='gap-12 grid p-4 lg:pt-32 pt-20 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3 relative'>
      <div className=''>
        <h2 className='text-white uppercase text-4xl font-bold lg:text-5xl'>
          Services dédiés
        </h2>
        <p className='text-[#d3d3d3d3] text-lg py-5'>
          {`Nous sommes passionnés par l'art de transformer votre voiture en un espace qui vous ressemble vraiment. Que vous cherchiez à personnaliser l'intérieur de votre véhicule pour le rendre plus confortable, plus luxueux, ou tout simplement unique, nous avons les services qu'il vous faut pour donner vie à votre vision.y`}
        </p>
      </div>
      <div className='  gap-8 lg:col-span-2'>
        {services.map((item) => {
          return <ServiceCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
