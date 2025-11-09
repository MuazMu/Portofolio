/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Monochromatic core
        'cyber-black': '#000000',
        'cyber-dark': '#0a0a0a',
        'cyber-gray': '#1a1a1a',
        'cyber-light': '#2a2a2a',
        'cyber-white': '#ffffff',

        // Single neon accent - Electric Cyan
        'neon': '#00F0FF',
        'neon-glow': '#00F0FF80',

        // Legacy (keeping for compatibility during transition)
        primary: '#000000',
        secondary: '#0a0a0a',
      },
      fontFamily: {
        // Geometric, thin fonts for technical feel
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #00F0FF08 1px, transparent 1px), linear-gradient(to bottom, #00F0FF08 1px, transparent 1px)",
        'scan-lines': "repeating-linear-gradient(0deg, #00F0FF05 0px, #00F0FF05 1px, transparent 1px, transparent 2px)",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'neon': '0 0 10px #00F0FF, 0 0 20px #00F0FF40',
        'neon-lg': '0 0 20px #00F0FF, 0 0 40px #00F0FF60, 0 0 60px #00F0FF40',
        'neon-sm': '0 0 5px #00F0FF80',
      },
      animation: {
        'glitch': 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) infinite',
        'scan': 'scan 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'pulse-neon': {
          '0%, 100%': {
            boxShadow: '0 0 10px #00F0FF, 0 0 20px #00F0FF40',
            opacity: '1'
          },
          '50%': {
            boxShadow: '0 0 20px #00F0FF, 0 0 40px #00F0FF60, 0 0 60px #00F0FF40',
            opacity: '0.8'
          },
        },
      },
    },
  },
  plugins: [],
}
