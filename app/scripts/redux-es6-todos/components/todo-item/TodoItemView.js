/*
 * Title: ItemView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: ...
 */
 import React, {Component, PropTypes} from 'react';
 import TodoItemTextView from './TodoItemTextView';
 import TodoItemDeleteView from './TodoItemDeleteView';
 import TodoItemCompleteView from './TodoItemCompleteView';

 export default class TodoItemView extends Component {
 	static propTypes = {
 		todoItem: PropTypes.object.isRequired,
 		deleteTodo: PropTypes.func.isRequired,
 		completeTodo: PropTypes.func.isRequired
 	}

 	deleteTodo = () => {
 		this.props.deleteTodo(this.props.todoItem.id);
 	}

 	completeTodo = () => {
 		this.props.completeTodo(this.props.todoItem.id);
 	}

 	render() {
 		const { todoItem } = this.props;
 		return <li>
 			<TodoItemTextView todoItem = {todoItem}/>
 			<TodoItemDeleteView deleteTodo = {this.deleteTodo} />
 			<TodoItemCompleteView completeTodo = {this.completeTodo} completed={todoItem.completed}/>
 		</li>
 	}
 }