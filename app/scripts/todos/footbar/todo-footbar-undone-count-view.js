/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-16
 * Description: Todos
 */

 var TodoFootbarUndoneCountView = React.createClass({

 	render: function(){
 		return <span className='undoneCount'>{this.props.undoneItemCount} undone items</span>
 	}
});

module.exports = TodoFootbarUndoneCountView;