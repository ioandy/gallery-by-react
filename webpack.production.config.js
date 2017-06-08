var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:  __dirname + "/app/main.js",//�Ѷ���ἰ��Ψһ����ļ�
	output: {
		path: __dirname + "/build",//�������ļ���ŵĵط�
		filename: "bundle.js"//���������ļ����ļ���
	},

	module: { //�������ļ������JSON loader
		loaders: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',//��webpack��module���ֵ�loaders��������ü���
			 },
			 {
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules'//��Ӷ���ʽ��Ĵ���
			 }
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
		  template: __dirname + "/app/index.tmpl.html"//new һ����������ʵ������������صĲ���
		})
	  ],

}