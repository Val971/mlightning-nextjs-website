import { ElementType, ReactNode } from 'react';

type HoloTextProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  animate?: boolean;
};

/**
 * Texte avec dégradé holographique (background-clip: text).
 * Utilisé pour les mots accent des titres, sur-titres, chiffres de stats,
 * étoiles des avis et numéros du process.
 */
export default function HoloText({
  as: Tag = 'span',
  children,
  className = '',
  animate = true,
}: HoloTextProps) {
  return (
    <Tag className={`${animate ? 'holo-text' : 'holo-text-static'} ${className}`}>
      {children}
    </Tag>
  );
}
