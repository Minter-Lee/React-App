/*
 * Title: 初始化HTTP服务--原生Node服务注册
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-04-20
 * Description: HTTP服务初始化文件，用于注册HTTP服务，404错误页面，静态文件服务等。
 * 随着express的引用，此文件的作用在于从最开始理解nodeHTTP服务的创建过程，以及与
 * express之间的区别，对比express在此方面都做了些什么。
 */

//node后端使用JQuery方法
// var jsdom = require("jsdom");
// var $ = require('jquery')(jsdom.jsdom().defaultView);

//HTTP服务集
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};

//404错误服务
function send404(response) {
	response.writeHead(404, {
		'Content-Type': 'text/plain;charset=UTF-8'
	});
	response.write('你确定它存在？');
	response.end();
}

//访问静态文件服务
function sendFile(response, filePath, fileContents) {
	response.writeHead(200, {
		"Content-Type": mime.lookup(path.basename(filePath))
	});
	response.end(fileContents);
}

//静态文件返回服务
function serverStatic(response, cache, absPath) {
	//判定是否在缓存中
	if (cache[absPath]) {
		sendFile(response, absPath, cache[absPath]);
	} else {
		//检查文件是否存于系统中
		fs.exists(absPath, function(exists) {
			if (exists) {
				//若存在读取文件并注入缓存
				fs.readFile(absPath, function(err, data) {
					if (err) {
						send404(response);
					} else {
						//将文件注入到缓存中
						cache[absPath] = data;
						sendFile(response, absPath, data);
					}
				});
			} else {
				send404(response);
			}
		});
	}
}

//创建HTTP服务
var server = http.createServer(function(request, response) {
	var filePath = false;
	if (request.url == '/') {
		filePath = "app/index.html";
	} else {
		filePath = 'app' + request.url;
	}

	var absPath = './' + filePath;
	serverStatic(response, cache, absPath);
});

//监听接口访问服务
server.listen(3000, function() {
	console.info("服务启动...")
});