/*
 * Title: todo列表页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2017-09-20
 * Description: 承载todo列表和相关处理功能
 */
import { Component, PropTypes } from 'react';
import TodoItemView from './TodoItemView';
import styles from './TodoList.css';

export default class TodoListView extends Component {
    constructor( props, context ) {
        super( props, context );
    }

    static propTypes = {
        todoItems: PropTypes.array.isRequired
    }

    render() {
        return <ul className = { styles.list } >
            {
                this.props.todoItems.map( (item, index) => (
                    <TodoItemView todoItem = {item} 
                        key = {item.todoId} 
                        completeTodo = {this.props.completeTodo}
                        updateTodo = { this.props.updateTodo }
                        deleteTodo = {this.props.deleteTodo}
                        ></TodoItemView>
                ))
            }
        </ul>
    }
} 