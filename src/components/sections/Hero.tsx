import Button from '@/components/ui/Button';
import HoloText from '@/components/ui/HoloText';
import AnimatedStat from '@/components/ui/AnimatedStat';
import ProtectedVideo from '@/components/ui/ProtectedVideo';
import { phoneHref } from '@/data/nav';
import { stats } from '@/data/stats';

export default function Hero() {
  return (
    <section
      id="top"
      className="max-w-content mx-auto px-6 pt-[clamp(3rem,7vw,6rem)] pb-[clamp(3rem,6vw,5rem)]"
    >
      <div className="grid grid-cols-[1.15fr_.85fr] max-[900px]:grid-cols-1 gap-[clamp(2rem,4vw,4rem)] items-center">
        <div>
          <span
            className="animate-fade-up inline-flex items-center gap-[.55rem] px-4 py-2 rounded-pill border border-white/[.16] bg-white/[.04] text-[.8rem] font-semibold uppercase tracking-[.06em] text-white/80"
            style={{ animationDelay: '0s' }}
          >
            <span
              className="w-[7px] h-[7px] rounded-full bg-[#7dd3fc]"
              style={{ boxShadow: '0 0 10px #7dd3fc' }}
            />
            Customisation auto · Région parisienne
          </span>

          <h1
            className="animate-fade-up text-[clamp(2.7rem,6.5vw,5.4rem)] mt-6 tracking-[-.02em]"
            style={{ animationDelay: '.1s' }}
          >
            Votre habitacle,
            <br />
            <HoloText>réinventé.</HoloText>
          </h1>

          <p
            className="animate-fade-up text-[clamp(1.05rem,1.5vw,1.28rem)] text-white/70 max-w-[50ch] mt-6 leading-[1.6]"
            style={{ animationDelay: '.2s' }}
          >
            LED d&apos;ambiance, ciel étoilé, CarPlay, volants sur-mesure. On
            transforme l&apos;intérieur de votre voiture en pièce unique —
            pensée dans le moindre détail.
          </p>

          <div
            className="animate-fade-up flex flex-wrap gap-[.9rem] mt-[2.2rem]"
            style={{ animationDelay: '.3s' }}
          >
            <Button href={phoneHref}>Prendre rendez-vous</Button>
            <Button href="#services" variant="outline">
              Voir nos services
            </Button>
          </div>

          <div
            className="animate-fade-up flex flex-wrap gap-8 mt-[2.6rem]"
            style={{ animationDelay: '.4s' }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <AnimatedStat
                  value={s.value}
                  className="holo-text font-heading font-extrabold text-[1.9rem]"
                />
                <div className="text-[.82rem] text-white/[.55] mt-[.15rem]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="animate-fade-up relative aspect-[4/5] rounded-[26px] overflow-hidden border border-white/10"
          style={{ animationDelay: '.15s' }}
        >
          <div className="floaty relative w-full h-full">
            <ProtectedVideo
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/videoPlayer.mp4"
              poster="/images/carousel3.png"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Réalisation By Mlightning Custom en vidéo"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, transparent 45%, rgba(7,7,12,.7))',
              }}
            />
            <div className="absolute left-[1.1rem] bottom-[1.1rem] right-[1.1rem] flex items-center gap-[.7rem] pointer-events-none">
              <span className="px-[.8rem] py-[.4rem] rounded-pill bg-[rgba(7,7,12,.6)] backdrop-blur-[6px] border border-white/[.14] text-[.78rem] font-semibold">
                ✦ Réalisation Mlightning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
