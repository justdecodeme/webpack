const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development",

	module: {
		rules: [
			{
				/**
				 * TODO: SCSS + CSS loaders
				 */
				test: /\.scss$/i,
				use: [
					/* 4. Injects styles into DOM */
					{ loader: "style-loader" },
					/* 3. Turns css into commonjs */
					{
						loader: "css-loader",
						options: { sourceMap: true },
					},
					/* 2. PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.*/
					{ loader: "postcss-loader", options: { sourceMap: true } },
					/* 1. Turns sass into css */
					{
						loader: "sass-loader",
						options: { sourceMap: true },
					},
				],
			},

			/* Resolves import/require() on a file into a url and emits the file into the output directory */
			{
				test: /\.(svg|png|jpg|jpeg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "images",
					},
				},
			},
		],
	},

	/**
	 * TODO: index.html | product.html | *.html
	 */
	plugins: [
		/**
		 * * Put bundle files at the end of this file
		 */
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],

	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
});
