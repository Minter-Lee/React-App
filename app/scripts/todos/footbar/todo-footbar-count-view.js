/*
 * Title: Todos页面首页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-16
 * Description: Todos
 */

 var TodoFootbarCountView = React.createClass({
 	// 获取初始状态
 	getInitialState: function(){
 		return this.getDefaultState();
 	},

 	// 获取默认的状态
 	getDefaultState: function(){
		return {
			classNameAll: 'all',
			classNameComplete: 'complete',
			classNameUndone: 'undone',
			totalCount: 0,
			completedCount: 0,
			undoneCount: 0
		}
 	},

 	// 初次渲染前
 	componentWillMount: function(){
 		console.info('footbar-count-初次渲染');
 		this.updateClassName();
 	},

 	// 父组件状态更新前
	componentWillReceiveProps: function(nextProps) {
 		console.info('footbar-count-父组件状态渲染');
		// 更新按钮状态
		this.updateClassName(nextProps);
	},

 	render: function(){
 		return <ul className='queryBtn'>
 			<li className={this.state.classNameAll} 
 				onClick={this.queryAll} 
 				ref={function(dom){this.allBtnDom = dom}}
 			>A|{this.state.totalCount}</li>
 			<li className={this.state.classNameComplete} 
 				onClick={this.queryComplete} 
 				ref={function(dom){this.completeBtnDom = dom}}
 				>C|{this.state.completedCount}</li>
 			<li className={this.state.classNameUndone} 
 				onClick={this.queryUndone} 
 				ref={function(dom){this.undoneBtnDom = dom}}>
 				U|{this.state.undoneCount}</li>
 		</ul>;
 	},

 	// 查询所有
	queryAll: function() {
		this.props.changeQueryType(this.queryTypeData.all);
	},

 	// 查询完成
	queryComplete: function() {
		this.props.changeQueryType(this.queryTypeData.complete);
	},

 	// 查询未完成
	queryUndone: function() {
		this.props.changeQueryType(this.queryTypeData.undone);
	},

	// 更新样式名称
	updateClassName: function(props) {
		var name;
		// 修正props是调用此处的props是旧的，需要传入新的使用
		var props = props || this.props;
		var queryType = props.queryType;
		this.queryTypeData = props.queryTypeData
		switch (queryType) {
			case this.queryTypeData.all:
				name = 'classNameAll';
				break;
			case this.queryTypeData.complete:
				name = 'classNameComplete';
				break;
			case this.queryTypeData.undone:
				name = 'classNameUndone';
				break;
			default:
				name = 'classNameAll';
				break;
		}
		var updateState = this.getDefaultState();
		updateState[name] += ' on';
		updateState.totalCount = props.totalCount;
		updateState.completedCount = props.completedCount;
		updateState.undoneCount = props.undoneCount;
		this.setState(updateState);
	}
});

module.exports = TodoFootbarCountView;