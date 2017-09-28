const initialState = {
    loading: true,
    error: false,
    articleList: []
}

// constants
const LOAD_ARTICLES = 'LOAD_ARTICLES';
const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR';

// actions
export function loadArticles(query) {
    let url = 'scripts/redux-curd/api/articles.json';
    if(query) {
        url = 'scripts/redux-curd/api/articles2.json';
    }
    return {
        types: [LOAD_ARTICLES,LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
        url: url
    }
}

export function changeQuery(e) {
    return {
        type: 'CHANGE_QUERY',
        payload: {
            query: e.target.value.trim()
        }
    }
}

export function search () {
    return (dispatch, getState) => {
        const { query } = getState().articles.table;
        return dispatch(loadArticles(query));
    }
}

// reducers
function articles ( state = initialState, action) {
    switch (action.type) {
        case LOAD_ARTICLES: { 
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case LOAD_ARTICLES_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                articleList: action.payload
            };
        }

        case LOAD_ARTICLES_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }

        case 'CHANGE_QUERY': {
            return {
                ...state,
                query: action.payload.query
            }
        }

        default: 
            return state
    }
}

export default articles;