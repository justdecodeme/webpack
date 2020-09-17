const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * TODO: no sourcemap to show in prod
 */

module.exports = merge(common, {
	mode: "production",

	module: {
		rules: [
			{
				/**
				 * TODO: SCSS + CSS loaders
				 */
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},

	plugins: [
		/**
		 * * Clean 'dist' directory on every build
		 */
		new CleanWebpackPlugin(),
		/**
		 * * Extracts CSS into separate files. It creates a CSS file per JS file
		 * * which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
		 */
		new MiniCssExtractPlugin({
			filename: "[name].[hash].bundle.css",
		}),
	],

	output: {
		filename: "[name].[hash].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
});
