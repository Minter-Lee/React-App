/*
 * Title: todo 列表
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: 列表
 */

 import React, {Component, PropTypes} from 'react'
 import TodoItemView from './TodoItemView'

 export default class TodoListView extends Component {
 	static propTypes = {
 		todoItems: PropTypes.array.isRequired,
 		actions: PropTypes.object.isRequired
 	}

 	render(){
 		console.info("TodoListView-render");
 		const { actions } = this.props;
 		return <ul className = 'todoList'>
 		{
 			this.props.todoItems.map((item,index) => {
 				return <TodoItemView key={item.id} todoItem={item} {...actions} />
 			})
 		}
 		</ul>
 	}
 }