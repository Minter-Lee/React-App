/*
 * Title: Todos按钮页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-05
 * Description: Todos
 */
var TodoBtnView = React.createClass({
	addTodos: function(event){
		this.props.addTodos();
	},
	render: function() {
		return <div className='addBtn' onClick={this.addTodos}>Add</div>	
	}
});
module.exports = TodoBtnView;
