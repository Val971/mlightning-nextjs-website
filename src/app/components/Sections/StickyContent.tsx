import React from 'react';

const StickyContent = () => {
  return (
    <div className='relative'>
      {/* Contenu supplémentaire pour permettre le défilement */}
      <div className='h-screen bg-gray-200 flex items-center justify-center'>
        <p className='text-lg'>
          Faites défiler vers le bas pour voir le contenu sticky.
        </p>
      </div>

      {/* Contenu sticky */}
      <div className='sticky top-0 bg-white shadow-md p-4'>
        <h2 className='text-xl font-bold'>Je suis un contenu sticky</h2>
        <p>{`Je reste en haut de l'écran pendant que vous faites défiler.`}</p>
      </div>

      {/* Plus de contenu pour faire défiler la page */}
      <div className='h-screen bg-gray-300 flex items-center justify-center'>
        <p className='text-lg'>{`Continuez à défiler pour voir l'effet sticky.`}</p>
      </div>
    </div>
  );
};

export default StickyContent;
