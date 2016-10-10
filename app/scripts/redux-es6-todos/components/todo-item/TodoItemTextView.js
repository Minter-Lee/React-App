/*
 * Title: ItemTextView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: ...
 */

 import React, {Component, PropTypes} from 'react';

 export default class ItemTextView extends Component {
 	static propTypes = {
 		todoItem : PropTypes.object.isRequired
 	}

 	getClassName = () => {
 		const extralClass = this.props.todoItem.completed === true ? 'isCompleted' : '';
 		return `itemText ${extralClass}`;
 	}

 	render() {
 		console.info('ItemTextView-render');
 		return <span className={this.getClassName()}>{this.props.todoItem.text}</span>
 	}
 }