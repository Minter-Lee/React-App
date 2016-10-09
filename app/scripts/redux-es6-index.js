/*
 * Title: 页面入口JS
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-08
 * Description: 初始页面入口JS，用于页面主体结构向HTML的注入
 */

// React 基础使用
import React from 'react'
import { render } from 'react-dom'

// react-redux 相关
import { Provider } from 'react-redux'

// 主容器视图
import App from './redux-es6-todos/containers/App'

// 处理过的store构建器
import configureStore from './redux-es6-todos/stores/index'

const store = configureStore()

render (
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('container')
)
