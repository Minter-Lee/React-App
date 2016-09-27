/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */

 var todoItemCompleteBtnView = React.createClass({
	render: function(){
		return <div className='todoBtn completeBtn' onClick={this.props.completeTodo} title='complete'>√</div>
	}
});

module.exports = todoItemCompleteBtnView;