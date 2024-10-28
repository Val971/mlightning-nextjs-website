'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  targetNumber: number;
  text: string;
  duration: number;
}
export default function AnimatedCounter({
  targetNumber,
  text,
  duration,
}: AnimatedCounterProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          startCounting();
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted]);

  const startCounting = () => {
    const duration = 2000;
    const increment = targetNumber / (duration / 50);
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetNumber) {
        clearInterval(interval);
        setCounter(targetNumber);
      } else {
        setCounter(Math.floor(currentCount));
      }
    }, 50);
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: duration,
            ease: 'easeInOut',
          },
        },
      }}
      className=' flex items-center justify-center '>
      <div className='text-center'>
        <div
          ref={counterRef}
          className='stock text-6xl lg:text-7xl text-cyan-500 font-extrabold transition-all duration-700 mb-4 '>
          {counter}+
        </div>
        <h4 className='text-2xl text-white uppercase font-bold'>{text}</h4>
      </div>
    </motion.div>
  );
}
