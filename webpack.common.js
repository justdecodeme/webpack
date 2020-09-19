module.exports = {
	// devtool: "none",
	entry: {
		index: "./src/js/index.js",
		vendor: "./src/js/vendor.js",
	},

	module: {
		rules: [
			/**
			 * * Exports HTML as string. HTML is minimized when the compiler demands.
			 */
			{
				test: /\.html$/i,
				use: ["html-loader"],
				// loader: "html-loader",
				// options: {
				// 	/* Enables/Disables attributes handling */
				// 	attributes: false,
				// 	/* Tell html-loader to minimize HTML */
				// 	minimize: true,
				// },
			},
		],
	},
};
