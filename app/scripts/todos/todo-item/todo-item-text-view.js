/*
 * Title: Item文本
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */

var todoItemTextView = React.createClass({
	shouldComponentUpdate(nextProps, nextState) {
 		if ( nextProps.todoText === this.props.todoText ) {
 			console.info('item-text-render-拦截')
 			return false;
 		}
 		return true;
 	},
	render: function(){
		console.info('item-text-render')
		return <span className='itemText'>{this.props.todoText}</span>
	}
});

module.exports = todoItemTextView;