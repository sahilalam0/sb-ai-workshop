import  { tokens } from '@adaptavant/eds-brands/setmore';
import { createPreset } from '@adaptavant/eds-core/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./index.html",
    './src/**/*.{js,ts,jsx,tsx}', 
    './node_modules/@adaptavant/eds-core/dist/**/*.{js,ts,jsx,tsx}', 
  ],
  presets:[createPreset(tokens)],
  theme: {
    extend: {},
  },
  plugins: [],
}

