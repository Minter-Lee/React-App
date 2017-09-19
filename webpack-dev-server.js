/*
 * Title: WDS服务文件
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-06-14
 * Description: 
 */
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    // 访问根目录路径（index.html所在目录）
    contentBase: 'app',
    filename: 'indexBundle.js',
    publicPath: '/',
    hot: true,
    stats: {
        colors: true
    }
});
server.listen(9090, 'localhost', function() {});
