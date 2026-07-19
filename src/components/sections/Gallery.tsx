'use client';

import { useEffect, useState } from 'react';
import HoloText from '@/components/ui/HoloText';
import Reveal from '@/components/ui/Reveal';
import ProtectedImage from '@/components/ui/ProtectedImage';
import ProtectedVideo from '@/components/ui/ProtectedVideo';
import { gallery } from '@/data/gallery';

const spanClass: Record<string, string> = {
  big: 'col-span-2 row-span-2 max-[640px]:col-span-1 max-[640px]:row-span-1',
  tall: 'row-span-2 max-[640px]:row-span-1',
  wide: 'col-span-2 max-[640px]:col-span-1',
  normal: '',
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? gallery[activeIndex] : null;

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length));

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <section id="realisations" className="max-w-content mx-auto px-6 py-section">
      <Reveal className="text-center max-w-[44ch] mx-auto mb-12">
        <HoloText
          as="span"
          className="uppercase tracking-[.14em] text-[.8rem] font-bold block"
        >
          Réalisations
        </HoloText>
        <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] mt-[.9rem]">
          Nos dernières créations
        </h2>
        <p className="text-white/60 mt-4 leading-[1.6]">
          Un aperçu de nos derniers projets, réalisés chez nos clients.
        </p>
      </Reveal>

      <div className="grid grid-cols-4 max-[640px]:grid-cols-2 auto-rows-[200px] gap-4 grid-flow-dense">
        {gallery.map((item, i) => (
          <Reveal
            key={i}
            delayMs={i * 60}
            className={`h-full ${spanClass[item.span]}`}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label="Agrandir"
              className="group relative m-0 block w-full h-full overflow-hidden rounded-[18px] border border-white/10 cursor-zoom-in"
            >
              {item.type === 'video' ? (
                <ProtectedVideo
                  src={item.src}
                  poster={item.poster}
                  aria-label={item.alt}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <ProtectedImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
              )}
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-2xl">
                  ⤢
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={close}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Fermer"
            className="absolute top-6 right-6 w-11 h-11 rounded-[10px] border border-white/[.14] bg-white/[.06] text-white text-xl"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Précédent"
            className="absolute left-4 max-[640px]:left-2 w-11 h-11 rounded-full border border-white/[.14] bg-white/[.06] text-white text-xl"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Suivant"
            className="absolute right-4 max-[640px]:right-2 w-11 h-11 rounded-full border border-white/[.14] bg-white/[.06] text-white text-xl"
          >
            ›
          </button>

          <div
            className="relative max-w-5xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {active.type === 'video' ? (
              <ProtectedVideo
                src={active.src}
                poster={active.poster}
                aria-label={active.alt}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="max-w-full max-h-[85vh] w-auto h-auto rounded-xl"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={active.src}
                alt={active.alt}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="no-drag max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
