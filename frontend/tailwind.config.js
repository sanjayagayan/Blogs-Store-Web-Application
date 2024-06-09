/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/hero-cover.webp')",
        'heroimage': "url('/heroimage.jpg')",
        'heroimage2': "url('/heroimage3.webp')",
      }
    },
  },
  plugins: [],
}

