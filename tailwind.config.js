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
        scale: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      animation: {
        'pulse-once': 'pulse-once 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'bounce-custom': 'bounce 0.1s infinite',
        'ellipse-scale-1': 'scale 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'ellipse-scale-2': 'scale 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
        'ellipse-scale-3': 'scale 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards'
        
      },
    },
  },
  plugins: [],
}