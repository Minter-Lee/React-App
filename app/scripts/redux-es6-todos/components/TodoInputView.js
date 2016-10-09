/*
 * Title: action 注册
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: ...
 */

import React , {Component, PropTypes} from 'react';

export default class TodoInputView extends Component {
	static propTypes = {
		addTodo: PropTypes.func.isRequired
	}

	state = {
		inputValue: ''
	}

	const addTodo = e => (
		// 获取数值
		const inputValue = e.target.value.trim();
		if (inputValue.length !== 0 && e.which === 13) {
			// 触发相应的action
			this.props.addTodo(inputValue);
			// 清空残留的state
			// this.props.clearTodoInputValue
		}
	)

	render() {
		return <input 
			className="todoInput"
			type = 'text' 
			autoFocus = true
			placeholder = "Todos"
			value = {this.state.text}
			onKeyDown={this.addTodo}
			/>
	}
}