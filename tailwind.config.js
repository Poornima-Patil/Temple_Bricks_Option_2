/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {


        extend: {
            colors: {
                'primary-color': '#ff5050',
                'primary-dark-shade': '#ff8181',
                'primary-light-shade': '#ffe5dd',
            },
            'fontFamily': {
                'quicksand': ['Quicksand', 'sans-serif'],
            }
        },
    },
    plugins: [],
}