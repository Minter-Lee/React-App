/*
 * Title: 底部工具栏
 * Author: MinterLee@hotmail.com
 * CreateDate: 2017-09-20
 * Description: ...
 */

import PropTypes from 'prop-types';
import TodoFootbarCountView from './TodoFootbarCountView';
import TodoFootbarFilterView from './TodoFootbarFilterView';
import TodoFootbarClearBtn from './TodoFootbarClearBtn';
import styles from './TodoFootbar.css';

// export default class TodoFootbarView extends Component {
//     constructor(props, context) {
//         super(props, context);
//     }
//     static propTypes = {
//         completedCount: PropTypes.number.isRequired,
//         changeFilterType: PropTypes.func.isRequired,
//         filterType: PropTypes.string.isRequired
//     }

//     render(){
//         const { completedCount, filterType, changeFilterType, clearCompletedTodos } = this.props;
//         return <div className={styles.footbar}>
//             <TodoFootbarCountView 
//                 completedCount = {completedCount}/>
//             <TodoFootbarFilterView 
//                 filterType = {filterType} 
//                 changeFilterType = { changeFilterType }/>
//             <TodoFootbarClearBtn 
//                 clearCompletedTodos = {clearCompletedTodos}
//                 completedCount = {completedCount}/>
//         </div>
//     }
// }

const TodoFootbarView = (props) => {
    const { completedCount, filterType, changeFilterType, clearCompletedTodos } = props;
    return <div className={styles.footbar}>
        <TodoFootbarCountView 
            completedCount = {completedCount}/>
        <TodoFootbarFilterView 
            filterType = {filterType} 
            changeFilterType = { changeFilterType }/>
        <TodoFootbarClearBtn 
            clearCompletedTodos = {clearCompletedTodos}
            completedCount = {completedCount}/>
    </div>
}

TodoFootbarView.propTypes = {
    completedCount: PropTypes.number.isRequired,
    changeFilterType: PropTypes.func.isRequired,
    filterType: PropTypes.string.isRequired,
    clearCompletedTodos: PropTypes.func.isRequired
}

export default TodoFootbarView;