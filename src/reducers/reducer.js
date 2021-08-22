import {
    SELECT_NEWS,
    REQUEST_NEWSDET,
    RECEIVE_NEWSDET,
    RECEIVE_NEWSDET_ERROR,
    REQUEST_NEWSLIST,
    RECEIVE_NEWSLIST,
    RECEIVE_NEWSLIST_ERROR,
    REQUEST_LATEST_TECH_NEWSLIST,
    RECEIVE_LATEST_TECH_NEWSLIST,
    RECEIVE_LATEST_TECH_NEWSLIST_ERROR,
    REQUEST_POPULAR_NEWSLIST,
    RECEIVE_POPULAR_NEWSLIST,
    RECEIVE_POPULAR_NEWSLIST_ERROR,
    REQUEST_TESLA_NEWSLIST,
    RECEIVE_TESLA_NEWSLIST,
    RECEIVE_TESLA_NEWSLIST_ERROR,
    REQUEST_SEARCH_NEWSLIST,
    RECEIVE_SEARCH_NEWSLIST,
    RECEIVE_SEARCH_NEWSLIST_ERROR
} from '../constants/ActionTypes';


export function currentNews(state = '', action) {
    switch (action.type) {
        case SELECT_NEWS:
            return {
                newsid:action.newsid,
                newsType:action.newsType
            };
        default:
            return state;
    }
}

export function currentNewsData(
    state = {
        isFetching: false,
        newsData: {},
    },
    action
) {
    switch (action.type) {
        case REQUEST_NEWSDET:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_NEWSDET:
            return Object.assign({}, state, {
                isFetching: false,
                newsData: action.userData,
                isError:false
            });
        case RECEIVE_NEWSDET_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                newsData: action.error,
                isError:true
            });
        default:
            return state;
    }
}

export function newsList(
    state = {
        isFetching: false,
        allNews: [],
    },
    action
) {
    switch (action.type) {
        case REQUEST_NEWSLIST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_NEWSLIST:
            return Object.assign({}, state, {
                isFetching: false,
                allNews: action.users,
                isError:false
            });
        case RECEIVE_NEWSLIST_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                allNews: action.error,
                isError:true
            });
        default:
            return state;
    }
}


export function techNewsList(
    state = {
        isFetching: false,
        techNews: [],
    },
    action
) {
    switch (action.type) {
        case REQUEST_LATEST_TECH_NEWSLIST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_LATEST_TECH_NEWSLIST:
            return Object.assign({}, state, {
                isFetching: false,
                techNews: action.users,
                isError:false
            });
        case RECEIVE_LATEST_TECH_NEWSLIST_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                techNews: action.error,
                isError:true
            });
        default:
            return state;
    }
}


export function popularNewsList(
    state = {
        isFetching: false,
        popularNews: [],
    },
    action
) {
    switch (action.type) {
        case REQUEST_POPULAR_NEWSLIST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_POPULAR_NEWSLIST:
            return Object.assign({}, state, {
                isFetching: false,
                popularNews: action.users,
                isError:false
            });
        case RECEIVE_POPULAR_NEWSLIST_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                popularNews: action.error,
                isError:true
            });
        default:
            return state;
    }
}


export function teslaNewsList(
    state = {
        isFetching: false,
        teslaNews: [],
    },
    action
) {
    switch (action.type) {
        case REQUEST_TESLA_NEWSLIST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_TESLA_NEWSLIST:
            return Object.assign({}, state, {
                isFetching: false,
                teslaNews: action.users,
                isError:false
            });
        case RECEIVE_TESLA_NEWSLIST_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                teslaNews: action.error,
                isError:true
            });
        default:
            return state;
    }
}


export function searchNewsList(
    state = {
        isFetching: false,
        searchNews: [],
    },
    action
) {
    switch (action.type) {
        case REQUEST_SEARCH_NEWSLIST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_SEARCH_NEWSLIST:
            return Object.assign({}, state, {
                isFetching: false,
                searchNews: action.users,
                isError:false
            });
        case RECEIVE_SEARCH_NEWSLIST_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                searchNews: action.error,
                isError:true
            });
        default:
            return state;
    }
}