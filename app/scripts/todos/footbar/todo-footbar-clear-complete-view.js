/*
 * Title: 底部工具栏清除已完成Item按钮
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-11-04
 * Description: Todos
 */

 var TodoFootbarClearCompleteView = React.createClass({
 	shouldComponentUpdate(nextProps, nextState) {
 		return true;
 	},

 	render: function(){
 		console.info('footbar-clear-complete-render');
 		return <span 
 			className='todoClearBtn' 
 			onClick={this.props.clearCompletedTodos} 
 			title='clear completed'>clear {this.props.completedItemCount} completed</span>;
 	}
 });

 module.exports = TodoFootbarClearCompleteView;