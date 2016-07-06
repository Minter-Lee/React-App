/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */
var TodoTitleView = require("./todo-title-view");
var TodoInputView = require("./todo-input-view");

var TodoIndexView = React.createClass({
	render: function() {
		return <div className = "todos" >
			<TodoTitleView /> 
		</div>
	}
});
module.exports = TodoIndexView;