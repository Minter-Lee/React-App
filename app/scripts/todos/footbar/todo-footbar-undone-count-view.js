/*
 * Title: 未完成Item数据统计
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-11-03
 * Description: Todos
 */

 var TodoFootbarUndoneCountView = React.createClass({
 	render: function(){
 		console.info('footbar-undone-count-render')
 		return <span className='undoneCount'>{this.props.undoneItemCount} undone items</span>
 	}
});

module.exports = TodoFootbarUndoneCountView;