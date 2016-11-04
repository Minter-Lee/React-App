/*
 * Title: 底部工具栏查询按钮
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-11-03
 * Description: Todos
 */


var TODO_QUERY_TYPE = require('../todo-constant-query-type');

var TodoFootbarQueryView = React.createClass({
 	// 获取初始状态
 	getInitialState: function(){
 		return this.getDefaultState();
 	},

 	// 获取默认的状态
 	getDefaultState: function(){
		return {
			classNameAll: 'all',
			classNameComplete: 'complete',
			classNameUndone: 'undone'
		}
 	},

 	// 初次渲染前
 	componentWillMount: function(){
 		this.updateClassName();
 	},

 	// 父组件状态更新前
	componentWillReceiveProps: function(nextProps) {
		// 更新按钮状态
		this.updateClassName(nextProps);
	},

	// 拦截不必要的更新
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.queryType === this.props.queryType) {
			console.info('footbar-query-render-拦截')
			return false;
		}
 		return true;
 	},

	render: function() {
		console.info('footbar-query-render')
 		return <ul className='queryBtn'>
 			<li className={this.state.classNameAll} 
 				onClick={this.queryTodos} 
 				data-queryType={TODO_QUERY_TYPE.QUERY_ALL}
 			>All</li>
 			<li className={this.state.classNameComplete} 
 				onClick={this.queryTodos}
 				data-queryType={TODO_QUERY_TYPE.QUERY_COMPLETED}
 			>Completed</li>
 			<li className={this.state.classNameUndone} 
 				onClick={this.queryTodos}
				data-queryType={TODO_QUERY_TYPE.QUERY_UNDONE}
 			>Udone</li>
 		</ul>;
 	},

 	// 查询Todo
	queryTodos: function(e) {
		this.props.changeQueryType(e.target.getAttribute('data-queryType'));
	},

	// 更新样式名称
	updateClassName: function(props) {
		var name;
		// 修正props是调用此处的props是旧的，需要传入新的使用
		var props = props || this.props;
		var queryType = props.queryType;
		switch (queryType) {
			case TODO_QUERY_TYPE.QUERY_ALL:
				name = 'classNameAll';
				break;
			case TODO_QUERY_TYPE.QUERY_COMPLETED:
				name = 'classNameComplete';
				break;
			case TODO_QUERY_TYPE.QUERY_UNDONE:
				name = 'classNameUndone';
				break;
			default:
				name = 'classNameAll';
				break;
		}
		var updateState = this.getDefaultState();
		updateState[name] += ' on';
		this.setState(updateState);
	}
});

module.exports = TodoFootbarQueryView;