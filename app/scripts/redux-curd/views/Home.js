import { bindActionCreators } from 'redux';
import {Component} from 'react';
import { connect } from 'react-redux';
import ArticleTable from '../components/Home/Table';
import ArticleModal from '../components/Home/Modal';
import { tableActions, modalActions } from './HomeRedux';
import './Home.css';

@connect(state =>({
    table: state.articles.table,
    modal: state.articles.modal
}),dispatch => ({
    tableActions: bindActionCreators(tableActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
}))
export default class ArticleCURD extends Component {
    render(){
        return <div className='page'>
            <button onClick={this.props.modalActions.showModal}>新增</button>
            <ArticleTable {...this.props.table} {...this.props.tableActions}/>
            <ArticleModal {...this.props.modal} {...this.props.modalActions}/>
        </div>
    }
}

// const Home =  (props) => {
//     console.info(props);
//     return (
//         <div>
//             <h1>Home</h1>
//             <PreviewList {...props.list } {...props.listActions} 
//                 history = {props.history}
//             ></PreviewList>
//         </div>
//     )
// }

// export default connect (state => ({
//     list:state.home.list
// }), dispatch => {
//     return {
//         listActions: bindActionCreators(listActions, dispatch)
//         // push : bindActionCreators(push,dispatch)
//     }
// })(Home)