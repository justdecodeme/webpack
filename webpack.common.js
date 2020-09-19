module.exports = {
	// devtool: "none",

	entry: {
		// index: { import: "./src/js/index.js", dependOn: "shared" },
		// vendor: { import: "./src/js/vendor.js", dependOn: "shared" },
		// shared: "lodash",
		index: "./src/js/index.js",
		"about-us": "./src/js/about-us.js",
		products: "./src/js/products.js",
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
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
		],
	},
};
