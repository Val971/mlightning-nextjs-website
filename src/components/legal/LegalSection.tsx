import { ReactNode } from 'react';

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export default function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-[1.3rem] text-white">{title}</h2>
      <div className="text-white/70 leading-[1.7] text-[.95rem] flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
}
