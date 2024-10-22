/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/content.json"
  ],
  
  theme: {
    extend: {
      colors: {
        'section-header': '#6a6763',
        'bg-portfolio': 'rgb(243 244 246 / 46%)',
        'nav-bg': "rgb(255 255 255 / 34%)",
        'nav-neutral': "#00000085",
        'icon': '#333',
        "pinkish": 'rgb(165 48 97 / 80%);'
      },
      screens: {
        xs: '480px', // Define your xs breakpoint here
      },
    },
  },
  plugins: [],
};
