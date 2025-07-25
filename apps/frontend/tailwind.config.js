const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        "purple-primary": "#4F46E5",
        "purple-secondary": "#D9D6FE",
        "text-primary": "#1A1A1A",
        "text-secondary": "#374151",
        "text-tertiary": "#6b7280",
        "white-secondary": "#c0bebe",
        "white-tertiary": "#e5e7eb"
      },
      animation: {
        grow: 'grow 0.8s ease-in-out infinite',
      },
      keyframes: {
        grow: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(2)' },
        },
      },
    },
  },
  plugins: [],
};
