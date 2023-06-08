/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                signin_bg: "#06f",
                signin_gray: "#f4f4f4",
                signin_border: "#d2d2d2",
                signin_font: "#0078ff",
                signin_btn: "#4981f8"
            },
        }
    },
    plugins: []
};
