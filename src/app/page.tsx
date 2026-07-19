import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <Marquee />
      <Services />
      <Gallery />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
