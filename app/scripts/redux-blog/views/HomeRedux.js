import { combineReducers }  from 'redux';

import list from '../components/Home/PreviewListRedux';

// 所有reducer集合
export default combineReducers({
    list: list
})

// 相关actions
export * as listActions from '../components/Home/PreviewListRedux';