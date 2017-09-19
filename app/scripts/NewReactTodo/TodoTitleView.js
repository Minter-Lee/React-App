/*
 * Title: TitleView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-19
 * Description: 直接只用无状态组件，不适用immutable或pureRender优化ShouldUpdate。
 */

import styles from './TodoTitle.css';

const TodoTitleView = (props) => (
    <h1 className = { styles.headTitle } > {props.todoTitle} </h1>
);

export default TodoTitleView;
