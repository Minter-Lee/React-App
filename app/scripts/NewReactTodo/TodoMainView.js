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
        todoList: [],
        completedCount: 0,
        filterType: ALL
    }

    initTodoId = 1;

    render () {
        const {todoList, completedCount, filterType } = this.state;
        return <div>
            <TodoInputView addTodo={this.addTodo} />
            <TodoListView 
                todoItems = { this.getShowTodoList() }
                deleteTodo = { this.deleteTodo }
                updateTodo = { this.updateTodoValue }
                completeTodo = { this.completeTodo }/>
            <TodoFootbarView
                completedCount = { completedCount }
                filterType = {filterType}
                changeFilterType = {this.changeFilterType}
                clearCompletedTodos = {this.clearCompletedTodos}/>
        </div>
    }

    addTodo (value) {
        let newList = this.state.todoList;
        newList.push({
          value,
          todoId: this.initTodoId++,
          isCompleted: false
        });
        this.setState({todoList: newList});
    }

    // 为了保证数据的一致性，需要在这里对单个Todo进行修正，然后整体更新List进行diff
    completeTodo(todoId, isCompleted) {
        const { todoList } = this.state;
        // 对数组中元素的直接修改，然后重新setState，这种方式不知道是否符合immutable的要求
        let cTodo = todoList.filter(item => item.todoId === todoId)[0];
        cTodo.isCompleted = !cTodo.isCompleted;
        this.setState({
            todoList: todoList,
            completedCount: this.getCompletedCount()
        });
    }

    updateTodoValue(todoId, newValue) {
        const { todoList } = this.state;
        let uTodo = todoList.filter(item => item.todoId === todoId)[0];
        uTodo.value = newValue;
        this.setState({todoList: todoList});
    }

    deleteTodo(todoItem) {
        const { todoList } = this.state;
        const newList = todoList.filter((item, index) => index != todoList.indexOf(todoItem));
        this.setState({
            todoList: newList,
            completedCount: this.getCompletedCount()
        });
    }

    getCompletedCount (list = this.state.todoList) {
        return list.filter(item => item.isCompleted === true).length;
    }

    changeFilterType(type) {
        this.setState({filterType:type});
    }

    getShowTodoList() {
        const {filterType, todoList} = this.state;
        let list;
        switch (filterType) {
            case ALL:
                return todoList;
            case ACTIVE:
                return todoList.filter(item => item.isCompleted === false);
            case COMPLETED:
                return  todoList.filter(item => item.isCompleted === true);
            default :
                return todoList;
        }
    }

    clearCompletedTodos(){
        const newList = this.state.todoList.filter(item => item.isCompleted === false);
        this.setState({
            todoList: newList,
            completedCount: this.getCompletedCount(newList)
        });
    }
}