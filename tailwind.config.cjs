/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'green-light': '#008552',
				'green': '#034939',
				'gold': '#f3d79d',
				'gold-dark': '#765f3c',
			}
		},
	},
	plugins: [],
};
