/*
 * Title: InputView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: ...
 */
import React, { PropTypes, Component } from 'react'

export default class TodoInputView extends Component {
	static propTypes = {
		addTodo: PropTypes.func.isRequired
	}

	state = {
		inputValue: ''
	}

	handleSave = e => {
		// 获取数值
		const inputValue = e.target.value.trim();
		if (inputValue.length !== 0 && e.which === 13) {
			// 触发相应的action
			this.props.addTodo(inputValue);
			// 清空残留的state
			this.setState({inputValue:''});
		}
	}

	// 由于使用state保存当前input数据，所以需要实时进行对state的更新
	handleChange = e => {
		// 组件中间状态(state)，此类不需要通过action保留记录
		this.setState({inputValue: e.target.value});
	}

	shouldComponentUpdate (nextProps, nextState) {
		if (nextProps.addTodo === this.props.addTodo 
			&& nextState.inputValue === this.state.inputValue) {
			console.log("TodoInputView-拦截")
			return false;
		}
		return true;
	}
	
	render() {
		console.info('TodoInputView-render');
		return <input 
			className="todoInput"
			type = "text" 
			autoFocus = "true"
			placeholder = "Todos"
			value = {this.state.inputValue}
			onChange={this.handleChange}
			onKeyDown={this.handleSave}
			/>
	}
}