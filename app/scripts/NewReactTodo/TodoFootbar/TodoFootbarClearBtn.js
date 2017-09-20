/*
 * Title: 底部工具栏 清空按钮
 * Author: MinterLee@hotmail.com
 * CreateDate: 2017-09-20
 * Description: ...
 */

import styles from './TodoFootbarClear.css';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';

export default CSSModules((props) => (
    <span styleName={classNames('clearBtn',{
                'displayInlineBlock': props.completedCount > 0})}
            onClick={props.clearCompletedTodos} title='clear completed' 
            >clear {props.completedCount} completed</span>
), styles, {allowMultiple: true});