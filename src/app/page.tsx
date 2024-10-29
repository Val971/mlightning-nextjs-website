'use client';
import { LoadScript } from '@react-google-maps/api';

import About from './components/Sections/About';
import Carousel from './components/Sections/Carousel';
import Competences from './components/Sections/Competences';
import Reviews from './components/Sections/Reviews';
import SatisfactionNumber from './components/Sections/SatisfactionNumber';
import Services from './components/Sections/Services';
import VideoPlayeur from './components/Sections/VideoPlayeur';
import Whatsapp from './components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className=''>
      <Carousel />
      <Competences />
      <About />
      <Services />
      <VideoPlayeur />
      <SatisfactionNumber />
      <LoadScript
        googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
        libraries={['places']}
        language='fr'>
        <Reviews />
      </LoadScript>
      <Whatsapp />
    </div>
  );
}
