const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	// devtool: "none",
	entry: "./src/index.js",
	module: {
		rules: [
			{
				/**
				 * * CSS RULES
				 */
				// test: /\.css$/i,
				// use: ["style-loader", "css-loader"],
				/**
				 * * SCSS without sourcemap
				 */
				// test: /\.scss$/i,
				// use: ["style-loader", "css-loader", "sass-loader"],
				/**
				 * * SCSS with sourcemaps
				 */
				test: /\.scss$/i,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader", options: { sourceMap: true } },
					{ loader: "postcss-loader", options: { sourceMap: true } },
					{ loader: "sass-loader", options: { sourceMap: true } },
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
	],
	output: {
		filename: "bundle.[hash].js",
		path: path.resolve(__dirname, "dist"),
	},
};
