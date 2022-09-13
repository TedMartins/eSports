/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './*.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        background: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 27.00%, #43E7AD 34.00%, #E1D55D 40.00%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0% , rgba(0, 0, 0, 0.9) 67.80%)',
      },
    },
  },
  plugins: [],
}
