/*
 * Title: TodoFootbarView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-10
 * Description: ...
 */

import React, { PropTypes, Component } from 'react'
import {SHOW_ALL, SHOW_COMPLETE, SHOW_UNDONE} from '../../constants/FilterTypes'

export default class TodoFootbarFilterView extends Component {
	static propTypes = {
  		filter: PropTypes.string.isRequired,
  		changeFilter: PropTypes.func.isRequired
  	}

	getDefaultClassName = () => {
		return {
			classNameAll: 'all',
			classNameComplete: 'complete',
			classNameUndone: 'undone'
		}
	}

	// 固化按钮样式
	getClassNames = (filter) => {
		const defaultClassName = this.getDefaultClassName();
		switch(filter) {
			case SHOW_ALL:
			return {...defaultClassName, classNameAll:'all on'}
			case SHOW_COMPLETE: 
			return {...defaultClassName, classNameComplete:'complete on'}
			case SHOW_UNDONE: 
			return {...defaultClassName, classNameUndone:'undone on'}
			default:
			return {...defaultClassName, classNameAll:'all on'}
		}
	}

	changeFilter = (e) => {
		const type = e.target.getAttribute('data-filter-type');
		this.props.changeFilter(type);
	}

    shouldComponentUpdate(nextProps, nextState) {
    		const {filter, changeFilter} = this.props;
    		if (nextProps.filter === filter && nextProps.changeFilter === changeFilter) {
    			console.log("TodoFootbarView-拦截");
    			return false;
    		}
    		return true;
    }

  	render() {
  		const { filter } = this.props;
  		const classNames = this.getClassNames(filter);
  		console.info("TodoFootbarView-render");
		return <ul className='queryBtn'>
 			<li className={classNames.classNameAll} 
 				data-filter-type={SHOW_ALL}
 				onClick={this.changeFilter}
 			>A</li>
 			<li className={classNames.classNameComplete}
 				data-filter-type={SHOW_COMPLETE}
 				onClick={this.changeFilter}
 			>C</li>
 			<li className={classNames.classNameUndone} 
 				data-filter-type={SHOW_UNDONE}
 				onClick={this.changeFilter}
 			>U</li>
 		</ul>  		
  	}
}

