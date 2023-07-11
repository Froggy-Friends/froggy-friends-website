/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark-blue': '#154489',
      'blue': '#3e6c93',
      'light-blue': '#a0b1dc',
      'dark-green': '#0a9348',
      'green': '#62a04c',
      'light-green': '#92cfa8',
      'dark-yellow': '#f6dd5d',
      'yellow': '#fded22',
      'light-yellow': '#ffeb84',
      'dark-red': '#b63123',
      'red': '#e02128',
      'light-red': '#da5143',
      'dark-purple': '#662e8e',
      'purple': '#9e72be',
      'light-purple': '#bd8abd',
      'dark-pink': '#c51d5b',
      'pink': '#ea195c',
      'light-pink': '#f26c97',
      'dark-gray': '#2e2e2e',
      'gray': '#484848',
      'light-gray': '#838486',
      'dark-orange': '#c95e0b',
      'orange': '#d0770e',
      'light-orange': '#f17e27',
      'dark-brown': '#a87b51',
      'brown': '#c2976d',
      'light-brown': '#ddc4a7',
      'black': '#181818',
      'white': '#fcfdfe'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
