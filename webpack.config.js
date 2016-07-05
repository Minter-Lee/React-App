/*
 * Title: Webpack配置文件
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-06-14
 * Description: 
 */
var webpack = require('webpack');
var path = require('path');

var WebpackCfg = {
    //文件基础路径是app
    context: path.join(__dirname, "app"),
    //页面入口文件
    entry: {
        "index": [
            './scripts/index.js',
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:9090/'
        ]
    },
    //出口文件输出配置
    output: {
        //name出自entry配置项，目前看仅能在filename配置项中使用，path中不会解析
        filename: '[name]Bundle.js',
        path: path.join(__dirname, 'app/bundles'),
        publicPath: "/"
    },
    //插件部分
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'React': 'react',
            'ReactDom': 'react-dom'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    //模块
    module: {
        //前置加载器
        preloaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'jshint-loader'
        }],
        //加载器配置
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader' //CSS注入和语法
        }, {
            test: /\.js$/,
            loader: 'jsx-loader?harmony' //js文件使用jsx处理--react使用？
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192' //图片文件小于8K，直接转码base64
        }, {
            test: /\.html$/,
            loader: 'html-loader' //将html转为String
        }]
    }
}

module.exports = WebpackCfg;