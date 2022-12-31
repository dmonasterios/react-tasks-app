/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
          "slide-in-left": "slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
          "fade-out": "fade-out 0.5s ease   both"
      },
      keyframes: {
          "slide-in-left": {
              "0%": {
                  transform: "translateX(-1000px)",
                  opacity: "0"
              },
              to: {
                  transform: "translateX(0)",
                  opacity: "1"
              }
          },
          "fade-out": {
                "0%": {
                    opacity: "1"
                },
                to: {
                    opacity: "0"
                }
            }
      }
  }
  },
  plugins: [],
}
