var path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV == 'development';

var config = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.css$/,
            use:['style-loader','css-loader']
        },{
            test: /\.jsx$/,
            loader:'babel-loader'
        },{//css预处理
            test: /\.styl$/,
            use:['style-loader','css-loader','stylus-loader']
        },{
            test: /\.(png|jpg|jpeg|gif)$/,
            use:[{
            	loader:"url-loader",
            	options:{
            		limit:1024,
            		name:'[name].[ext]'
            	}
            }]
        }
        ]
    },
    plugins:[
    	new webpack.DefinePlugin({
    		'process.env':{
    			NODE_ENV:isDev?'"development"':'"production"'
    		}
    	}),
         new HTMLPlugin()
    ]
};

if(isDev){
   config.devtool ='#cheap-module-eval-source-map';
   config.devServer = {
   	  port:8080,
   	  host:'localhost',
   	  overlay:{ //w网页上显示错误
   	  	 errors:true
   	  },
   	  hot:true,
   	  open:true //起服务自动打开页面
   }
   config.plugins.push(
   	 new webpack.HotModuleReplacementPlugin(),
   	 new webpack.NoEmitOnErrorsPlugin()
   )
}
module.exports = config;
