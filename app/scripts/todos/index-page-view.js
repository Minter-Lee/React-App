/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */
var TodoTitleView = require("./todo-title-view");
var TodoInputView = require("./todo-input-view");
var TodoListView = require('./todo-list-view');

var TodoIndexView = React.createClass({
	// 页面初始化数据
	getInitialState: function(){
		return {
			title: 'Todos',
			inputDatas: [],
			addTodos: this.addTodos
		}
	},
	render: function() {
		return <div className = "todos" >
			<TodoTitleView title={this.state.title}/>
			<TodoInputView addTodos={this.state.addTodos}/>
			<TodoListView inputDatas={this.state.inputDatas}/>
		</div>
	},

	addTodos: function(value){
		var inputDatas = this.state.inputDatas;
		inputDatas.push(value);
		this.setState({
			inputDatas: inputDatas
		});
	},

	deleteTodos: function(value){
		var inputDatas = this.state.inputDatas;
		inputDatas.remove(value);
		this.setState({
			inputDatas: inputDatas
		});
	}
});
module.exports = TodoIndexView;