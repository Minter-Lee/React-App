/*
 * Title: TodoFootbarCountView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-10
 * Description: ...
 */

import React, { PropTypes, Component } from 'react'
import {SHOW_ALL, SHOW_COMPLETE, SHOW_UNDONE} from '../../constants/FilterTypes'

export default class TodoFootbarCountView extends Component {
	static propTypes = {
  		completedCount: PropTypes.number.isRequired
  	}

  	shouldComponentUpdate(nextProps, nextState) {
  		if (nextProps.completedCount === this.props.completedCount) {
  			console.log("TodoFootbarCountView-拦截");
  			return false;
  		}
  		return true;
  	}

  	render() {
  		console.info("TodoFootbarCountView-render");
  		return <span>已完成{this.props.completedCount}条</span> 		
  	}
}

