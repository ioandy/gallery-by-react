var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
	output: {
		path: __dirname + "/build",//打包后的文件存放的地方
		filename: "bundle.js"//打包后输出文件的文件名
	},

	module: { //在配置文件里添加JSON loader
		loaders: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
			 },
			 {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules'}), //'style-loader!css-loader?modules'//添加对样式表的处理
			 }
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
		  template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
		}),
		new webpack.HotModuleReplacementPlugin(),//热加载插件
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin("[name]-[hash].css")
	  ],

	devServer: {
		historyApiFallback: true,//不跳转
		inline: true,//实时刷新
		hot: true
	} 
}