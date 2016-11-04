/*
 * Title: Item完成按钮
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */

var todoItemCompleteView = React.createClass({
	getInitialState: function() {
		return {
			itemClassName: 'itemCompleteBtn'
		}
	},

	shouldComponentUpdate(nextProps, nextState) {
 		if ( nextProps.isCompleted === this.props.isCompleted ) {
 			console.info('item-complete-render-拦截')
 			return false;
 		}
 		return true;
 	},

	// 初次渲染前
 	componentWillMount: function(){
 		this.updateClassName();
 	},

	// 父组件状态更新前
	componentWillReceiveProps: function(nextProps) {
		this.updateClassName(nextProps);
	},

	// 重置className
	updateClassName: function(props){
		var props = props || this.props;
		if (props.isCompleted === true) {
			this.setState({
				itemClassName: 'itemCompleteBtn itemCompleted'
			});
		} else {
			this.setState({
				itemClassName: 'itemCompleteBtn'
			});
		}
	},

	render: function(){
		console.info('item-complete-render');
		return <span 
			className={this.state.itemClassName}
			onClick={this.props.completeTodo}></span>
	}
});

module.exports = todoItemCompleteView;