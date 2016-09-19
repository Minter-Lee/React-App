/*
 * Title: 列表页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */
var TodoListView = React.createClass({
	render: function(){
		return <div className='todoList'>{this.props.inputDatas}</div>
	}
});
module.exports = TodoListView;