/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.ts",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          'from': { 
            opacity: 0, 
            transform: 'translateY(10px)' 
          },
          'to': { 
            opacity: 1, 
            transform: 'translateY(0)' 
          },
        }
      }
    },
  },
  plugins: [],
}