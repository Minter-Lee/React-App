/*
 * Title: Todos输入页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */
var TodoBtnView = require('./todo-btn-view');
var TodoInputView = React.createClass({
	getInitialState: function(){
		var self = this;
		return {
			addTodos: this.addTodos,
			inputValue: ''
		}
	},

	render: function() {
		return <div>
			<input className="todoInput" placeholder = "Todos"/>
			<TodoBtnView addTodos={this.state.addTodos}/>
		</div>
	},

	// 添加todos
	addTodos: function(){
		var inputValue = $('.todoInput').val();
		if(inputValue == '') return;
		this.props.addTodos(inputValue);
		$('.todoInput').val('');
	}
});

module.exports = TodoInputView;
