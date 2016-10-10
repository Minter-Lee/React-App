/*
 * Title: TodoFootbarView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-10
 * Description: ...
 */

import React, { PropTypes, Component } from 'react'
import {SHOW_ALL, SHOW_COMPLETE, SHOW_UNDONE} from '.../constants/FilterTypes'

export default class TodoFootbarView extends Component {
	static propTypes = {
  		actions: PropTypes.object.isRequired,
  		todoItems: PropTypes.array.isRequired,
  		changeFilter: PropTypes.func.isRequired
  	}

  	state = {
  		classNameAll: 'all',
		classNameComplete: 'complete',
		classNameUndone: 'undone'
  	}

 	// 初次渲染前
 	componentWillMount(){
 		console.info('footbar-count-初次渲染');
 		this.setClassNameState();
 	}

 	// 父组件状态更新前
	componentWillReceiveProps(nextProps) {
 		console.info('footbar-count-父组件状态渲染');
		// 更新按钮状态
		this.setClassNameState(nextProps);
	}

	// 固化按钮样式
	setClassNameState = (props) => {
		switch(filter)
	}

  	render() {
		return <ul className='queryBtn'>
 			<li className={this.state.classNameAll} 
 				onClick={this.changeFilter(SHOW_ALL)}}
 			>A</li>
 			<li className={this.state.classNameComplete} 
 				onClick={this.changeFilter(SHOW_COMPLETE)}}
 			>C</li>
 			<li className={this.state.classNameUndone} 
 				onClick={this.changeFilter(SHOW_UNDONE)}}
 			>U</li>
 		</ul>  		
  	}
}

