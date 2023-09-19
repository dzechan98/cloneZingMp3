/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundColor: {
                sb: "#231b2e",
                player: "#130c1c",
                main: "#170f23",
                at: "#3a3344",
                modal: "#34224f",
                bmodal: "#ffbd00",
            },
            colors: {
                main: "#dadada",
                at: "#fff",
                "main-hv": "#c273ed",
            },
            keyframes: {
                "slide-right": {
                    "0%": {
                        "-webkit-transform": "translateX(-500px)",
                        transform: "translateX(-500px)",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0)",
                        transform: "translateX(0)",
                    },
                },
                "slide-left": {
                    "0%": {
                        "-webkit-transform": "translateX(500px)",
                        transform: "translateX(500px)",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0)",
                        transform: "translateX(0)",
                    },
                },
                "slide-left2": {
                    "0%": {
                        "-webkit-transform": "translateX(500px)",
                        transform: "translateX(500px)",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0)",
                        transform: "translateX(0)",
                    },
                },
            },
            animation: {
                "slide-right":
                    "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
                "slide-left":
                    "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
                "slide-left2":
                    "slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
            },
        },
    },
    plugins: [],
};
