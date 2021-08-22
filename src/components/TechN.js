import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { fetchTechNewsList } from '../actions/actions';
import { fetchPopularNewsList } from '../actions/actions';
import { fetchTeslaNewsList } from '../actions/actions';


import TopHeader from './TopHeader'
import Header from './Header'
import Navbar from './Navbar'
import TrendingNews from './TrendingNews'
import PopularNews from './PopularNews'
import NewsCategorySorted from './NewsCategorySorted'
import Footer from './Footer'
import BottomFooter from './BottomFooter'
import Loader from "react-loader-spinner";

function TechN(props) {

    const { techNewsList, popularNewsList, teslaNewsList } = props;
    const history = useHistory();
    const token = localStorage.getItem("token")
    const [navitem, setNavitem] = useState({ teslaNews: '', techNews: 'active', popNews: '', home: '' })

    useEffect(() => {
        getNewsList()
    }, []);

    const getNewsList = () => {
        const { dispatch } = props;
        dispatch(fetchTechNewsList());
        dispatch(fetchPopularNewsList());
        dispatch(fetchTeslaNewsList());
    }

    return (
        <React.Fragment>
            <TopHeader />
            <Header sfun={false} />
            <Navbar navd={navitem} />
            <div style={{ minHeight: '600px' }}>
                {
                    techNewsList.isFetching &&
                    popularNewsList.isFetching &&
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Loader type="ThreeDots" color="#00BFFF" height={80} width={120} />
                    </div>
                }


                {
                    !techNewsList.isFetching &&
                    techNewsList.isError == false &&
                    techNewsList.techNews.data &&
                    !popularNewsList.isFetching &&
                    popularNewsList.isError == false &&
                    popularNewsList.popularNews.data &&
                    <NewsCategorySorted technewsFlag={true} newfun={props.dispatch} latestTech={techNewsList.techNews} mpopularNews={popularNewsList.popularNews} />
                }
            </div>
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
    const { techNewsList, popularNewsList, teslaNewsList } = state;
    return {
        techNewsList,
        popularNewsList,
        teslaNewsList
    };
}

export default connect(mapStateToProps)(TechN)
