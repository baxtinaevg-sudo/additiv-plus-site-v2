const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.resolve(__dirname, 'index.html'),
    path.join(__dirname, 'src/**/*.{vue,js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        beige: '#FAF8F5',
        champagne: {
          DEFAULT: '#C5A572',
          light: '#E8D5B7',
          dark: '#8B7355',
        },
        graphite: {
          DEFAULT: '#2D2D2D',
          soft: '#555555',
        },
        'crm-text': '#1F2937',
        'crm-border': '#E5E7EB',
        muted: '#9CA3AF',
        danger: '#EF4444',
        success: '#10B981',
        warning: '#F59E0B',
        info: '#3B82F6',
      },
    },
  },
  plugins: [],
}