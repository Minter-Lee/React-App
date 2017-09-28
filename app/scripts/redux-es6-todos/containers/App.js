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
			{...actions} />
	</div>
)

// 验证propType类型
App.propTypes = {
	todos: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
}

// 利用connect传递App使用的todo数据  
// 在APP中处理完成的数据在进行渲染，保证了数据从前到后的一致性，
// 但是在此处处理也就意味着，所有action触发state所产生的APP重新渲
// 染都需要重新处理一遍数据，这其中仅有部分action可能影响这些数据
// 处理，剩余的可能毫无关联，这还仅仅是1个数据的处理和计算，若这
// 类本地处理的数据很多，性能上一定有影响，虽然后续业务开发中很少
// 出现本地数据处理，但是针对这部分我觉得大部分情况下还是由使用该
// 的Compotents进行处理比较合适。
// const mapStateToProps = state => {
// 	const {filter, items} = state.todos;
// 	todos: {...state.todos, 
// 		items: getFilterTodoItems(filter, items)
// 	}
// };
// getFilterTodoItems = (filter, items) => {
// 	switch (filter) {
// 		case SHOW_ALL:
// 			return items;
// 		case SHOW_COMPLETE:
// 			return items.filter(item => item.completed === true);
// 		case SHOW_UNDONE:
// 			return items.filter(item => item.completed === false);
// 		default:
// 			return items;
// 	}
// }

const mapStateToProps = state => ({
	todos: state.todos
});

// 利用connect传递App使用的绑定过的Action
const mapDispatchToProps = (dispatch) =>({
	actions: bindActionCreators(TodoActions, dispatch)
})

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(App)



