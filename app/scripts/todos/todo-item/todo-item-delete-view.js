/*
 * Title: Item删除按钮
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */

var todoItemDeleteBtnView = React.createClass({
	shouldComponentUpdate(nextProps, nextState) {
 		if ( nextProps.deleteTodo === this.props.deleteTodo ) {
 			console.info('item-delete-render-拦截')
 			return false;
 		}
 		return true;
 	},

	render: function(){
		console.info('item-delete-render')
		return <div className='todoBtn deleteBtn' onClick={this.props.deleteTodo} title='delete'>×</div>
	}
});

module.exports = todoItemDeleteBtnView;