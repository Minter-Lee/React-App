/*
 * Title: ItemCompleteView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-10
 * Description: ...
 */

 import React, {Component, PropTypes} from 'react';

 export default class ItemCompleteView extends Component {
	constructor(props, context) {
 		super(props, context);
 		this.getClassName = this.getClassName.bind(this);
 	}

 	static propTypes = {
 		completeTodo: PropTypes.func.isRequired,
 		completed: PropTypes.bool.isRequired
 	}

 	getClassName() {
 		const extralClass = this.props.completed === true ? 'undoneBtn' : 'completeBtn';
 		return `todoBtn ${extralClass}`;
 	}

 	shouldComponentUpdate(nextProps, nextState) {
 		const { completeTodo, completed } = this.props;
 		const {completeTodo: completeTodoNext, completed: completedNext } = nextProps;
		if (completeTodoNext === completeTodo 
			&& completedNext === completed) {
			console.log("ItemCompleteView-拦截")
			return false;
		}
    		return true;
    }

 	render() {
 		console.info("ItemCompleteView-render");
 		return <div 
		title='complete'
 		className={this.getClassName()} 
 		onClick={this.props.completeTodo} 
 		>{this.props.completed === true ? '＋' : '√'}</div>
 	}
 }