 /*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-16
 * Description: Todos
 */

 var TodoFootbarCheckAllView = React.createClass({
	componentWillMount: function() {
		this.setState({
			checked: false
		})
	},

	// 父组件状态更新前
	componentWillReceiveProps: function(nextProps) {
		this.setState({
			checked: nextProps.checkRenderInputDatasState()
		});
	},

 	render: function(){
 		var self = this;
 		console.info('footbar-CheckAll-渲染');
 		return <input type='checkbox' className='checkAll' checked = {
 			this.state.checked ? 'checked' : ''
 		} onChange={this.checkAll} ref={function(el){self.checkAllEl = el;}}/>
 	},

	checkAll: function() {
		this.props.checkAllTodos(this.checkAllEl.checked);
		this.checked = this.checkAllEl.checked;
	}
 });

 module.exports = TodoFootbarCheckAllView;