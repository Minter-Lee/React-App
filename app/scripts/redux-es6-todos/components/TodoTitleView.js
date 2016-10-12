/*
 * Title: TitleView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: ...
 */
import React, { PropTypes, Component } from 'react'

export default class TodoTitleView extends Component {

	constructor(props, context) {
		super(props, context);
	}

	// 类型验证 title 字符串 必填
	static propTypes = {
		title: PropTypes.string.isRequired
	}

	// 拦截没必要的render 对比过程 提高效能
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.title === this.props.title) {
			console.log("TodoTitleView-拦截")
			return false;
		}
		return true;
	}

	render() {
		console.info('TodoTitleView-render');
		const { title } = this.props;
		return <h1 className='title'>{title}</h1>;
	}

}
