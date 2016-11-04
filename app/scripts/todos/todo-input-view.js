/*
 * Title: Todos输入页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-16
 * Description: Todos
 */

var ENTER_KEY = 13;

var TodoInputView = React.createClass({
	shouldComponentUpdate(nextProps, nextState) {
 		if (nextProps.addTodos === this.props.addTodos) {
 			console.info('todo-input-render-拦截')
 			return false;
 		}
 		return true;
 	},

	render: function() {
		var self = this;
		console.info("todo-input-render");
		return <div>
			<input 
				className="todoInput" 
				placeholder = "Todos" 
				ref={function(el){self.inputEl = el;}} 
				onKeyDown={this.handleKeyDown}
			/>
		</div>
	},

	handleKeyDown: function(e) {
		if (e.which === 13) {
			var inputValue = this.inputEl.value;
			if (inputValue == '') return;
			this.props.addTodos(inputValue);
			this.inputEl.value = '';
		}
	}
});

module.exports = TodoInputView;
