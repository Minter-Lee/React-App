/*
 * Title: ItemDeleteView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-10
 * Description: ...
 */

 import React, {Component, PropTypes} from 'react';

 export default class ItemDeleteView extends Component {
 	static propTypes = {
 		deleteTodo: PropTypes.func.isRequired
 	}

 	render() {
 		return <div className='todoBtn deleteBtn' onClick={this.props.deleteTodo} title='delete'>×</div>
 	}
 }