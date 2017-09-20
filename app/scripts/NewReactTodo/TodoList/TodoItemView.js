/*
 * Title: todo列表页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2017-09-20
 * Description: 每行todo内容，包含完成按钮，内容展示，内容编辑以及删除
 */

import { Component, PropTypes } from 'react';
import styles from './TodoItem.css';

import TodoCompleteBtn from './TodoCompleteBtn';
import TodoTextInputView from './TodoTextInputView';
import TodoDeleteBtn from './TodoDeleteBtn';

export default class TodoItemView extends Component {
    constructor(props, context) {
        super(props, context);
        this.completeTodo = this.completeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    static propTypes = {
        completeTodo: PropTypes.func.isRequired
    }

    render () {
        const {value, isCompleted, key} = this.props.todoItem;
        return <li className = {styles.item} key={key}>
            <TodoCompleteBtn 
                completeTodo = { this.completeTodo } 
                isCompleted = {isCompleted}
                ></TodoCompleteBtn>
            <TodoTextInputView 
                updateTodo = { this.updateTodo }
                value = { value }
                isCompleted = {isCompleted}
                ></TodoTextInputView>
            <TodoDeleteBtn 
                deleteTodo = {this.deleteTodo}
                ></TodoDeleteBtn>
        </li>
    }

    completeTodo(e) {
        this.props.completeTodo(this.props.todoItem.todoId);
    }

    updateTodo(value) {
        this.props.updateTodo(this.props.todoItem.todoId, value);
    }

    deleteTodo(e) {
        this.props.deleteTodo(this.props.todoItem);
    }
}