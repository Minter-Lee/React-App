/*
 * Title: 底部工具栏 清空按钮
 * Author: MinterLee@hotmail.com
 * CreateDate: 2017-09-20
 * Description: ...
 */

import styles from './TodoFootbarClear.css';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

const TodoFootbarClearBtn = (props) => (
    <span styleName={classNames('clearBtn',{
                'displayInlineBlock': props.completedCount > 0})}
            onClick={props.clearCompletedTodos} title='clear completed' 
            >clear {props.completedCount} completed</span>
)
TodoFootbarClearBtn.propTypes = {
    completedCount: PropTypes.number.isRequired,
    clearCompletedTodos: PropTypes.func.isRequired
}
export default CSSModules(TodoFootbarClearBtn, styles, {allowMultiple: true});