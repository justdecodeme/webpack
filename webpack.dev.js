const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development",

	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: { sourceMap: true },
					},
					{ loader: "postcss-loader", options: { sourceMap: true } },
					{
						loader: "sass-loader",
						options: { sourceMap: true },
					},
				],
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
			template: "./src/template.html",
		}),
	],

	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
});
