/*
 * Title: 页面入口JS
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-01-26
 * Description: 初始页面入口JS，用于页面主体结构向HTML的注入
 */
//告知该文件及其所有关联被修正时，进行热替换
if (module.hot) {
    module.hot.accept();
}
var ReactDom = require("react-dom");

var TodoIndexView = require("./todos/index-page-view");

ReactDom.render(
	<TodoIndexView/>, 
	document.getElementById("container")
);
