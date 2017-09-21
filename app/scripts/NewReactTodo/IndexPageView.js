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
import PropTypes from 'prop-types';

import TodoTitleView from './todoTitleView';
import TodoMainView from './todoMainView';

const IndexPageView = (props) => (
    <div className = {styles.container}>
        <TodoTitleView todoTitle={props.todoTitle}/>
        <TodoMainView/>
    </div>
)

IndexPageView.propTypes = {
    todoTitle: PropTypes.string.isRequired
}

export default IndexPageView;