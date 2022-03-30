const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin");
const express = require('express')
const webpack = require('webpack')

module.exports = {
	entry: "./src/index.tsx",
	target: "web",
	mode: process.env.NODE_ENV,
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
		}),
		new CopyPlugin({
			patterns: [
				{
					from: "public/images", to: "images"
				}
			]
		}),
		new webpack.ProvidePlugin({
			process: "process/browser"
		}),
		new webpack.DefinePlugin({
			"process.env.BASE_URL": JSON.stringify(process.env.NODE_ENV === 'production' ? "/website" : "/")
		})
	],

	devServer: {
		static: "./public/"
	}

}
