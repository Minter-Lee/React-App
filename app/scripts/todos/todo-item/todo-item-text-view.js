/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */

var todoItemTextView = React.createClass({
	render: function(){
		return <span className='itemText'>{this.props.todoText}</span>
	}
});

module.exports = todoItemTextView;