/*
 * Title: todo 删除
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-19
 * Description: 
 */

import {Component, PropTypes } from 'react';
import styles from './TodoDelete.css';

export default class TodoDeleteBtn extends Component {
    constructor (props, context) {
        super(props, context);
    }

    static propTypes = {
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        return <div className={styles.deleteBtn} onClick={this.props.deleteTodo} title='delete'>×</div>
    }
}