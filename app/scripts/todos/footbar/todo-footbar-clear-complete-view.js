/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-16
 * Description: Todos
 */

 var TodoFootbarClearCompleteView = React.createClass({
 	render: function(){
 		console.info('footbar-clear-complete-渲染');
 		return <span 
 			className='todoClearBtn' 
 			onClick={this.props.clearCompletedTodos} 
 			title='clear completed'>clear {this.props.completedItemCount} completed</span>;
 	}
 });

 module.exports = TodoFootbarClearCompleteView;