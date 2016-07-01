/*
 * Title: 后端入口文件，注册各类Action
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-04-20
 * Description: 基于express建立的后端入口文件。详细结构及个文件职能详见Readme文档
 */

/*
 *	全局变量
 */
SUCCESS = {
	msg: "保存成功！"
}

var IndexAction = require("./action/index-action");
IndexAction();

var AboutAction = require("./action/about-action");
AboutAction();