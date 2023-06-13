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
                signin_btn: "#4981f8",
                navbar_gray1: "#aeaeae",
                navbar_gray2: "#6b6b6b",
                navbar_blue: "#0084ff",
                list_border: "rgb(215, 226, 235)",
                btn_blue: "rgb(0, 120, 255)"
            },
        }
    },
    plugins: []
};
