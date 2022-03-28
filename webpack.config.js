const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const express = require('express')

module.exports = {
	entry: "./src/index.tsx",
	target: "web",
	mode: "development",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss", ".sass"]
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				loader: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /.s?[ac]ss$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true
						}
					},
					"sass-loader"
				]
			}

		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html")
		})
	],

	devServer: {
		static: "./public/"
	}

}
