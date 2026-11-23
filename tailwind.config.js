/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Bootstrap standard semantic color palette adapted to modern aesthetics
        bs: {
          primary: {
            DEFAULT: '#0d6efd',
            hover: '#0b5ed7',
            light: '#cfe2ff',
            text: '#084298',
          },
          secondary: {
            DEFAULT: '#6c757d',
            hover: '#5c636a',
            light: '#e2e3e5',
            text: '#41464b',
          },
          success: {
            DEFAULT: '#198754',
            hover: '#157347',
            light: '#d1e7dd',
            text: '#0f5132',
          },
          danger: {
            DEFAULT: '#dc3545',
            hover: '#bb2d3b',
            light: '#f8d7da',
            text: '#842029',
          },
          warning: {
            DEFAULT: '#ffc107',
            hover: '#ffca2c',
            light: '#fff3cd',
            text: '#664d03',
          },
          info: {
            DEFAULT: '#0dcaf0',
            hover: '#31d2f2',
            light: '#cff4fc',
            text: '#055160',
          },
          light: {
            DEFAULT: '#f8f9fa',
            hover: '#f9fafb',
            border: '#dee2e6',
            text: '#212529',
          },
          dark: {
            DEFAULT: '#212529',
            hover: '#1c1f23',
            light: '#ced4da',
            text: '#ffffff',
          }
        }
      },
      screens: {
        'xs': '475px',
        // sm: 640px (Tailwind standard ~ Bootstrap 576px)
        // md: 768px (Bootstrap md)
        // lg: 1024px (Bootstrap lg 992px)
        // xl: 1280px (Bootstrap xl 1200px)
        // 2xl: 1400px (Bootstrap xxl 1400px)
      }
    },
  },
  plugins: [],
}
