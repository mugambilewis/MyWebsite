/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class', // Enable dark mode support
  content: [
    './index.html',
    './src/**/*.{js,jsx}', // add ts/tsx here if you switch back to TS
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        foreground: '#1f2937', // slate-800 (adjust if needed)
        border: '#d1d5db',     // gray-300
        background: '#f9fafb', // gray-50
        accent: '#e0f2fe',     // sky-100
      },
      
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'glow': 'glow 2s infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px #3b82f6' },
          '100%': { boxShadow: '0 0 20px #9333ea' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
