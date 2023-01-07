/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				ovi: 'url(https://cms.nhl.bamgrid.com/images/photos/325823982/2048x1152/cut.png)'
			}
		}
	},
	plugins: []
};
