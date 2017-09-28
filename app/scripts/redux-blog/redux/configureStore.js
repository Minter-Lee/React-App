import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import DevTools from './DevTools';

// 柯里化后可以延迟执行，从而实现异步请求
import TunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import createFetchMiddleware from 'redux-composable-fetch';
import { routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
// import createHistory from 'history/createBrowserHistory';

// 向中间件中追加处理json的内容，否则payload内容未转换
const FetchMiddleware = createFetchMiddleware({
    afterFetch({action, result}) {
        return result.json().then(data =>{
            return Promise.resolve({
                action,
                result:data
            })
        })
    }
});

const history = createHistory();

const finalCreateStore = compose (
    applyMiddleware(
        TunkMiddleware,
        FetchMiddleware,
        routerMiddleware(history)
    ),
    //必须的！启用带有monitors（监视显示）的DevTools
    DevTools.instrument()
)(createStore);

const reducer = combineReducers(Object.assign({}, rootReducer,{
    routing: routerReducer
}));

export {history}

export default function configureStore(initialState) {
    const store = finalCreateStore(reducer, initialState);
    return store;
}

