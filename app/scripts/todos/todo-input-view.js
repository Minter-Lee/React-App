/*
 * Title: Todos输入页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-16
 * Description: Todos
 */
var TodoAddView = require('./todo-add-view');
var TodoInputView = React.createClass({
	getInitialState: function(){
		var self = this;
		return {
			inputValue: ''
		}
	},

	render: function() {
		var self = this;
		return <div>
			<input className="todoInput" placeholder = "Todos" ref={function(el){self.inputEl = el;}}/>
			<TodoAddView addTodos={this.addTodos}/>
		</div>
	},

	// 添加todos
	addTodos: function(){
		var inputValue = this.inputEl.value;
		if(inputValue == '') return;
		this.props.addTodos(inputValue);
		this.inputEl.value = '';
	}
});

module.exports = TodoInputView;
