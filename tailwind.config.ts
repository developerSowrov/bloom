import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/app/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         container: {
            center: true,
            padding: {
               DEFAULT: "1rem",
               sm: "2rem",
               lg: "4rem",
               xl: "5rem",
               "2xl": "6rem",
            },
         },
         fontFamily: {
            integralCF: ['"Integral CF"', 'sans-serif'],
            satoshi: ['Satoshi', 'sans-serif'],
         },
         fontSize: {
            sm: "0.75rem", // 12px
            base: "0.875rem", // 14px
            lg: "1rem", // 16px
         },
         colors: {
            black: "#000000",
            light: "#ffffff",
            grey: {
               50: "#F2F0F1",
               100: "#F0F0F0",
            },
            discount: "rgb(255, 51, 51)", // Red
         },
         width: {
            productCard: "var(--productCard)",
         },
         height: {
            productCard: "var(--productCard)",
         },
         size: {
            productCard: "var(--productCard)",
         },
         borderRadius: {
            "20": "20px",
         },
      },
   },
   plugins: [],
};

export default config;