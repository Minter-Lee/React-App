import { bindRedux } from 'redux-form-utils';

// 根据配置项分配重命名form的state和reducer
const { state: formState, reducer: formReducer } = bindRedux({
    form: 'article',
    fields: ['title','desc','date']
});


const initialState = {
  visible: false,
  ...formState,
};

// actions
export function addArticle(){
    return (dispatch,getState) => {
        const { title,desc, date} = getState().articles.modal.form;
        return dispatch({
            url: 'scripts/redux-curd/api/articles2.json',
            method: 'POST',
            params: {
                title: title.value,
                desc: desc.value,
                date: date.value
            }
        })
    }
}


export function showModal() {
  return {
    type: 'SHOW_MODAL'
  };
}

export function hideModal() {
  return {
    type: 'HIDE_MODAL'
  };
}

//reducers
export default function modal(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_MODAL': {
      return {
        ...state,
        visible: true,
      };
    }

    case 'HIDE_MODAL': {
      return {
        ...state,
        visible: false,
      };
    }

    // 混用reducer
    default:
      return formReducer(state, action);
  }
}
