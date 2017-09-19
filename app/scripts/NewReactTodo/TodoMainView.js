/*
 * Title: todo 主体视图
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-19
 * Description: 列表 + 工具栏
 */
import { Component } from 'react';
import TodoInputView from './TodoInputView';

export default class TodoMainView extends Component {
    constructor ( props, context ) {
        super(props, context);
        this.addTodo = this.addTodo.bind(this);
    }

    state = {
        todoList: []
    }

    addTodo (value) {
        // 在没有redux的情况下，是否需要保证传入的state是全新的？
        // 这部分是临时的还有问题需要解决
        let newList = this.state.todoList;
        newList.push(value);
        this.setState({todoList: newList});
    }

    render () {
        return <div>
            <TodoInputView addTodo={this.addTodo}></TodoInputView>
            <div>{
                this.state.todoList.map( (item, index) => {
                    return <div key={index} > {item} </div>
                })
            }</div>
        </div>
    }
}