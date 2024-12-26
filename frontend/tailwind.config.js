/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4C51BF', // Indigo for primary actions
        secondary: '#E53E3E', // Red for accent actions like error states
        bg: '#F7FAFC', // Light Gray for page background
        card: '#FFFFFF', // White for card or container backgrounds
        textPrimary: '#2D3748', // Dark Gray for primary text
        textSecondary: '#718096', // Light Gray for secondary text
        border: '#CBD5E0', // Light Gray for borders
        hover: '#5A67D8', // Lighter Indigo for hover states
      },
    },
  },
  plugins: [],
}
