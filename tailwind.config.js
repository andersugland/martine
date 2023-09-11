/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true
			},
			colors: {
				offwhite: '#fffbf7',
				dark: '#221508'
			},
			fontFamily: {
				heading: ['Prata', 'serif'],
				body: ['Poppins', 'sans-serif']
			},
			fontSize: {
				// 'heading-lg': ['7.594rem', '1.75'],
				sm: ['0.667rem', '1.75'],
				base: ['1rem', '1.75'],
				md: ['1.5rem', '1.75'],
				lg: ['2.25rem', '1.75'],
				xl: ['3.375rem', '1.75'],
				'2xl': ['5.063rem', '1.75'],
				'3xl': ['7.594rem', '1.75']
			}
		}
	},
	plugins: []
};
