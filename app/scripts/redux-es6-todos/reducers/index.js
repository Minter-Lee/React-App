/*
 * Title: reducer 聚合
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: 虽然只有一个，但重在有此结构支持多reducer，方面管理
 */

import { combineReducers } from 'redux'
import todos from './todos'

const rootRducer = combineReducers({
	todos
})

export default rootRducer