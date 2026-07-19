import { marqueeItems } from '@/data/marquee';

export default function Marquee() {
  // Le contenu est dupliqué pour créer une boucle de défilement parfaitement
  // continue (translateX(-50%) ramène exactement au point de départ).
  const track = [...marqueeItems, ...marqueeItems];

  return (
    <section className="group border-t border-b border-white/[.08] overflow-hidden bg-white/[.02] py-[1.4rem]">
      <div
        className="marquee-track flex w-max gap-x-[1.6rem] pr-[1.6rem] group-hover:[animation-play-state:paused]"
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[.6rem] font-heading font-bold text-[clamp(.95rem,1.4vw,1.15rem)] text-white/[.85] whitespace-nowrap"
          >
            <span className="text-[#b7a6ff]">◆</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
