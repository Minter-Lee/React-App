/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */
var TodoTitleView = require("./todo-title-view");
var TodoInputView = require("./todo-input-view");
var TodoListView = require('./todo-list-view');
var TodoFootbarView = require('./footbar/todo-footbar-view');
var TODO_QUERY_TYPE = require('./todo-constant-query-type');

var TodoIndexView = React.createClass({
	// 页面初始化数据
	getInitialState: function() {
		this.idCount = 0;
		return {
			title: 'Todos',
			queryType: TODO_QUERY_TYPE.QUERY_ALL,
			inputDatas: []
		}
	},

	render: function() {
		console.info('^(*￣(oo)￣)^');
		return <div className = "todos" >
			<TodoTitleView title = {this.state.title}/>  
			<TodoInputView addTodos = {this.addTodos}/>  
			<TodoListView 
				getRenderInputDatas = {this.getRenderInputDatas} 
				completeTodo = {this.completeTodo} 
				deleteTodo = {this.deleteTodo}
			/> 
			<TodoFootbarView 
				clearCompletedTodos = {this.clearCompletedTodos} 
				changeQueryType = {this.changeQueryType} 
				queryType = {this.state.queryType} 
				getCompletedItemCount = {this.getCompletedItemCount}
				getUndoneItemCount = {this.getUndoneItemCount}
			/> 
		</div>
	},

	addTodos: function(value) {
		var inputDatas = this.state.inputDatas;
		var id = this.idCount++;
		inputDatas.push({
			isCompleted: false,
			id: id,
			value: value
		});
		this.setState({
			inputDatas: inputDatas
		});
	},

	// 标记完成
	completeTodo: function(id, isCompleted) {
		this.updateTodo(id, 'isCompleted', isCompleted);
	},

	// 更新属性
	updateTodo: function(id, attrName, value) {
		var inputDatas = this.state.inputDatas;
		for(var i in inputDatas){
			var inputData = inputDatas[i];
			if (inputData.id === id) {
				inputData[attrName] = value;
				break;
			}
		}
		this.setState({
			inputDatas: inputDatas
		});
	},

	// 删除属性
	deleteTodo: function(id) {
		var inputDatas = this.state.inputDatas;
		for(var i in inputDatas){
			var inputData = inputDatas[i];
			if (inputData.id === id) {
				inputDatas.splice(i, 1);
				break;
			}
		}
		this.setState({
			inputDatas: inputDatas
		});
	},

	// 删除-批量
	clearCompletedTodos: function() {
		var undoneInputDatas = this.filterInputDatas('isCompleted', false);
		this.setState({
			inputDatas: undoneInputDatas
		});
	},

	// 获取需要渲染的inputDatas
	getRenderInputDatas: function() {
		var queryType = this.state.queryType;
		var datas = this.state.inputDatas;
		switch (queryType) {
			case TODO_QUERY_TYPE.QUERY_ALL:
				break;
			case TODO_QUERY_TYPE.QUERY_COMPLETED:
				datas = this.filterInputDatas('isCompleted', true);
				break;
			case TODO_QUERY_TYPE.QUERY_UNDONE:
				datas = this.filterInputDatas('isCompleted', false);
				break;
			default:
				break;
		}
		return datas;
	},

	// 过滤输入的数据
	filterInputDatas: function(attrName, filterFlag) {
		var filterDatas = [];
		this.state.inputDatas.map(function(item) {
			if (item[attrName] === filterFlag) {
				filterDatas.push(item);
			}
		});
		return filterDatas;
	},

	// 动态查询不同状态的数据
	changeQueryType: function(queryType) {
		this.setState({
			queryType: queryType
		});
	},

	// 获取已完成数量
	getCompletedItemCount: function() {
		return this.filterInputDatas('isCompleted', true).length;
	},

	// 获取未完成数量
	getUndoneItemCount: function() {
		return this.filterInputDatas('isCompleted', false).length;
	}
});
module.exports = TodoIndexView;