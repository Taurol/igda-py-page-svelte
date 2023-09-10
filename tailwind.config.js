/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        '128': '38rem',
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}

