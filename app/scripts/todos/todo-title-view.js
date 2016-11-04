/*
 * Title: Todos页面Title
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */
 var TodoTitleView = React.createClass({
 	shouldComponentUpdate(nextProps, nextState) {
 		if (nextProps.title === this.props.title) {
 			console.info('todo-title-render-拦截')
 			return false;
 		}
 		return true;
 	},
 	render: function(){
		console.info('todo-title-render')
 		return <h1 className='title'>{this.props.title}</h1>
 	}
 });

 module.exports = TodoTitleView;