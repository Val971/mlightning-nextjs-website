import Link from 'next/link';
import ProtectedImage from '@/components/ui/ProtectedImage';
import type { Service } from '@/data/services';

export default function ServiceCard({ num, label, desc, heroImage, slug }: Service) {
  return (
    <div className="glass-card h-full rounded-card p-[1.3rem] flex flex-col transition-transform duration-300 hover:-translate-y-[6px] hover:border-white/[.28]">
      <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-[1.3rem] border border-white/[.08]">
        <ProtectedImage
          src={heroImage}
          alt={label}
          fill
          sizes="(max-width: 900px) 100vw, 280px"
          className="object-cover"
        />
      </div>
      <span className="font-heading font-bold text-[.85rem] text-white/40">
        {num}
      </span>
      <h3 className="text-[1.5rem] mt-[.4rem] mb-[.6rem]">{label}</h3>
      <p className="text-white/[.62] text-[.95rem] leading-[1.55]">{desc}</p>
      <Link
        href={`/services/${slug}`}
        className="mt-4 text-[.9rem] font-semibold text-white/80 hover:text-white inline-flex items-center gap-[.35rem]"
      >
        En savoir plus →
      </Link>
    </div>
  );
}
