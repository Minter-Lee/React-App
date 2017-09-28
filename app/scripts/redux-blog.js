import ReactDom from 'react-dom';
import routes from './redux-blog/routes/index';
import {syncHistoryWithStore} from 'react-router-redux';
// import createHistory from 'history/createHashHistory';
// import createHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux';
import configureStore, { history} from './redux-blog/redux/configureStore';
import DevTools from './redux-blog/redux/DevTools';

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