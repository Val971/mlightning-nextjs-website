'use client';

import { useEffect, useRef, useState } from 'react';

type AnimatedStatProps = {
  value: string;
  className?: string;
};

/**
 * Parse une valeur du type "6 ans+", "500+" ou "< 1 h" en
 * { prefix: "< ", target: 1, suffix: " h" } pour pouvoir animer le nombre
 * en gardant le préfixe/suffixe textuel intact.
 */
function parseValue(raw: string) {
  const match = raw.match(/^(\D*)(\d+)(.*)$/);
  if (!match) return { prefix: '', target: 0, suffix: raw, hasNumber: false };
  const [, prefix, numStr, suffix] = match;
  return { prefix, target: parseInt(numStr, 10), suffix, hasNumber: true };
}

/**
 * Fait compter le nombre de 0 jusqu'à sa valeur cible quand l'élément entre
 * dans le viewport (une seule fois), en conservant le préfixe/suffixe.
 */
export default function AnimatedStat({ value, className = '' }: AnimatedStatProps) {
  const { prefix, target, suffix, hasNumber } = parseValue(value);
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !hasNumber) return;

    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const duration = 1200;
          const startTime = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasNumber, target]);

  return (
    <div ref={ref} className={className}>
      {hasNumber ? `${prefix}${display}${suffix}` : value}
    </div>
  );
}
