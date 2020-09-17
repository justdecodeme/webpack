const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "production",

	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin(),
			new TerserPlugin(),
			new HtmlWebpackPlugin({
				template: "./src/template.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
		],
	},

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
			filename: "css/[name].[contenthash].bundle.css",
		}),
	],

	output: {
		filename: "js/[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
});
