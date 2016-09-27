/*
 * Title: Todos按钮页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-05
 * Description: Todos
 */
var TodoAddView = React.createClass({
	render: function() {
		return <div className='addBtn' onClick={this.props.addTodos}>Add</div>	
	}
});
module.exports = TodoAddView;
