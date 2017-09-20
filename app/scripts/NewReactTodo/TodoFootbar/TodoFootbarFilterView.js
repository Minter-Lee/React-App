/*
 * Title: 底部工具栏
 * Author: MinterLee@hotmail.com
 * CreateDate: 2017-09-20
 * Description: ...
 */

import { Component, PropTypes } from 'react';
import styles from './TodoFootbarFilter.css';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';

@CSSModules(styles, {allowMultiple : true})
export default class TodoFootbarFilterView extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }
    static propTypes = {
        changeFilterType: PropTypes.func.isRequired,
        filterType: PropTypes.string.isRequired
    }

    render(){
        const {filterType} = this.props;
        const allClassName = classNames('filterBtnLi','all',{'filterBtnOn': filterType === 'ALL'});
        const activeClassName = classNames('filterBtnLi','active',{'filterBtnOn': filterType === 'ACTIVE'});
        const completedClassName = classNames('filterBtnLi','completed',{'filterBtnOn': filterType === 'COMPLETED'});
        return <ul styleName = 'filterBtn'>
            <li styleName={allClassName} onClick={this.handleClick} data-filterType='ALL' >All</li>
            <li styleName={activeClassName} onClick={this.handleClick} data-filterType='ACTIVE' >Active</li>
            <li styleName={completedClassName} onClick={this.handleClick} data-filterType='COMPLETED' >Completed</li>
        </ul>
    }

    handleClick(e) {
        const filterType = e.target.getAttribute('data-filterType');
        this.props.changeFilterType(filterType);
    }
}