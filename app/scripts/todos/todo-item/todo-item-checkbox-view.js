/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-07-05
 * Description: Todos
 */

var todoItemCheckboxView = React.createClass({
	checkTodo: function(){
		this.props.checkTodo(this.itemCheckbox.checked);
	},
	render: function(){
		var self = this;
		return <input type='checkbox' className='itemCheckbox' checked={
			this.props.isChecked == true ? 'checked' : ''
		}  onClick={this.checkTodo} ref={function(dom){
			self.itemCheckbox = dom;
		}}/>
	}
});

module.exports = todoItemCheckboxView;