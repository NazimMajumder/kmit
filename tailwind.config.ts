import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "st-tropaz": {
          "50": "#f3f6fc",
          "100": "#e5edf9",
          "200": "#c6d9f1",
          "300": "#94bae5",
          "400": "#5b95d5",
          "500": "#3679c1",
          "600": "#265ea3",
          "700": "#235391",
          "800": "#1e416e",
          "900": "#1e385c",
          "950": "#14243d",
        },
        lima: {
          "50": "#f3ffe4",
          "100": "#e4ffc6",
          "200": "#c8ff93",
          "300": "#a3ff55",
          "400": "#81f922",
          "500": "#57cc02",
          "600": "#47b300",
          "700": "#378803",
          "800": "#2e6b09",
          "900": "#295a0d",
          "950": "#113201",
        },
        silver: {
          "50": "#f7f7f7",
          "100": "#f0f0f0",
          "200": "#e3e3e3",
          "300": "#d1d1d1",
          "400": "#bcbcbc",
          "500": "#aaaaaa",
          "600": "#969696",
          "700": "#818181",
          "800": "#6a6a6a",
          "900": "#585858",
          "950": "#333333",
        },
        "midnight-blue": {
          "50": "#e9f9ff",
          "100": "#cef1ff",
          "200": "#a8e9ff",
          "300": "#6ddfff",
          "400": "#28c9ff",
          "500": "#00a3ff",
          "600": "#0079ff",
          "700": "#005fff",
          "800": "#0050e4",
          "900": "#0049b1",
          "950": "#01357c",
        },
        sun: {
          "50": "#fff9eb",
          "100": "#fdedc8",
          "200": "#fbdb8c",
          "300": "#f8c351",
          "400": "#f7af32",
          "500": "#f08a10",
          "600": "#d5650a",
          "700": "#b1450c",
          "800": "#8f3611",
          "900": "#762d11",
          "950": "#441404",
        },
      },
      screens: { tablet: { max: "760px" } },
    },
  },
  plugins: [],
};
export default config;
