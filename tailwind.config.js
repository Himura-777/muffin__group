import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
	content: ["./src/**/*.{html,svelte,js,ts}"],
	theme: {
		screens: {
			"md": "768px",
			"lg": "960px",
			"xl": "1240px",
		},
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				cormorant_garamond: ["Cormorant Garamond", "serif"],
			},
		},
	},

	plugins: [aspectRatio],
};
