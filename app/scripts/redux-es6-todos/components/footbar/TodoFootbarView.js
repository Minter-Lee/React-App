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
	constructor(props, context) {
 		super(props, context);
 	}

	static propTypes = {
		filter: PropTypes.string.isRequired,
		changeFilter: PropTypes.func.isRequired,
		completedCount: PropTypes.number.isRequired
	}

    shouldComponentUpdate(nextProps, nextState) {
    		const {filter, changeFilter, completedCount} = this.props;
    		if (nextProps.filter === filter 
    			&& nextProps.changeFilter === changeFilter
    			&& nextProps.completedCount === completedCount
    		) {
    			console.log("TodoFootbarView-拦截");
    			return false;
    		}
    		return true;
    }

	render() {
  		console.info("TodoFootbarView-render");
		const { filter, changeFilter, completedCount} = this.props;
		return <div className='todoFootbar'>
			<TodoFootbarCountView
				completedCount = {completedCount}
			/>
			<TodoFootbarFilterView  
				filter = {filter}
				changeFilter = {changeFilter}
			/>
		</div>
	}
}