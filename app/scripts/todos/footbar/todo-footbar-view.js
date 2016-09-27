/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-16
 * Description: Todos
 */

var TodoFootbarCheckAllView = require('./todo-footbar-check-all-view');
var TodoFootbarDeleteView = require('./todo-footbar-delete-view');
var TodoFootbarCompleteView = require('./todo-footbar-complete-view');
var TodoFootbarUndoneView = require('./todo-footbar-undone-view');
var TodoFootbarCountView = require('./todo-footbar-count-view');

 var TodoFootbarView = React.createClass({
 	// 初次渲染前
 	componentWillMount: function(){
 		console.info('footbar-初次渲染');
 		this.updateCounts();
 	},

 	// 父组件状态更新前
	componentWillReceiveProps: function(nextProps) {
 		console.info('footbar-父组件状态渲染');
		// 更新按钮状态
		this.updateCounts(nextProps);
	},

 	render: function(){
 		return <div className='todoFootbar'>
 			<TodoFootbarCheckAllView 
 				checkAllTodos={this.props.checkAllTodos}
 				checkRenderInputDatasState={this.props.checkRenderInputDatasState}
 			/>
 			<TodoFootbarDeleteView deleteTodos={this.props.deleteTodos}/>
 			<TodoFootbarCompleteView completeTodos={this.completeTodos}/>
 			<TodoFootbarUndoneView undoneTodos={this.undoneTodos}/>
 			<TodoFootbarCountView 
 				changeQueryType={this.props.changeQueryType} 
 				queryType={this.props.queryType} 
 				queryTypeData={this.props.queryTypeData} 
 				totalCount={this.state.totalCount}
 				completedCount={this.state.completedCount}
 				undoneCount={this.state.undoneCount}
 			/>
 		</div>;
 	},

 	completeTodos: function(){
 		this.props.updateCompleteState(true);
 	},

 	undoneTodos: function(){
 		this.props.updateCompleteState(false);
 	},

 	// 重新获取渲染使用的数量
	updateCounts: function(props) {
		var props = props || this.props;
		var counts = props.getInputDataCounts();
		this.setState({
			totalCount: counts.totalCount,
			completedCount: counts.completedCount,
			undoneCount: counts.undoneCount
		});
	}
 });

 module.exports = TodoFootbarView;