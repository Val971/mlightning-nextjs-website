import Link from 'next/link';
import { ReactNode } from 'react';

type LegalPageProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export default function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <section className="max-w-content mx-auto px-6 pt-[clamp(3rem,6vw,5rem)] pb-[clamp(4rem,7vw,7rem)]">
      <Link href="/" className="text-white/60 hover:text-white text-sm">
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="text-[clamp(2rem,4.4vw,3rem)] mt-6 mb-2 tracking-[-.01em]">
        {title}
      </h1>
      <p className="text-white/45 text-[.85rem] mb-10">
        Dernière mise à jour : {updatedAt}
      </p>

      <div className="flex flex-col gap-8 max-w-[72ch]">{children}</div>
    </section>
  );
}
