/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 6%)',
        foreground: 'hsl(0 0% 96%)',
        primary: {
          DEFAULT: 'hsl(0 0% 96%)',
          foreground: 'hsl(0 0% 6%)',
        },
        accent: {
          DEFAULT: 'hsl(48 92% 55%)',
          foreground: 'hsl(0 0% 6%)',
        },
        surface: {
          DEFAULT: 'hsl(0 0% 10%)',
          raised: 'hsl(0 0% 14%)',
        },
        'muted-foreground': 'hsl(0 0% 52%)',
        border: 'hsl(0 0% 18%)',
      },
      fontFamily: {
        headline: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.14em',
        'label-wide': '0.2em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
