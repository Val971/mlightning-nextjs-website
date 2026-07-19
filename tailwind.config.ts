import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#07070c',
        'bg-scrollbar': '#0d0d16',
      },
      fontFamily: {
        heading: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      borderRadius: {
        card: '22px',
        'card-lg': '28px',
        pill: '999px',
        input: '12px',
      },
      boxShadow: {
        cta: '0 8px 30px -8px rgba(160,180,255,.5)',
      },
      backgroundSize: {
        holo: '220% 220%',
      },
      keyframes: {
        holoShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        holo: 'holoShift 7s ease infinite',
      },
      spacing: {
        section: 'clamp(4rem,7vw,7rem)',
      },
    },
  },
  plugins: [],
};
export default config;
