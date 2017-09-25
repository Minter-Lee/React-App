/*
 * Title: todo 主体视图
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-19
 * Description: 列表 + 工具栏
 */
import { Component } from 'react';
import TodoInputView from './TodoInputView';
import TodoListView from './TodoList/TodoListView';
import TodoFootbarView from './TodoFootbar/TodoFootbarView';
import { ALL, ACTIVE, COMPLETED } from './Constants';
import Immutable from 'immutable';

export default class TodoMainView extends Component {
    constructor ( props, context ) {
        super(props, context);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodoValue = this.updateTodoValue.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
        this.getCompletedCount = this.getCompletedCount.bind(this);
        this.changeFilterType = this.changeFilterType.bind(this);
        this.getShowTodoList = this.getShowTodoList.bind(this);
        this.clearCompletedTodos = this.clearCompletedTodos.bind(this);
    }

    state = {
        data: Immutable.fromJS({
            todoList: [],
            completedCount: 0,
            filterType: ALL
        })
    }

    initTodoId = 1;

    render () {
        const immData = this.state.data;
        return <div>
            <TodoInputView addTodo={this.addTodo} />
            <TodoListView 
                todoItems = { this.getShowTodoList() }
                deleteTodo = { this.deleteTodo }
                updateTodo = { this.updateTodoValue }
                completeTodo = { this.completeTodo }/>
            <TodoFootbarView
                completedCount = { immData.get('completedCount') }
                filterType = {immData.get('filterType')}
                changeFilterType = {this.changeFilterType}
                clearCompletedTodos = {this.clearCompletedTodos}/>
        </div>
    }

    addTodo (value) {
        const newItem = Immutable.fromJS({
            value,
            todoId: this.initTodoId++,
            isCompleted: false
        });
        this.setState(({data}) => ({
            data : data.update('todoList', list => list.push(newItem))
        }));
    }

    completeTodo(todoId) {
        const todoList = this.state.data.get('todoList');
        const index = todoList.findIndex( item => item.get('todoId') === todoId);
        const updateList = todoList.updateIn([index,'isCompleted'], isCompleted => !isCompleted);
        this.setState(({data}) => ({
            data: data.set('todoList', updateList)
                .set('completedCount',this.getCompletedCount(updateList))
        }));
    }

    updateTodoValue(todoId, newValue) {
        const todoList = this.state.data.get('todoList');
        const index = todoList.findIndex( item => item.get('todoId') === todoId);
        this.setState(({data}) => ({
            data: data.update('todoList', list => list.setIn([index,'value'], newValue))
        }));
    }

    deleteTodo(todoId) {
        const todoList = this.state.data.get('todoList');
        const index = todoList.findIndex( item => item.get('todoId') === todoId);
        const updateList = todoList.delete(index);
        this.setState(({data}) =>({
            data: data.set('todoList', updateList)
                .set('completedCount',this.getCompletedCount(updateList))
        }));
    }

    getCompletedCount (list) {
        return list.filter(item => item.get('isCompleted') === true).size;
    }

    changeFilterType(type) {
        this.setState(({data}) => ({
            data: data.set('filterType',type)
        }));
    }

    getShowTodoList() {
        const immData = this.state.data;
        const filterType = immData.get('filterType'),
            todoList = immData.get('todoList');
        let list;
        switch (filterType) {
            case ALL:
                return todoList;
            case ACTIVE:
                return todoList.filter(item => item.get('isCompleted') === false);
            case COMPLETED:
                return  todoList.filter(item => item.get('isCompleted') === true);
            default :
                return todoList;
        }
    }

    clearCompletedTodos(){
        const todoList = this.state.data.get('todoList');
        this.setState(({data}) => ({
            data: data.update('todoList', list => list.filter(item => item.get('isCompleted') === false))
                .set('completedCount',0)
        }));
    }
}