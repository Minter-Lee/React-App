/*
 * Title: 主页Action
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-04-20
 * Description: 处理主页相关服务
 */
//引入Action注册器
var AcReg = require('../action-register');
var IndexSev = require('../sev/index-sev');

var IndexAction = function() {

	AcReg.addGetAc("getHelloWorld", function(req) {
		var queryObj = req.query;
		var result = IndexSev.getHelloWorld(queryObj.isNew);
		return result;
	});

	AcReg.addGetAc("getYourName", function(req) {
		var result = IndexSev.getYourName();
		return result;
	});
	
	AcReg.addPostUpload("upload", function(req) {
		var result = IndexSev.uploadFile(req.body, req.files.file);
		return result;
	});
}

module.exports = IndexAction;