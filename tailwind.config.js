/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         animation: {
            bounce:
               'bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite',
         },
         keyframes: {
            bounce: {
               from: { transform: 'translateY(10px)' },
               to: { transform: 'translateY(0)' },
            },
         },
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
               'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
      },
   },
   plugins: [],
};
