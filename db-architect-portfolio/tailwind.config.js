/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#1B2030',
        panel: '#232A3D',
        border: '#333C54',
        ink: '#E7EAF1',
        'ink-dim': '#8891A8',
        cyan: '#4FC3E8',
        amber: '#F2B84B',
        green: '#6FCF97',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
