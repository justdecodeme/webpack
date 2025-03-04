const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

module.exports = merge(common, {
	mode: "development",

	// ? don't know the purpose of this
	// optimization: {
	// 	splitChunks: {
	// 		chunks: "all",
	// 	},
	// },

	module: {
		rules: [
			{
				test: /\.(scss|css)$/i,
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
			// {
			// 	test: /\.html$/,
			// 	use: {
			// 		loader: "file-loader",
			// 		options: {
			// 			name: "[name].[ext]",
			// 		},
			// 	},
			// 	exclude: path.resolve(__dirname, "src/index.html"),
			// },
		],
	},

	plugins: [
		/**
		 * * HTML files
		 */
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
			chunks: ["index", "main", "vendor"],
		}),
		new HtmlWebpackPlugin({
			template: "./src/about-us.html",
			filename: "about-us.html",
			chunks: ["about-us", "main"] /* load main.js and main.scss */,
		}),
		new HtmlWebpackPlugin({
			// title: "Products",
			template: "./src/products.html",
			filename: "products.html",
			chunks: [
				"products",
			] /* load only main.scss (mentioned in products.js) not main.js */,
		}),

		/**
		 * * Partials
		 */
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
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
});
