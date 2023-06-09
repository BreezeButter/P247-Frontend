/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ea580c",

          secondary: "#ffffff",

          accent: "#4ade80",

          neutral: "#374151",

          "base-100": "#ffffff",

          info: "#3b82f6",

          success: "#16a34a",

          warning: "#ECC00E",

          error: "#b91c1c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
};
