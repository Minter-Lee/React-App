/*
 * Title: 底部工具栏
 * Author: MinterLee@hotmail.com
 * CreateDate: 2017-09-20
 * Description: 使用无状态组件
 */
import PropTypes from 'prop-types';

const TodoFootbarCountView = (props) => (
    <span>已完成{props.completedCount}条</span>
);

TodoFootbarCountView.propTypes = {
    completedCount: PropTypes.number.isRequired
}

export default TodoFootbarCountView;