/*
 * Title: 页面入口JS
 * Author: MinterLee@hotmail.com
 * CreateDate: 2017-09-20
 * Description: 初始页面入口JS，用于页面主体结构向HTML的注入
 */

import { render } from 'react-dom';

import App from './NewReactTodo/indexPageView';

//告知该文件及其所有关联被修正时，进行热替换
if (module.hot) {
    module.hot.accept();
}

const defaultData = {
    todoTitle : 'Todos'
}

render(<App {...defaultData} />, document.getElementById('container'));