/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                color: { 10: "#133b5c", 20: "rgb(215,208,203)" },
            },
            fontFamily: {
              style1: "Delius Swash Caps",
              style2: "Comfortaa",
              style3: "Short Stack",
          },
          backgroundImage: {
            'main': "url('./images/zubiRemovebg.png')",
          }
        },
    },
    plugins: [],
};
