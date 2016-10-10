/*
 * Title: ItemCompleteView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-10
 * Description: ...
 */

 import React, {Component, PropTypes} from 'react';

 export default class ItemCompleteView extends Component {
 	static propTypes = {
 		completeTodo: PropTypes.func.isRequired,
 		completed: PropTypes.bool.isRequired
 	}

 	getClassName() {
 		const extralClass = this.props.completed === true ? 'undoneBtn' : 'completeBtn';
 		return `todoBtn ${extralClass}`;
 	}

 	
 	render() {
 		return <div 
		title='complete'
 		className={this.getClassName()} 
 		onClick={this.props.completeTodo} 
 		>{this.props.completed === true ? '＋' : '√'}</div>
 	}
 }