import { combineReducers } from 'redux';
import {currentNews,currentNewsData,newsList,techNewsList,popularNewsList,teslaNewsList,searchNewsList} from './reducer'
const rootReducer = combineReducers({
    currentNews,
    currentNewsData,
    newsList,
    techNewsList,
    popularNewsList,
    teslaNewsList,
    searchNewsList
});

export default rootReducer;