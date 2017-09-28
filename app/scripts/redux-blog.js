import ReactDom from 'react-dom';
import routes from './redux-curd/routes/index';
import {syncHistoryWithStore} from 'react-router-redux';
// import createHistory from 'history/createHashHistory';
// import createHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux';
import configureStore, { history} from './redux-curd/redux/configureStore';
import DevTools from './redux-curd/redux/DevTools';

const store = configureStore();
const hashHistory = syncHistoryWithStore(history, store);

ReactDom.render((
    <Provider store={store}>
        <div>
            {routes(hashHistory)}
            <DevTools />
        </div>
    </Provider>
), document.getElementById('container'));