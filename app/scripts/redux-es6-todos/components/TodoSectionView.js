/*
 * Title: todo Section
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: 列表 + 工具栏
 */

import React, {Component, PropTypes} from 'react'
import TodoListView from './todo-item/TodoListView'
import TodoFootbarView from './footbar/TodoFootbarView'
import {SHOW_ALL, SHOW_COMPLETE, SHOW_UNDONE} from '../constants/FilterTypes'

export default class TodoSectionView extends Component {
	static propTypes = {
		actions: PropTypes.object.isRequired,
		todoItems: PropTypes.array.isRequired
	}

	state = {
		filter: 'SHOW_ALL'
	}

	changeFilter = filter => {
		this.setState({
			filter: filter
		})
	}

  	getFilterTodoItems = () => {
  		const {filter} = this.state;
  		const {todoItems} = this.props;
  		switch (filter) {
  			case SHOW_ALL:
  				return todoItems;
  			case SHOW_COMPLETE:
  				return todoItems.filter(item => item.complete === true);
  			case SHOW_UNDONE:
  				return todoItems.filter(item => item.complete === false);
  			default:
  				return todoItems;
  		}
  	}

  	render () {
  		return <div>
  			<TodoListView 
				todoItems = {this.getFilterTodoItems()} 
				actions = {{
					deleteTodo: actions.deleteTodo,
					completeTodo: actions.completeTodo
				}} 
  			/>
  			<TodoFootbarView 
  				filter = {this.state.filter}
  				changeFilter = {this.changeFilter}
  			/>
  		<div>
  	}
}