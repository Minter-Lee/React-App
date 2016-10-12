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
 	constructor(props, context) {
 		super(props, context);
 		this.deleteTodo = this.deleteTodo.bind(this);
 		this.completeTodo = this.completeTodo.bind(this);
 	}

 	static propTypes = {
 		todoItem: PropTypes.object.isRequired,
 		deleteTodo: PropTypes.func.isRequired,
 		completeTodo: PropTypes.func.isRequired
 	}

 	deleteTodo(){
 		this.props.deleteTodo(this.props.todoItem.id);
 	}

 	completeTodo(){
 		this.props.completeTodo(this.props.todoItem.id);
 	}

 	shouldComponentUpdate(nextProps, nextState) {
 		const {todoItem, deleteTodo, completeTodo } = this.props;
 		const {
 			todoItem: todoItemNext, 
 			deleteTodo: deleteTodoNext, 
 			completeTodo: completeTodoNext
 		} = nextProps;
    		if (todoItemNext === todoItem 
    			&& deleteTodoNext === deleteTodo
    			&& completeTodoNext === completeTodo) {
    			console.log("TodoItemView-拦截");
    			return false;
    		}
    		return true;
    }

 	render() {
 		console.info("TodoItemView-render");
 		const { todoItem } = this.props;
 		return <li>
 			<TodoItemTextView todoItem = {todoItem}/>
 			<TodoItemDeleteView deleteTodo = {this.deleteTodo} />
 			<TodoItemCompleteView completeTodo = {this.completeTodo} completed={todoItem.completed}/>
 		</li>
 	}
 }