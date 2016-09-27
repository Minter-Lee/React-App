/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-16
 * Description: Todos
 */

 var TodoFootbarDeleteView = React.createClass({
 	render: function(){
 		console.info('footbar-Delete-渲染');
 		return <span className='todoBtn deleteBtn' onClick={this.props.deleteTodos} title='delete'>×</span>;
 	}
 });

 module.exports = TodoFootbarDeleteView;