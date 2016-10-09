/*
 * Title: action 注册
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: ...
 */
import React, {Component, PorpTypes} from 'react'

export default class TodoTitleView extends Component {
	// 类型验证 title 字符串 必填
	static propTypes = {
		title: PropTypes.string.isRequired
	}

	render() {
		const { title } = this.props;
		console.info('title',title);
		return <h1 className='title'>{this.props.title}</h1>;
	}

}
