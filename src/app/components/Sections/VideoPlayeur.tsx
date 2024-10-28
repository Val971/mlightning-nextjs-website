import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

export default function VideoPlayeur() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: 'easeOut',
          },
        },
      }}
      className='mt-20'>
      <video
        className='w-full h-auto shadow-lg xl:hidden'
        controls
        autoPlay={false}
        muted={false}
        width='600'>
        <source src={`/videos/videoPlayer.mp4`} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <video
        className='w-full h-auto shadow-lg hidden xl:block'
        controls
        autoPlay={false}
        muted={false}
        width='600'>
        <source src={`/videos/videoPlayer2.mp4`} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
}
