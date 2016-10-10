/*
 * Title: TodoFootbarView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-10
 * Description: ...
 */
import React, { PropTypes, Component } from 'react'
import TodoFootbarCountView from './TodoFootbarCountView'
import TodoFootbarFilterView from './TodoFootbarFilterView'

export default class TodoFootbarView extends Component {
	static propTypes = {
		filter: PropTypes.string.isRequired
	}

	render() {
		return <div className='todoFootbar'>
			<TodoFootbarCountView 
				filter={this.props.filter}
				changeFilter = {this.changeFilter}
			/>
			<TodoFootbarFilterView />
		</div>
	}
}