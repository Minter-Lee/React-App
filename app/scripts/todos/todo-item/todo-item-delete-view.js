/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */

 var todoItemDeleteBtnView = React.createClass({
	render: function(){
		return <div className='todoBtn deleteBtn' onClick={this.props.deleteTodo} title='delete'>×</div>
	}
});

module.exports = todoItemDeleteBtnView;