/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-16
 * Description: Todos
 */
 
 var TodoFootbarUndoneView = React.createClass({
 	render: function(){
 		console.info('footbar-Undone-渲染');
 		return <span className='todoBtn undoneBtn' onClick={this.props.undoneTodos} title='undone'>U</span>;
 	}
 });

 module.exports = TodoFootbarUndoneView;