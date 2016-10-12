/*
 * Title: reducer for todos
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: 新增 删除 标记完成 等等
 */
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../constants/ActionTypes'
import {SHOW_ALL, SHOW_COMPLETE, SHOW_UNDONE} from '../constants/FilterTypes'

// 默认的State
const initialState = {
	title: "Todos",
	// filter: SHOW_ALL,
	// completedCount: 0,
	items: []
}

export default function todos (state = initialState, action ) {
	let items = [];
	switch (action.type) {
		case ADD_TODO:
			items = [
			{
				id: state.items.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1,
				completed: false,
				text: action.text
			},
			...state.items
			]

			// 需返回新的state对象
			return Object.assign({}, {...state, items: items});
		case DELETE_TODO:
			items = state.items.filter(item => item.id !== action.id);
			return Object.assign({}, {...state, items: items});
		case COMPLETE_TODO:
			items = state.items.map(item => (
				item.id === action.id ? {...item, completed: !item.completed } : item
			));
			return Object.assign({},{...state, items: items});
		// case CHANGE_FILTER:
		// 	return Object.assign({},{...state, filter: action.filter})
		default: 
			return state;
	}
}

