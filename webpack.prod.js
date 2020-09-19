const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

module.exports = merge(common, {
	mode: "production",

	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin(),
			new TerserPlugin(),
			// new HtmlWebpackPlugin({
			// 	template: "./src/views/index.html",
			// 	minify: {
			// 		removeAttributeQuotes: true,
			// 		collapseWhitespace: true,
			// 		removeComments: true,
			// 	},
			// }),
		],
	},

	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},

			/* Resolves import/require() on a file into a url and emits the file into the output directory */
			{
				test: /\.(svg|png|jpg|jpeg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[contenthash].[ext]",
						outputPath: "images",
					},
				},
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
		new HtmlWebpackPlugin({
			title: "Home",
			template: "./src/index.html",
			filename: "index.html",
			minify: true,
		}),
		new HtmlWebpackPlugin({
			title: "About Us",
			template: "./src/about-us.html",
			filename: "about-us.html",
			minify: true,
		}),
		new HtmlWebpackPlugin({
			title: "Products",
			template: "./src/products.html",
			filename: "products.html",
			minify: true,
		}),
		new HtmlWebpackPartialsPlugin({
			path: path.join(__dirname, "./src/views/header.html"),
			location: "header",
			template_filename: ["index.html", "about-us.html", "products.html"],
			options: {
				appName: "WebAll",
			},
		}),
		new HtmlWebpackPartialsPlugin({
			path: path.join(__dirname, "./src/views/footer.html"),
			location: "footer",
			template_filename: ["index.html", "about-us.html", "products.html"],
		}),
	],

	output: {
		filename: "js/[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
});
