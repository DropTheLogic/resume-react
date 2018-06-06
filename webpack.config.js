const webpack = require('webpack');
const path = require('path');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.less$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'less-loader'
				}]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader?name=[name].[ext]'
				]
			}
		]
	},
	mode: 'production'
};

module.exports = config;
