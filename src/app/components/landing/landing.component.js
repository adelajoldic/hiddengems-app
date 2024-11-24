module.exports = {
  content: [
    './path-to-your-files/**/*.html', // Ensure Tailwind scans your files for classes
  ],
  theme: {
    extend: {
      animation: {
        'jumping-text': 'jump 1s ease-out forwards',
      },
      keyframes: {
        jump: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '30%': { transform: 'translateY(-10px)', opacity: '1' },
          '50%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { transform: 'translateY(-5px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
}
