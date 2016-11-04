/*
 * Title: Todos页面底部工具栏
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-16
 * Description: Todos
 */

var TodoFootbarUndoneCountView = require('./todo-footbar-undone-count-view');
var TodoFootbarQueryView = require('./todo-footbar-query-view');
var TodoFootbarClearCompleteView = require('./todo-footbar-clear-complete-view');

 var TodoFootbarView = React.createClass({
 	render: function(){
 		console.info('footbar-render')
 		var completedItemCount = this.props.getCompletedItemCount();
 		return <div className='todoFootbar'>
 			<TodoFootbarUndoneCountView undoneItemCount = {this.props.getUndoneItemCount()} />
 			<TodoFootbarQueryView  
 				changeQueryType = {this.props.changeQueryType} 
 				queryType = {this.props.queryType}
 			/>
 			{
 				completedItemCount > 0 ? ( <TodoFootbarClearCompleteView 
 					clearCompletedTodos = {this.props.clearCompletedTodos} 
 					completedItemCount = {completedItemCount}
 				/> 
 				) : null
 			}
 		</div>;
 	}
 });

 module.exports = TodoFootbarView;