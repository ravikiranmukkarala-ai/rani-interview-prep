/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F8F5FF',
          100: '#F0E9FF',
          200: '#E1D3FE',
          300: '#C7AEFD',
          400: '#A67DFB',
          500: '#854CF7',
          600: '#6525E8', // Signature Vibrant Purple
          700: '#5219C4',
          800: '#42149F',
          900: '#351180',
          950: '#200755',
        },
        surface: {
          cream: '#FCFAF6',
          peach: '#FFF2E8',
          peachBorder: '#FCD8C1',
          blue: '#EBF6FF',
          blueBorder: '#BAE0FD',
          mint: '#EBFBF5',
          mintBorder: '#B7F1DC',
          lavender: '#F4EEFF',
          lavenderBorder: '#DAC7FB',
          gray: '#F7F7F8',
          subtle: '#FAFAFB',
        },
        text: {
          main: '#151515',
          body: '#4B5563',
          muted: '#777777',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 30px -10px rgba(101, 37, 232, 0.12)',
        'float': '0 12px 36px -4px rgba(101, 37, 232, 0.15)',
        'glow': '0 0 40px -10px rgba(101, 37, 232, 0.35)',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
