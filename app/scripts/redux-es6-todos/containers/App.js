/*
 * Title: 主容器视图
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: 传递Action，提供数据等
 */
import React , {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoTitleView from '../components/TodoTitleView';
import TodoInputView from '../components/TodoInputView';
import TodoSectionView from '../components/TodoSectionView';
import * as TodoActions from '../actions';

// 单纯的构建功能，无需继承React的Component
const App = ({todos, actions}) => ( 
	<div className='todos'>
		<TodoTitleView title = {todos.title} />
		<TodoInputView addTodo = {actions.addTodo}/>
		<TodoSectionView 
			todoItems = {todos.items} 
			{...actions}
		/>
	</div>
)

// 验证propType类型
App.propTypes = {
	todos: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
}

// 利用connect传递App使用的todo数据
const mapStateToProps = state => ({
	todos: state.todos
})

// 利用connect传递App使用的绑定过的Action
const mapDispatchToProps = (dispatch) =>({
	actions: bindActionCreators(TodoActions, dispatch)
})

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(App)



