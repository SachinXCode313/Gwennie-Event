/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF8F4',
        'wedding-brown': '#765638',
        'wedding-gold': '#D4AF37',
        'wedding-rose': '#E8B4B8',
        'wedding-burgundy': '#800020',
        'wedding-sage': '#9CAF88',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};