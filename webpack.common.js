module.exports = {
	mode: "development",
	// devtool: "none",
	entry: {
		main: "./src/index.js",
		vendor: "./src/vendor.js",
	},

	module: {
		rules: [
			// {
			// 	/* CSS RULES */
			// 	// test: /\.css$/i,
			// 	// use: ["style-loader", "css-loader"],

			// 	/* SCSS without sourcemap */
			// 	// test: /\.scss$/i,
			// 	// use: ["style-loader", "css-loader", "sass-loader"],

			// 	/* SCSS with sourcemaps */
			// 	test: /\.scss$/i,
			// 	use: [
			// 		/* 4. Injects styles into DOM */
			// 		{ loader: "style-loader" },
			// 		/* 3. Turns css into commonjs */
			// 		{
			// 			loader: "css-loader",
			// 			options: { sourceMap: true },
			// 		},
			// 		/* 2. PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.*/
			// 		{ loader: "postcss-loader", options: { sourceMap: true } },
			// 		/* 1. Turns sass into css */
			// 		{
			// 			loader: "sass-loader",
			// 			options: { sourceMap: true },
			// 		},
			// 	],
			// },

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

			/**
			 * * Resolves import/require() on a file into a url and emits the file into the output directory
			 */
			{
				test: /\.(svg|png|jpg|jpeg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "images",
					},
				},
			},
		],
	},
};
