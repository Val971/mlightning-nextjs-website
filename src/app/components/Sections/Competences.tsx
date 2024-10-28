import React from 'react';
import { competences } from '../../../datas/competences';
import CompetenceCard from '../CompetenceCard';

export default function Competences() {
  return (
    <div className='lg:max-w-7xl lg:mx-auto lg:flex mt-20'>
      {competences.map((item) => {
        return <CompetenceCard key={item.id} item={item} />;
      })}
    </div>
  );
}
