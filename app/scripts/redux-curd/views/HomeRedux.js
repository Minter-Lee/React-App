import { combineReducers }  from 'redux';

import tableRedux from '../components/Home/TableRedux';
import modalRedux from '../components/Home/ModalRedux';

// 所有reducer集合
export default combineReducers({
    table: tableRedux,
    modal: modalRedux
})

// 相关actions
export * as tableActions from '../components/Home/TableRedux';
export * as modalActions from '../components/Home/ModalRedux';