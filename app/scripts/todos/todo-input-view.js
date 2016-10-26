/*
 * Title: Todos输入页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-16
 * Description: Todos
 */

var ENTER_KEY = 13;

var TodoInputView = React.createClass({
	getInitialState: function(){
		var self = this;
		return {
			inputValue: ''
		}
	},

	render: function() {
		var self = this;
		console.info("todoInputView-render");
		return <div>
			<input 
				className="todoInput" 
				placeholder = "Todos" 
				ref={function(el){self.inputEl = el;}} 
				value={this.state.inputValue}
				onChange={this.handelChange}
				onKeyDown={this.handleKeyDown}
			/>
		</div>
	},

	handelChange: function(e){
		this.setState({
			inputValue: e.target.value
		})
	},

	handleKeyDown: function(e) {
		if (e.which === 13) {
			var inputValue = this.inputEl.value;
			if (inputValue == '') return;
			this.props.addTodos(inputValue);
			this.setState({
				inputValue: ''
			});
		}
	}
});

module.exports = TodoInputView;
