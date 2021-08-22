import React from 'react'

import { Redirect, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchNewsList } from '../actions/actions';
import { fetchTechNewsList } from '../actions/actions';
import { fetchPopularNewsList } from '../actions/actions';
import { fetchTeslaNewsList } from '../actions/actions';
import { fetchSearchNewsList } from '../actions/actions';


import Loader from "react-loader-spinner";
import TopHeader from './TopHeader'
import Header from './Header'
import Navbar from './Navbar'
import TopNews from './TopNews'
import TrendingNews from './TrendingNews'
import PopularNews from './PopularNews'
import NewsSection from './NewsSection'
import SearchedNews from './SearchedNews'
import Footer from './Footer'
import BottomFooter from './BottomFooter'

function Home(props) {

    const { newsList, techNewsList, popularNewsList, teslaNewsList, searchNewsList } = props;
    const history = useHistory();
    const token = localStorage.getItem("token")
    const [navitem, setNavitem] = useState({ teslaNews: '', techNews: '', popNews: '', home: 'active' })

    const [lstat, setLstat] = useState(false)
    useEffect(() => {
        getNewsList()
    }, []);

    const getNewsList = () => {
        const { dispatch } = props;
        dispatch(fetchNewsList());
        dispatch(fetchTechNewsList());
        dispatch(fetchPopularNewsList());
        dispatch(fetchTeslaNewsList());

    }

    const getSearchResult = (searchKey) => {
        const { dispatch } = props
        console.log(searchKey)
        if (searchKey.length > 0) {
            dispatch(fetchSearchNewsList(searchKey));
            dispatch(fetchPopularNewsList());
            setLstat(true)
        } else {
            setLstat(false)
        }

    }

    return (
        <React.Fragment>
            <TopHeader />
            <Header sfun={getSearchResult} />
            <Navbar navd={navitem} />
            {!lstat &&
                <div style={{ minHeight: '600px' }}>


                    {
                        newsList.isFetching &&
                        techNewsList.isFetching &&
                        popularNewsList.isFetching &&
                        teslaNewsList.isFetching &&
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Loader type="ThreeDots" color="#00BFFF" height={80} width={120} />
                        </div>
                    }

                    {
                        !newsList.isFetching &&
                        newsList.isError == false &&
                        newsList.allNews.data &&
                        <TopNews newfun={props.dispatch} newslength={5} mydata={newsList.allNews} />
                    }
                    {
                        !techNewsList.isFetching &&
                        techNewsList.isError == false &&
                        techNewsList.techNews.data &&

                        <TrendingNews newfun={props.dispatch} latestTech={techNewsList.techNews} />
                    }

                    {
                        !popularNewsList.isFetching &&
                        popularNewsList.isError == false &&
                        popularNewsList.popularNews.data &&

                        <PopularNews newfun={props.dispatch} popularNews={popularNewsList.popularNews} />
                    }

                    {
                        !popularNewsList.isFetching &&
                        popularNewsList.isError == false &&
                        popularNewsList.popularNews.data &&
                        !teslaNewsList.isFetching &&
                        teslaNewsList.isError == false &&
                        teslaNewsList.teslaNews.data &&

                        <NewsSection teslanewsFlag={true} newfun={props.dispatch} popularNews={popularNewsList.popularNews} teslaNews={teslaNewsList.teslaNews} />
                    }

                </div>
            }

            {

                lstat === true &&

                <div style={{ minHeight: '600px' }}>

                    {
                        searchNewsList.isFetching &&
                        popularNewsList.isFetching &&
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Loader type="ThreeDots" color="#00BFFF" height={80} width={120} />
                        </div>
                    }
                    {
                        !searchNewsList.isFetching &&
                        searchNewsList.isError == false &&
                        searchNewsList.searchNews.data &&
                        !popularNewsList.isFetching &&
                        popularNewsList.isError == false &&
                        popularNewsList.popularNews.data &&
                        <SearchedNews newfun={props.dispatch} popularNews={popularNewsList.popularNews} searchNews={searchNewsList.searchNews} />

                    }

                </div>
            }


            {
                !techNewsList.isFetching &&
                techNewsList.isError == false &&
                techNewsList.techNews.data &&

                <Footer newfun={props.dispatch} latestTech={techNewsList.techNews} />
            }
            <BottomFooter />
        </React.Fragment>
    )
}

function mapStateToProps(state) {
    const { newsList, techNewsList, popularNewsList, teslaNewsList, searchNewsList } = state;
    return {
        newsList,
        techNewsList,
        popularNewsList,
        teslaNewsList,
        searchNewsList
    };
}

export default connect(mapStateToProps)(Home)
