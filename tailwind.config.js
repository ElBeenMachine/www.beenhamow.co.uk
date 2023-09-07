/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "my-cyan": {
                    DEFAULT: "#00262A",
                    50: "#",
                    100: "#02f2f2",
                    200: "#04d9d9",
                    300: "#05AAAA",
                    400: "#048f8f",
                    500: "#",
                    600: "#",
                    700: "#",
                    800: "#",
                    900: "#00262A",
                },
            },
            keyframes: {
                float: {
                    "0%, 100%": {
                        transform: "translatey(0px)",
                    },
                    "50%": {
                        transform: "translatey(-20px)",
                    },
                },
            },
            animation: {
                float: "float 4s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
