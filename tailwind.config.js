/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { inter: "Inter" } },
    colors: {
      white: "#fff",
      gray: {
        "100": "#f1f5f9",
        "200": "#f4f4f5",
        "300": "#e5e7eb",
        "400": "#abadc6",
        "500": "#808080",
        "600": "#6b7280",
        "700": "#424867",
        "800": "#374151",
        "900": "#252a41",
        "1000": "#111827",
      },
      black: "#000",
      indigo: { "100": "#2f80ed", "200": "#2563eb" },
      green: "#27ae60",
    },
    fontSize: {
      base: "12px",
      lg: "14px",
      xl: "16px",
      "2xl": "18px",
      "3xl": "20px",
    },
  },
  corePlugins: { preflight: false },
};
