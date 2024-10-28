import React from 'react';
import AnimatedCounter from '../AnimatedCounter';

export default function SatisfactionNumber() {
  return (
    <div className=' p-4 flex flex-col justify-between lg:flex-row gap-8 lg:max-w-7xl lg:mx-auto lg:flex lg:pt-32 py-20'>
      <div className='leading-10'>
        <AnimatedCounter
          duration={0.6}
          text='Années de service'
          targetNumber={4}
        />
      </div>
      <div className='leading-10'>
        <AnimatedCounter
          duration={0.9}
          text='Des clients satisfaits'
          targetNumber={100}
        />
      </div>
      <div className='leading-10'>
        <AnimatedCounter
          duration={1.2}
          text='Satisfaction client'
          targetNumber={100}
        />
      </div>
    </div>
  );
}
