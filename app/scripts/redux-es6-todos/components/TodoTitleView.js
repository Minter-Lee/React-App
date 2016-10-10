/*
 * Title: TitleView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-10-09
 * Description: ...
 */
import React, { PropTypes, Component } from 'react'

export default class TodoTitleView extends Component {
	// 类型验证 title 字符串 必填
	static propTypes = {
		title: PropTypes.string.isRequired
	}

	render() {
		const { title } = this.props;
		console.info('title',title);
		return <h1 className='title'>{title}</h1>;
	}

}
