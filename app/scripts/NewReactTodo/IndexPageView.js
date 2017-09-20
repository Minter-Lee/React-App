/*
 * Title: 整改后react主页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2017-09-19
 * Description: 用于布局使用，应该使用无状态组件或者直接是JSX输出
 */
if (module.hot) {
    module.hot.accept();
}

import  styles from './IndexPage.css';

import CSSModules from 'react-css-modules';

import TodoTitleView from './todoTitleView';
import TodoMainView from './todoMainView';

// 因为使用了CSSMoudules包裹，所以这里样式可以使用styleName来注入
export default CSSModules((props) => (
    <div styleName = 'container'>
        <TodoTitleView todoTitle={props.todoTitle}/>
        <TodoMainView/>
    </div>
), styles);