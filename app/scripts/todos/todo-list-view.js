/*
 * Title: 列表页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-16
 * Description: Todos
 */

var TodoItemView = require('./todo-item/todo-item-view');

var TodoListView = React.createClass({
	getInitialState: function() {
		return {
			inputDatas: []
		}
	},

	// 初次渲染前
	componentWillMount: function() {
 		console.info('listView-初次渲染');
		this.state.inputDatas = this.props.getRenderInputDatas();
	},

	// 新的props来之前
	componentWillReceiveProps: function(nextProps) {
 		console.info('listView-父组件状态渲染');
		// 渲染前确认需要渲染的是全部todo还是已完成\未完成的todo;
		this.state.inputDatas = this.props.getRenderInputDatas();
	},

	render: function(){
		var self = this;
		return (
			<ul className='todoList'>
			{
				this.state.inputDatas.map(function(data, index){
					return <TodoItemView key={index} data={data} checkTodo={self.props.checkTodo} completeTodo={self.props.completeTodo} deleteTodo={self.props.deleteTodo} />
				})
			}
			</ul>
		);
	}
});
module.exports = TodoListView;