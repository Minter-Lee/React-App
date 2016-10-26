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

var TodoIndexView = React.createClass({
	// 页面初始化数据
	getInitialState: function() {
		this.idCount = 0;
		this.queryTypeData = {
			all: 'All',
			complete: 'Complete',
			undone: 'Undone'
		}

		return {
			title: 'Todos',
			queryType: this.queryTypeData.all,
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
				checkTodo = {this.checkTodo} 
				completeTodo = {this.completeTodo} 
				deleteTodo = {this.deleteTodo}
			/> 
			<TodoFootbarView 
				deleteTodos = {this.deleteTodos} 
				changeQueryType = {this.changeQueryType} 
				updateCompleteState = {this.updateCompleteState} 
				queryTypeData = {this.queryTypeData} 
				queryType = {this.state.queryType} 
				getInputDataCounts = {this.getInputDataCounts}
				checkAllTodos = {this.checkAllTodos}
				checkRenderInputDatasState = {this.checkRenderInputDatasState}
			/> 
		</div>
	},

	addTodos: function(value) {
		var inputDatas = this.state.inputDatas;
		var id = this.idCount++;
		inputDatas.push({
			isChecked: false,
			isCompleted: false,
			id: id,
			value: value
		});
		this.setState({
			inputDatas: inputDatas
		});
	},

	// 选中todo
	checkTodo: function(id, isChecked) {
		this.updateTodo(id, 'isChecked', isChecked);
	},

	// 选中或取消选中所有
	checkAllTodos: function(checked) {
		var self = this;
		var inputDatas = this.state.inputDatas;
		var isCompleted = '';
		switch(this.state.queryType){
			case this.queryTypeData.all:
				break;
			case this.queryTypeData.complete:
				isCompleted = true;
				break;
			case this.queryTypeData.undone:
				isCompleted = false;
				break;
			default:
				break;
		}
		inputDatas.map(function(item) {
			// 获取数据
			if(!(item.isCompleted != isCompleted)){
				item.isChecked = checked;
			}
		});
		this.setState({
			inputDatas: inputDatas
		});
	},

	// 标记完成
	completeTodo: function(id, isCompleted) {
		this.updateTodo(id, 'isCompleted', isCompleted);
	},

	// 标记完成
	updateCompleteState: function(value) {
		this.updateTodos('isCompleted', value);
	},

	// 更新属性
	updateTodo: function(id, attrName, value) {
		console.info('更新属性 : ', attrName);
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

	// 更新属性--批量
	updateTodos: function(attrName, value) {
		var inputDatas = this.state.inputDatas;
		inputDatas.map(function(item) {
			if (item.isChecked === true) {
				item[attrName] = value;
				// 还原选中
				item.isChecked = false;
			}
		});
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
	deleteTodos: function() {
		var newInputDatas = this.filterInputDatas('isChecked', false);
		if (newInputDatas.length === this.state.inputDatas.length) {
			alert("请先选择要删除的todo!");
		} else {
			this.setState({
				inputDatas: newInputDatas
			});
		}
	},

	// 获取需要渲染的inputDatas
	getRenderInputDatas: function() {
		var queryType = this.state.queryType;
		var datas = this.state.inputDatas;
		switch (queryType) {
			// case 'All':
			// 	datas = this.state.inputDatas;
			// 	break;
			case this.queryTypeData.complete:
				datas = this.filterInputDatas('isCompleted', true);
				break;
			case this.queryTypeData.undone:
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
		console.info('Before', this.state.queryType);
		this.setState({
			queryType: queryType
		}, function() {
			console.info('After', this.state.queryType);
		});
	},

	// 获取计数数量
	getInputDataCounts: function() {
		var totalCount = this.state.inputDatas.length;
		var completedCount = this.filterInputDatas('isCompleted', true).length;
		return {
			totalCount: totalCount,
			completedCount: completedCount,
			undoneCount: (totalCount - completedCount)
		}
	},

	// 获取当前查询选中数量
	checkRenderInputDatasState: function(){
		var isCheckAll = true;
		var renderData = this.getRenderInputDatas();
		if (renderData.length == 0) return false;
		for (var i in renderData){
			if(renderData[i].isChecked === false){
				isCheckAll = false;
				break;
			}
		}
		return isCheckAll;
	}

});
module.exports = TodoIndexView;