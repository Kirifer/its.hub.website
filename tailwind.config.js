/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        instrument: ['"Instrument Sans"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        'pulse-once': {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'pulse-once': 'pulse-once 2s ease-out forwards',
        'fade-in': 'fade-in 2s ease-out forwards',
        'bounce-custom': 'bounce 0.1s infinite',
      },
    },
  },
  plugins: [],
}