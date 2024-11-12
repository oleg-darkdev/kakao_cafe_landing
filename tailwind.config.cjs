/** @type {import('tailwindcss').Config}*/
const plugin = require('tailwindcss/plugin');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {}
		}
	},
	plugins: [
		// plugin(function ({ addBase }) {
		// 	addBase({
		// 		html: { fontSize: '10px' }
		// 	});
		// })
	]
};

module.exports = config;
