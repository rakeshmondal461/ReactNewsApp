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
import PopularNews from './PopularNews'
import NewsCategorySorted from './NewsCategorySorted'
import Footer from './Footer'
import BottomFooter from './BottomFooter'
import Loader from "react-loader-spinner";

function TeslaN(props) {

	const { techNewsList, popularNewsList, teslaNewsList } = props;
	const history = useHistory();
	const token = localStorage.getItem("token")
	const [navitem, setNavitem] = useState({ teslaNews: 'active', techNews: '', popNews: '', home: '' })

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
					popularNewsList.isFetching &&
					teslaNewsList.isFetching &&
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Loader type="ThreeDots" color="#00BFFF" height={80} width={120} />
					</div>
				}


				{
					!teslaNewsList.isFetching &&
					teslaNewsList.isError == false &&
					teslaNewsList.teslaNews.data &&
					!popularNewsList.isFetching &&
					popularNewsList.isError == false &&
					popularNewsList.popularNews.data &&
					<NewsCategorySorted teslanewsFlag={true} newfun={props.dispatch} teslaNews={teslaNewsList.teslaNews} mpopularNews={popularNewsList.popularNews} />
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

export default connect(mapStateToProps)(TeslaN)
