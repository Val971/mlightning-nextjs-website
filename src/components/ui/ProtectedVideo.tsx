'use client';

import { VideoHTMLAttributes } from 'react';

/**
 * Wrapper autour de <video> qui masque le bouton de téléchargement des
 * contrôles natifs et bloque le clic-droit / menu contextuel. Comme pour
 * ProtectedImage, ça décourage le téléchargement direct mais n'empêche pas
 * un enregistrement d'écran.
 */
export default function ProtectedVideo({
  className = '',
  ...props
}: VideoHTMLAttributes<HTMLVideoElement>) {
  return (
    <video
      {...props}
      controlsList="nodownload noremoteplayback"
      disablePictureInPicture
      onContextMenu={(e) => e.preventDefault()}
      className={`no-drag ${className}`}
    />
  );
}
