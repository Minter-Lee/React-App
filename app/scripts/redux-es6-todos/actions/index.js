/*
 * Title: action 注册
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: ...
 */

import * as types from './constants/ActionTypes'

export const addTodo = text => ({ type: types.ADD_TODO, text: text})