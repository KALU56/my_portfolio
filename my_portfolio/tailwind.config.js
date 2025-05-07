/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'art-charcoal': '#333333',
        'art-dark-blue': '#1A2E3F', // A deep, muted blue
        'art-gray': '#555555',
        'art-light-gray': '#F0F0F0',
        'art-red': '#E53E3E', // A less vibrant red than default
        'art-dark-red': '#C53030',
        'art-accent-green': '#38A169', // Muted green accent
        'art-accent-blue': '#4299E1', // Muted blue accent
        'art-accent-pink': '#ED64A6', // Muted pink accent
        'art-accent-red': '#F56565', // Muted red accent
        'art-paper': '#F9F7F3', // Off-white, paper-like
        'art-header': '#FFFFFF', // White or off-white for header
        'art-border-gray': '#D1D5DB', // Muted border gray
        'art-border-dark-gray': '#A0AEC0', // Darker muted border gray
      },
      fontFamily: {
        heading: ['Georgia', 'serif'], // Example serif font
        body: ['Arial', 'sans-serif'], // Example sans-serif font
      },
      boxShadow: {
        'art-soft': '0 4px 12px rgba(0, 0, 0, 0.1)', // Softer shadow
        'art-card': '0 6px 18px rgba(0, 0, 0, 0.15)', // Slightly more prominent card shadow
        'art-button': '0 2px 6px rgba(0, 0, 0, 0.1)', // Button shadow
        'art-header': '0 2px 4px rgba(0, 0, 0, 0.05)', // Header shadow
      },
      // Add custom background images/patterns here if needed
      // backgroundImage: {
      //   'canvas-texture': "url('/path/to/canvas-texture.png')",
      //   'paper-texture': "url('/path/to/paper-texture.png')",
      //   'light-canvas-texture': "url('/path/to/light-canvas-texture.png')",
      // }
    },
  },
  plugins: [],
};