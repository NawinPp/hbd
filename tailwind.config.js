/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
      extend: {
        fontFamily: {
          sans:    ['Quicksand', 'sans-serif'],
          serif:   ['"Cormorant Garamond"', 'serif'],
          display: ['"Great Vibes"', 'cursive'],
        },
        keyframes: {
          bob: {
            '0%, 100%': { transform: 'translateY(-12px) rotate(-2.5deg)' },
            '50%':      { transform: 'translateY(2px) rotate(2.5deg)' },
          },
          drift: {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '33%':      { transform: 'translate(40px, -30px) scale(1.1)' },
            '66%':      { transform: 'translate(-30px, 25px) scale(0.95)' },
          },
          rise: {
            '0%':   { transform: 'translateY(0) rotate(-10deg)', opacity: '0' },
            '10%':  { opacity: '0.9' },
            '90%':  { opacity: '0.7' },
            '100%': { transform: 'translateY(-110vh) translateX(40px) rotate(15deg)', opacity: '0' },
          },
          twinkle: {
            '0%, 100%': { opacity: '0', transform: 'scale(0.5) rotate(0deg)' },
            '50%':      { opacity: '1', transform: 'scale(1.2) rotate(180deg)' },
          },
          shimmer: {
            '0%':        { transform: 'translateX(-130%)' },
            '60%, 100%': { transform: 'translateX(130%)' },
          },
        },
        animation: {
          bob:     'bob 4s ease-in-out infinite',
          drift:   'drift 22s ease-in-out infinite',
          rise:    'rise 9s linear infinite',
          twinkle: 'twinkle 3.2s ease-in-out infinite',
          shimmer: 'shimmer 3.5s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  };