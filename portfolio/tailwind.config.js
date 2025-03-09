/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './node_modules/flowbite/**/*.js', //very important line.
  ],
  theme: {
    extend: {
      // background: {
      //   primary: '#7562e0',
      //   'my-gray': '#bdbdbd',
      //   'default-dark': '#181824',
      //   'default-lighter': '#31313f',
      //   'default-light': '#1a1a29',
      // },
    },
  },
  plugins: [require('flowbite/plugin')],
}
