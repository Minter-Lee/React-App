/*
 * Title: todo 删除
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-19
 * Description: 
 */

import PropTypes from 'prop-types';
import styles from './TodoDelete.css';

const TodoDeleteBtn = (props) => (
    <div className={styles.deleteBtn} onClick={props.deleteTodo} title='delete'>×</div>
)

TodoDeleteBtn.propTypes = {
    deleteTodo: PropTypes.func.isRequired
}

export default TodoDeleteBtn;