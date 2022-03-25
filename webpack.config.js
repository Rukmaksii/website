const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: "./src/index.tsx",
	target: "web",
	mode: "development",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"]
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				loader: "ts-loader",
				exclude: /node_modules/
			}

		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html")
		})
	]

}
