import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF2FE',
          100: '#E1E9FE',
          200: '#C9D4FC',
          300: '#A9B8F8',
          400: '#7A88F2',
          500: '#696FEB',
          600: '#514CDF',
          700: '#453EC4',
          800: '#38359E',
          900: '#32317E',
          950: '#1F1D49',
        },
        secondary: {
          50: '#EFF2FE',
          100: '#E1E9FE',
          200: '#C9D4FC',
          300: '#A9B8F8',
        },
        accent: {
          600: '#514CDF',
          700: '#453EC4',
          800: '#38359E',
        },
        black: {
          200: '#B9BCC0',
          600: '#666768',
          800: '#3C4043',
          900: '#28292A',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
