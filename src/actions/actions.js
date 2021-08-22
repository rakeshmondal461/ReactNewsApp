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


import {NEWS_API_KEY} from '../constants/APIKey'
import {CURRENT_DATE} from '../constants/UserData'

import axios from 'axios'

export function selectNews(newsid,newsType) {
    return {
        type: SELECT_NEWS,
        newsid,
        newsType
    };
}

export function requestNewsDetails() {
    return {
        type: REQUEST_NEWSDET,
    };
}

function receiveNewsDetails(json) {
    return {
        type: RECEIVE_NEWSDET,
        userData: json,
    };
}

function receiveNewsDetailsErr(error) {
    return {
        type: RECEIVE_NEWSDET_ERROR,
        error,
    };
}

function requestNewsList() {
    return {
        type: REQUEST_NEWSLIST,
    };
}

function receiveNewsList(json) {
    return {
        type: RECEIVE_NEWSLIST,
        users: json,
    };
}

function receiveNewsListErr(error) {
    return {
        type: RECEIVE_NEWSLIST_ERROR,
        error,
    };
}


function requestTechNewsList() {
    return {
        type: REQUEST_LATEST_TECH_NEWSLIST,
    };
}

function receiveTechNewsList(json) {
    return {
        type: RECEIVE_LATEST_TECH_NEWSLIST,
        users: json,
    };
}

function receiveTechNewsListErr(error) {
    return {
        type: RECEIVE_LATEST_TECH_NEWSLIST_ERROR,
        error,
    };
}



function requestPopularNewsList() {
    return {
        type: REQUEST_POPULAR_NEWSLIST,
    };
}

function receivePopularNewsList(json) {
    return {
        type: RECEIVE_POPULAR_NEWSLIST,
        users: json,
    };
}

function receivePopularNewsListErr(error) {
    return {
        type: RECEIVE_POPULAR_NEWSLIST_ERROR,
        error,
    };
}



function requestTeslaNewsList() {
    return {
        type: REQUEST_TESLA_NEWSLIST,
    };
}

function receiveTeslaNewsList(json) {
    return {
        type: RECEIVE_TESLA_NEWSLIST,
        users: json,
    };
}

function receiveTeslaNewsListErr(error) {
    return {
        type: RECEIVE_TESLA_NEWSLIST_ERROR,
        error,
    };
}



function requestSearchNewsList() {
    return {
        type: REQUEST_SEARCH_NEWSLIST,
    };
}

function receiveSearchNewsList(json) {
    return {
        type: RECEIVE_SEARCH_NEWSLIST,
        users: json,
    };
}

function receiveSearchNewsListErr(error) {
    return {
        type: RECEIVE_SEARCH_NEWSLIST_ERROR,
        error,
    };
}

export function fetchNewsList() {
    return dispatch => {
        dispatch(requestNewsList());
        return axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`)
            .then(json => dispatch(receiveNewsList(json)))
            .catch(err => dispatch(receiveNewsListErr(err)));
    };
}

export function fetchTechNewsList() {
    return dispatch => {
        dispatch(requestTechNewsList());
        return axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${NEWS_API_KEY}`)
            .then(json => dispatch(receiveTechNewsList(json)))
            .catch(err => dispatch(receiveTechNewsListErr(err)));
    };
}

export function fetchPopularNewsList() {
    return dispatch => {
        dispatch(requestPopularNewsList());
        return axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${NEWS_API_KEY}`)
            .then(json => dispatch(receivePopularNewsList(json)))
            .catch(err => dispatch(receivePopularNewsListErr(err)));
    };
}

export function fetchTeslaNewsList() {
    return dispatch => {
        dispatch(requestTeslaNewsList());
        return axios.get(`https://newsapi.org/v2/everything?q=tesla&from=${CURRENT_DATE}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`)
            .then(json => dispatch(receiveTeslaNewsList(json)))
            .catch(err => dispatch(receiveTeslaNewsListErr(err)));
    };
}

export function fetchSearchNewsList(searchKey) {
    return dispatch => {
        dispatch(requestSearchNewsList());
        return axios.get(`https://newsapi.org/v2/everything?q=${searchKey}&from=${CURRENT_DATE}&sortBy=popularity&apiKey=${NEWS_API_KEY}`)
            .then(json => dispatch(receiveSearchNewsList(json)))
            .catch(err => dispatch(receiveSearchNewsListErr(err)));
    };
}

