/*
 * Title: 底部工具栏
 * Author: MinterLee@hotmail.com
 * CreateDate: 2017-09-20
 * Description: ...
 */

import PropTypes from 'prop-types';
import styles from './TodoFootbarFilter.css';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import { ALL, ACTIVE, COMPLETED } from '../Constants';

// @CSSModules(styles, {allowMultiple : true})
// export default class TodoFootbarFilterView extends Component {
//     constructor(props, context) {
//         super(props, context);
//         this.handleClick = this.handleClick.bind(this);
//     }
//     static propTypes = {
//         changeFilterType: PropTypes.func.isRequired,
//         filterType: PropTypes.string.isRequired
//     }

//     render(){
//         const {filterType} = this.props;
//         const allClassName = classNames('filterBtnLi','all',{
//             'filterBtnOn': filterType === ALL}),
//         activeClassName = classNames('filterBtnLi','active',{
//             'filterBtnOn': filterType === ACTIVE}),
//         completedClassName = classNames('filterBtnLi','completed',{
//             'filterBtnOn': filterType === COMPLETED});
//         return <ul styleName = 'filterBtn'>
//             <li styleName={allClassName} onClick={this.handleClick} data-filterType={ALL} >All</li>
//             <li styleName={activeClassName} onClick={this.handleClick} data-filterType={ACTIVE} >Active</li>
//             <li styleName={completedClassName} onClick={this.handleClick} data-filterType={COMPLETED} >Completed</li>
//         </ul>
//     }

//     handleClick(e) {
//         const filterType = e.target.getAttribute('data-filterType');
//         this.props.changeFilterType(filterType);
//     }
// }

const TodoFootbarFilterView  = (props) => {
    const handleClick = (e) =>{
        const filterType = e.target.getAttribute('data-filterType');
        props.changeFilterType(filterType);
    }
    const {filterType} = props;
    const allClassName = classNames('filterBtnLi','all',{
        'filterBtnOn': filterType === ALL}),
    activeClassName = classNames('filterBtnLi','active',{
        'filterBtnOn': filterType === ACTIVE}),
    completedClassName = classNames('filterBtnLi','completed',{
        'filterBtnOn': filterType === COMPLETED});

    return <ul styleName = 'filterBtn'>
        <li styleName={allClassName} onClick={handleClick} data-filterType={ALL} >All</li>
        <li styleName={activeClassName} onClick={handleClick} data-filterType={ACTIVE} >Active</li>
        <li styleName={completedClassName} onClick={handleClick} data-filterType={COMPLETED} >Completed</li>
    </ul>
}

TodoFootbarFilterView.propTypes = {
    changeFilterType: PropTypes.func.isRequired,
    filterType: PropTypes.string.isRequired
}

export default CSSModules(TodoFootbarFilterView, styles, {allowMultiple: true});