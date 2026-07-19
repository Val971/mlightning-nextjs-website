import HoloText from '@/components/ui/HoloText';
import Reveal from '@/components/ui/Reveal';
import { processSteps } from '@/data/process';

export default function Process() {
  return (
    <section id="process" className="border-t border-white/[.08] bg-white/[.02]">
      <div className="max-w-content mx-auto px-6 py-section">
        <Reveal className="max-w-[46ch] mb-12">
          <HoloText
            as="span"
            className="uppercase tracking-[.14em] text-[.8rem] font-bold block"
          >
            Le process
          </HoloText>
          <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] mt-[.9rem]">
            Simple, du premier appel à la livraison
          </h2>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[1.2rem]">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delayMs={i * 80} className="h-full">
              <div className="h-full p-[1.8rem] border border-white/10 rounded-2xl bg-white/[.02]">
                <HoloText as="div" className="font-heading font-extrabold text-[2.6rem]">
                  {step.n}
                </HoloText>
                <h3 className="text-[1.25rem] mt-[.7rem] mb-[.5rem]">{step.title}</h3>
                <p className="text-white/60 text-[.92rem] leading-[1.55]">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
