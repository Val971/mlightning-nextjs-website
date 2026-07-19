import HoloText from '@/components/ui/HoloText';
import Reveal from '@/components/ui/Reveal';
import { services } from '@/data/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-content mx-auto px-6 pt-section pb-8"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <HoloText
            as="span"
            className="uppercase tracking-[.14em] text-[.8rem] font-bold block"
          >
            Nos services
          </HoloText>
          <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] mt-[.9rem] max-w-[20ch] tracking-[-.01em]">
            Cinq façons de sublimer votre intérieur
          </h2>
        </div>
        <p className="max-w-[36ch] text-white/60 leading-[1.6]">
          Chaque prestation est réalisée sur-mesure, avec des composants haut
          de gamme et une finition invisible.
        </p>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-[1.2rem]">
        {services.map((service, i) => (
          <Reveal key={service.num} delayMs={i * 80} className="h-full">
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
