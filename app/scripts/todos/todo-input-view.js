/*
 * Title: Todos输入页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */
var TodoInputView = React.createClass({
	addTodos: function(event){
		console.info("blurValue",event)
	},
	render: function() {
		return <input className="todo-input" placeholder = "todos" onBlur={this.addTodos}/>
	}
});