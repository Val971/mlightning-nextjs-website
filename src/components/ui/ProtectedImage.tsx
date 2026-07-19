'use client';

import Image, { ImageProps } from 'next/image';

/**
 * Wrapper autour de next/image qui décourage la sauvegarde directe
 * (clic-droit "Enregistrer l'image", glisser-déposer, menu contextuel iOS).
 * Ce n'est pas une protection absolue — une capture d'écran reste toujours
 * possible — mais ça bloque les méthodes les plus courantes.
 */
export default function ProtectedImage({ className = '', alt, ...props }: ImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      className={`no-drag ${className}`}
    />
  );
}
