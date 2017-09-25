/*
 * Title: todo列表页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2017-09-20
 * Description: 承载todo列表和相关处理功能
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import TodoItemView from './TodoItemView';
import styles from './TodoList.css';

const TodoListView = (props) => {
    const { completeTodo,  updateTodo, deleteTodo, todoItems } = props;
    return <ul className = { styles.list } >
        {
            todoItems.map( (item, index) => (
                <TodoItemView todoItem = {item} 
                    key = {item.get('todoId')} 
                    completeTodo = { completeTodo }
                    updateTodo = { updateTodo }
                    deleteTodo = { deleteTodo } />
            ))
        }
    </ul>
} 

TodoListView.propTypes = { 
    todoItems: ImmutablePropTypes.list.isRequired,
    completeTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default TodoListView;