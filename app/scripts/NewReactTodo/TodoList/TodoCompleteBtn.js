/*
 * Title: todoItem 完成按钮
 * Author: MinterLee@hotmail.com
 * CreateDate: 2017-09-20
 * Description: ...
 */
import {Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './TodoComplete.css';
import CSSModules from 'react-css-modules';

@CSSModules(styles,{allowMultiple: true})
export default class TodoCompleteBtn extends Component {
    constructor (props, context) {
        super(props,context);
    }

    static propTypes = {
        completeTodo: PropTypes.func.isRequired,
        isCompleted: PropTypes.bool.isRequired
    }

    render() {
        const {isCompleted, completeTodo } = this.props;
        const styleName = classNames('completeBtn',{'completed': isCompleted});

        return <span styleName={styleName} onClick={completeTodo}></span>
    }
}