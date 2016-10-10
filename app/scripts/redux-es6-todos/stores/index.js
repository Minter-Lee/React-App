/*
 * Title: 页面入口JS
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-08
 * Description: store 构建器
 */

import reducers from '../reducers/index';
import { createStore } from 'redux';

// const configureStore = initialState => {
export default function configureStore(initialState) {
	// 创建全局使用的store
	const store = createStore(reducers, initialState);

	//告知该文件及其所有关联被修正时，进行热替换，替换reducer
	if (module.hot) {
		module.hot.accept('../reducers/index', () => {
			// 重新加载reducer
			const nextReducer = require('../reducers/index');
			// 替换reducer
			store.replaceReducer(nextReducer);
		})
	}
	return store;
}

// export default configureStore;