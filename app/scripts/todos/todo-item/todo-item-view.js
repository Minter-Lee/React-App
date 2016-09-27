/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */

var TodoItemCheckboxView = require('./todo-item-checkbox-view');
var TodoItemTextView = require('./todo-item-text-view');
var TodoItemCompleteBtnView = require('./todo-item-complete-view');
var TodoItemDeleteBtnView = require('./todo-item-delete-view');

var TodoItemView = React.createClass({
 	render: function(){
 		var data = this.props.data;
 		return <li>
 			<TodoItemCheckboxView isChecked={data.isChecked} checkTodo={this.checkTodo}/>
 			<TodoItemTextView todoText={data.value}/>
 			<TodoItemCompleteBtnView completeTodo={this.completeTodo}/>
 			<TodoItemDeleteBtnView deleteTodo={this.deleteTodo}/>
 		</li>
 	},

 	// 点击todo	
 	checkTodo: function(isChecked){
 		this.props.checkTodo(this.props.data.id, isChecked);
 	},

 	// 完成todo
 	completeTodo: function(){
 		this.props.completeTodo(this.props.data.id, true);
 	},

 	// 删除todo
 	deleteTodo: function(){
 		this.props.deleteTodo(this.props.data.id);
 	}
 });

 module.exports = TodoItemView;