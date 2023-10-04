/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundColor: {
                sb: "#231b2e",
                sbr: "#120822",
                player: "#130c1c",
                main: "#170f23",
                "b-main": "#170f23",
                at: "#3a3344",
                "b-button": "#9B4DE0",
                "b-active": "#3a3344",
                modal: "#34224f",
                bmodal: "#ffbd00",
                overlay: "rgba(0,0,0,0.5)",
            },
            colors: {
                main: "#dadada",
                "main-100": "#ffffff80",
                light: "#fff",
                at: "#fff",
                "main-hv": "#c273ed",
            },
        },
    },
    plugins: [],
};
