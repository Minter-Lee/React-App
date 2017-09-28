
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import { listActions } from './HomeRedux';
// import { push } from 'react-router-redux';

const Home =  (props) => {
    console.info(props);
    return (
        <div>
            <h1>Home</h1>
            <PreviewList {...props.list } {...props.listActions} 
                history = {props.history}
            ></PreviewList>
        </div>
    )
}

export default connect (state => ({
    list:state.home.list
}), dispatch => {
    return {
        listActions: bindActionCreators(listActions, dispatch)
        // push : bindActionCreators(push,dispatch)
    }
})(Home)