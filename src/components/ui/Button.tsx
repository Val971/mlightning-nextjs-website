import { ReactNode } from 'react';

type ButtonProps = {
  href?: string;
  variant?: 'holo' | 'outline';
  className?: string;
  children: ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

/**
 * CTA pilule : variante "holo" (fond dégradé animé, texte sombre) ou
 * "outline" (contour clair, fond translucide). Rendu en <a> si `href` est
 * fourni, sinon en <button> (utile pour le submit du formulaire).
 */
export default function Button({
  href,
  variant = 'holo',
  className = '',
  children,
  type,
  onClick,
}: ButtonProps) {
  const cls = `${variant === 'holo' ? 'btn-holo' : 'btn-outline'} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? 'button'} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
