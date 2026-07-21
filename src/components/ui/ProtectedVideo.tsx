'use client';

import { VideoHTMLAttributes, forwardRef } from 'react';

/**
 * Wrapper autour de <video> qui masque le bouton de téléchargement des
 * contrôles natifs et bloque le clic-droit / menu contextuel. Comme pour
 * ProtectedImage, ça décourage le téléchargement direct mais n'empêche pas
 * un enregistrement d'écran.
 *
 * Accepte une ref (forwardRef) pour permettre un contrôle play/pause
 * programmatique — voir Gallery.tsx, qui ne joue une vidéo que lorsqu'elle
 * est réellement visible à l'écran.
 */
const ProtectedVideo = forwardRef<HTMLVideoElement, VideoHTMLAttributes<HTMLVideoElement>>(
  ({ className = '', ...props }, ref) => {
    return (
      <video
        ref={ref}
        {...props}
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        className={`no-drag ${className}`}
      />
    );
  }
);

ProtectedVideo.displayName = 'ProtectedVideo';

export default ProtectedVideo;
