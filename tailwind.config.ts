import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwindcss-animate"


const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [tailwindAnimate],
}

export default config
