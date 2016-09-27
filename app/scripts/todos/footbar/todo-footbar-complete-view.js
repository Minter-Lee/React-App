/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-16
 * Description: Todos
 */

 var TodoFootbarCompleteView = React.createClass({
 	render: function(){
 		console.info('footbar-Complete-渲染');
 		return <span className='todoBtn completeBtn' onClick={this.props.completeTodos} title='complete'>√</span>;
 	}
 });

 module.exports = TodoFootbarCompleteView;