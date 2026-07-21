import Button from '@/components/ui/Button';
import HoloText from '@/components/ui/HoloText';
import AnimatedStat from '@/components/ui/AnimatedStat';
import ProtectedVideo from '@/components/ui/ProtectedVideo';
import { stats } from '@/data/stats';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] max-[900px]:min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Vidéo en fond plein cadre, derrière tout le contenu du Hero.
          Cette source est filmée en paysage (16:9) : un simple `object-cover`
          plein écran la recadre légèrement sur les bords sans zoom agressif
          ni perte de netteté, donc pas besoin du montage flou/net utilisé
          pour une vidéo portrait. */}
      <div className="absolute inset-0 -z-10 bg-[#07070c]">
        <ProtectedVideo
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/videoPlayer2.mp4"
          poster="/images/carousel3.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Réalisation Mlightning Custom en vidéo"
        />
        {/* Assombrit légèrement le bas pour la lisibilité des boutons. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(7,7,12,.1) 0%, rgba(7,7,12,.25) 55%, rgba(7,7,12,.65) 100%)',
          }}
        />
        {/* Assombrit un peu la gauche (où vit le texte) sur desktop uniquement. */}
        <div
          className="absolute inset-0 max-[900px]:hidden"
          style={{
            background:
              'linear-gradient(90deg, rgba(7,7,12,.5) 0%, rgba(7,7,12,.08) 55%, transparent 100%)',
          }}
        />
      </div>

      <div className="max-w-content mx-auto px-6 py-[clamp(4rem,10vw,7rem)] w-full">
        <div
          className="max-w-[56ch]"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,.55)' }}
        >
          <span
            className="animate-fade-up inline-flex items-center gap-[.55rem] px-4 py-2 rounded-pill border border-white/[.16] bg-white/[.06] backdrop-blur-[6px] text-[.8rem] font-semibold uppercase tracking-[.06em] text-white/80"
            style={{ animationDelay: '0s' }}
          >
            <span
              className="w-[7px] h-[7px] rounded-full bg-[#7dd3fc]"
              style={{ boxShadow: '0 0 10px #7dd3fc' }}
            />
            Customisation auto · Près de chez vous

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
            className="animate-fade-up text-[clamp(1.05rem,1.5vw,1.28rem)] text-white/80 max-w-[50ch] mt-6 leading-[1.6]"
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
            <Button href="/#contact">Prendre rendez-vous</Button>
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
                <div className="text-[.82rem] text-white/70 mt-[.15rem]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
