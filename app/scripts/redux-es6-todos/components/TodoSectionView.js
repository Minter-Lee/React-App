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

    constructor(props, context) {
      super(props, context);
      this.changeFilter = this.changeFilter.bind(this);
      this.getFilterTodoItems = this.getFilterTodoItems.bind(this);
    }

	static propTypes = {
		deleteTodo: PropTypes.func.isRequired,
		completeTodo: PropTypes.func.isRequired,
		todoItems: PropTypes.array.isRequired
	}

	state = {
		filter: 'SHOW_ALL'
	}

	changeFilter(filter) {
		this.setState({
			filter: filter
		})
	}

  	getFilterTodoItems() {
  		const {filter} = this.state;
  		const {todoItems} = this.props;
  		switch (filter) {
  			case SHOW_ALL:
  				return todoItems;
  			case SHOW_COMPLETE:
  				return todoItems.filter(item => item.completed === true);
  			case SHOW_UNDONE:
  				return todoItems.filter(item => item.completed === false);
  			default:
  				return todoItems;
  		}
  	}

  	render() {
  		console.info("TodoSectionView-render");
  		const { deleteTodo, completeTodo, todoItems} = this.props;
  		return <div>
  			<TodoListView 
				todoItems = {this.getFilterTodoItems()} 
				actions = {{
					deleteTodo: deleteTodo,
					completeTodo: completeTodo
				}} 
  			/>
  			<TodoFootbarView 
  				filter = {this.state.filter}
  				changeFilter = {this.changeFilter}
  				completedCount = {todoItems.filter(item => item.completed === true).length}
  			/>
  		</div>
  	}
}