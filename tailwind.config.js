/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'body-pattern' : "url('https://images3.alphacoders.com/241/241059.jpg')"
        
      })
    },
  },
  plugins: [],
}

