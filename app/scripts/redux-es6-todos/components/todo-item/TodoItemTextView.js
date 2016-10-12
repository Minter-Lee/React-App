/*
 * Title: ItemTextView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: ...
 */

 import React, {Component, PropTypes} from 'react';

 export default class ItemTextView extends Component {
 	constructor(props, context) {
 		super(props, context);
 		this.getClassName = this.getClassName.bind(this);
 	}
 	static propTypes = {
 		todoItem : PropTypes.object.isRequired
 	}

 	getClassName() {
 		const extralClass = this.props.todoItem.completed === true ? 'isCompleted' : '';
 		return `itemText ${extralClass}`;
 	}

 	shouldComponentUpdate(nextProps, nextState) {
    		if (nextProps.todoItem === this.props.todoItem) {
    			console.log("ItemTextView-拦截")
    			return false;
    		}
    		return true;
    }

 	render() {
 		console.info('ItemTextView-render');
 		return <span className={this.getClassName()}>{this.props.todoItem.text}</span>
 	}
 }