/*
 * Title: TodoItem
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */

var TodoItemCompleteView = require('./todo-item-complete-view');
var TodoItemTextView = require('./todo-item-text-view');
var TodoItemDeleteBtnView = require('./todo-item-delete-view');

var TodoItemView = React.createClass({
 	render: function(){
 		console.info('item-render')
 		var data = this.props.data;
 		return <li>
 			<TodoItemCompleteView isCompleted={data.isCompleted} completeTodo={this.completeTodo}/>
 			<TodoItemTextView todoText={data.value}/>
 			<TodoItemDeleteBtnView deleteTodo={this.deleteTodo}/>
 		</li>
 	},

 	// 完成todo
 	completeTodo: function(){
 		var data = this.props.data;
 		this.props.completeTodo(data.id, !data.isCompleted);
 	},

 	// 删除todo
 	deleteTodo: function(){
 		this.props.deleteTodo(this.props.data.id);
 	}
 });

 module.exports = TodoItemView;