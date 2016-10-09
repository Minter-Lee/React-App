/*
 * Title: reducer for todos
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: 新增 删除 标记完成 等等
 */
import { ADD_TODO } from '../constants/ActionTypes'

// 默认的State
const initalState = [{
	text: '',
	isCompleted: false,
	id: 0
}]

export default function todos (state = initialState, action ) {
	switch (action.type) {
		case ADD_TODO:
			return [
			{
				id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
				completed: false,
				text: action.text
			},
			...state
			]
		default: 
			return state;
	}
}

