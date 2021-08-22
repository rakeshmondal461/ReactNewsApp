import React from 'react'

import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';

import {
	EmailShareButton,
	FacebookMessengerShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton
} from "react-share";

import {
	EmailIcon,
	FacebookIcon,
	FacebookMessengerIcon,
	LinkedinIcon,
	TelegramIcon,
	TwitterIcon,
	WhatsappIcon,
} from "react-share";

import { fetchNewsList, fetchTechNewsList, fetchPopularNewsList, fetchTeslaNewsList } from '../actions/actions'
import { selectNews } from '../actions/actions';

import TopHeader from './TopHeader'
import Header from './Header'
import Navbar from './Navbar'

import Footer from './Footer'
import BottomFooter from './BottomFooter'

function NewsDetails(props) {
	const { currentNews } = props
	const newsid = currentNews.newsid
	const newsType = currentNews.newsType
	const { dispatch } = props;
	const history = useHistory();
	const [navitem, setNavitem] = useState({ teslaNews: '', techNews: '', popNews: '', home: 'active' })
	const movetodetails = (newsid, newstype) => {
		dispatch(selectNews(newsid, newstype))
		history.push("/newsdet");

	}

	const getNewsList = () => {
		const { dispatch } = props;
		dispatch(fetchNewsList());
		dispatch(fetchTechNewsList());
		dispatch(fetchPopularNewsList());
		dispatch(fetchTeslaNewsList());

	}

	if (currentNews === "") {
		history.push("/");
	}


	const { newsList, techNewsList, popularNewsList, teslaNewsList } = props;
	useEffect(() => {
		getNewsList()

	}, [])
	return (
		<React.Fragment>
			<TopHeader />
			<Header sfun={false} />
			<Navbar navd={navitem} />

			<div>
				<div id="fh5co-title-box" style={{
					backgroundImage: `url("https://via.placeholder.com/500")`, backgroundPosition: '50% 90.5px'
				}} data-stellar-background-ratio="0.5" >

					<div className="page-title">
						<img src="images/person_1.jpg" alt="Free HTML5 by FreeHTMl5.co" />
						<span>January 1, 2018</span>
						<h2>How to write interesting articles</h2>
					</div>
				</div>
				<div id="fh5co-single-content" className="container-fluid pb-4 pt-4 paddding">
					<div className="container paddding">
						<div className="row mx-0">
							<div className="col-md-8 animate-box" data-animate-effect="fadeInLeft">

								{
									newsType === 'techNews' &&
									!techNewsList.isFetching &&
									techNewsList.isError == false &&
									techNewsList.techNews.data &&

									<div>
										<div className="sn-img">
											<img style={{ width: '80%' }} src={techNewsList.techNews.data.articles[newsid].urlToImage ? techNewsList.techNews.data.articles[newsid].urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaailSXpzp_AbojwMyII4FSxu2KE4JyC7wPMlx5nFQ4MUEBUBa3rIO2lSMnBv1fTh0M4&usqp=CAU'} />
										</div>
										<div>
											<p><h3>{techNewsList.techNews.data.articles[newsid].title}</h3></p>
											<p><i className="fa fa-clock-o" aria-hidden="true"></i> <b> {(techNewsList.techNews.data.articles[newsid].publishedAt).split("T")[0]} </b></p>
											<p>
												{techNewsList.techNews.data.articles[newsid].description}
											</p>

											<p>
												{techNewsList.techNews.data.articles[newsid].content}
											</p>
										</div>
										<div>
										<p style={{fontSize:'16px',fontWeight:'bold'}}>Share with :</p>
											<FacebookShareButton
												url={techNewsList.techNews.data.articles[newsid].url}
												quote={techNewsList.techNews.data.articles[newsid].title}>
												<FacebookIcon size={32} />
											</FacebookShareButton>
											&nbsp;
											<FacebookMessengerShareButton
												url={techNewsList.techNews.data.articles[newsid].url}
												quote={techNewsList.techNews.data.articles[newsid].title}>
												<FacebookMessengerIcon size={32} />
											</FacebookMessengerShareButton>
											&nbsp;
											<WhatsappShareButton
												url={techNewsList.techNews.data.articles[newsid].url}
												quote={techNewsList.techNews.data.articles[newsid].title}>
												<WhatsappIcon size={32} />
											</WhatsappShareButton>
											&nbsp;
											<TwitterShareButton
												url={techNewsList.techNews.data.articles[newsid].url}
												quote={techNewsList.techNews.data.articles[newsid].title}>
												<TwitterIcon size={32} />
											</TwitterShareButton>
											&nbsp;
											<LinkedinShareButton
												url={techNewsList.techNews.data.articles[newsid].url}
												quote={techNewsList.techNews.data.articles[newsid].title}>
												<LinkedinIcon size={32} />
											</LinkedinShareButton>
											&nbsp;
											<EmailShareButton
												url={techNewsList.techNews.data.articles[newsid].url}
												quote={techNewsList.techNews.data.articles[newsid].title}>
												<EmailIcon size={32} />
											</EmailShareButton>
											&nbsp;
											<TelegramShareButton
												url={techNewsList.techNews.data.articles[newsid].url}
												quote={techNewsList.techNews.data.articles[newsid].title}>
												<TelegramIcon size={32} />
											</TelegramShareButton>

											

										</div>
									</div>
								}

								{
									newsType === 'popularNews' &&
									!popularNewsList.isFetching &&
									popularNewsList.isError == false &&
									popularNewsList.popularNews.data &&

									<div>
										<div className="sn-img">
											<img style={{ width: '50%' }} src={popularNewsList.popularNews.data.articles[newsid].urlToImage ? popularNewsList.popularNews.data.articles[newsid].urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaailSXpzp_AbojwMyII4FSxu2KE4JyC7wPMlx5nFQ4MUEBUBa3rIO2lSMnBv1fTh0M4&usqp=CAU'} />
										</div>
										<div>
											<p><h3>{popularNewsList.popularNews.data.articles[newsid].title}</h3></p>
											<p><i className="fa fa-clock-o" aria-hidden="true"></i>{(popularNewsList.popularNews.data.articles[newsid].publishedAt).split("T")[0]} </p>
											<p>
												{popularNewsList.popularNews.data.articles[newsid].description}
											</p>

											<p>
												{popularNewsList.popularNews.data.articles[newsid].content}
											</p>
										</div>
										<div>
										<p style={{fontSize:'16px',fontWeight:'bold'}}>Share with :</p>
											<FacebookShareButton
												url={popularNewsList.popularNews.data.articles[newsid].url}
												quote={popularNewsList.popularNews.data.articles[newsid].title}>
												<FacebookIcon size={32} />
											</FacebookShareButton>
											&nbsp;
											<FacebookMessengerShareButton
												url={popularNewsList.popularNews.data.articles[newsid].url}
												quote={popularNewsList.popularNews.data.articles[newsid].title}>
												<FacebookMessengerIcon size={32} />
											</FacebookMessengerShareButton>
											&nbsp;
											<WhatsappShareButton
												url={popularNewsList.popularNews.data.articles[newsid].url}
												quote={popularNewsList.popularNews.data.articles[newsid].title}>
												<WhatsappIcon size={32} />
											</WhatsappShareButton>
											&nbsp;
											<TwitterShareButton
												url={popularNewsList.popularNews.data.articles[newsid].url}
												quote={popularNewsList.popularNews.data.articles[newsid].title}>
												<TwitterIcon size={32} />
											</TwitterShareButton>
											&nbsp;
											<LinkedinShareButton
												url={popularNewsList.popularNews.data.articles[newsid].url}
												quote={popularNewsList.popularNews.data.articles[newsid].title}>
												<LinkedinIcon size={32} />
											</LinkedinShareButton>
											&nbsp;
											<EmailShareButton
												url={popularNewsList.popularNews.data.articles[newsid].url}
												quote={popularNewsList.popularNews.data.articles[newsid].title}>
												<EmailIcon size={32} />
											</EmailShareButton>
											&nbsp;
											<TelegramShareButton
												url={popularNewsList.popularNews.data.articles[newsid].url}
												quote={popularNewsList.popularNews.data.articles[newsid].title}>
												<TelegramIcon size={32} />
											</TelegramShareButton>

											

										</div>
									</div>
								}

								{
									newsType === 'topNews' &&
									!newsList.isFetching &&
									newsList.isError == false &&
									newsList.allNews.data &&
									<div>
										<div className="sn-img">
											<img style={{ width: '50%' }} src={newsList.allNews.data.articles[newsid].urlToImage ? newsList.allNews.data.articles[newsid].urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaailSXpzp_AbojwMyII4FSxu2KE4JyC7wPMlx5nFQ4MUEBUBa3rIO2lSMnBv1fTh0M4&usqp=CAU'} />
										</div>
										<div>
											<p><h3>{newsList.allNews.data.articles[newsid].title}</h3></p>
											<p><i className="fa fa-clock-o" aria-hidden="true"></i>{(newsList.allNews.data.articles[newsid].publishedAt).split("T")[0]} </p>
											<p>
												{newsList.allNews.data.articles[newsid].description}
											</p>

											<p>
												{newsList.allNews.data.articles[newsid].content}
											</p>
										</div>
										<div>
										<p style={{fontSize:'16px',fontWeight:'bold'}}>Share with :</p>
											<FacebookShareButton
												url={newsList.allNews.data.articles[newsid].url}
												quote={newsList.allNews.data.articles[newsid].title}>
												<FacebookIcon size={32} />
											</FacebookShareButton>
											&nbsp;
											<FacebookMessengerShareButton
												url={newsList.allNews.data.articles[newsid].url}
												quote={newsList.allNews.data.articles[newsid].title}>
												<FacebookMessengerIcon size={32} />
											</FacebookMessengerShareButton>
											&nbsp;
											<WhatsappShareButton
												url={newsList.allNews.data.articles[newsid].url}
												quote={newsList.allNews.data.articles[newsid].title}>
												<WhatsappIcon size={32} />
											</WhatsappShareButton>
											&nbsp;
											<TwitterShareButton
												url={newsList.allNews.data.articles[newsid].url}
												quote={newsList.allNews.data.articles[newsid].title}>
												<TwitterIcon size={32} />
											</TwitterShareButton>
											&nbsp;
											<LinkedinShareButton
												url={newsList.allNews.data.articles[newsid].url}
												quote={newsList.allNews.data.articles[newsid].title}>
												<LinkedinIcon size={32} />
											</LinkedinShareButton>
											&nbsp;
											<EmailShareButton
												url={newsList.allNews.data.articles[newsid].url}
												quote={newsList.allNews.data.articles[newsid].title}>
												<EmailIcon size={32} />
											</EmailShareButton>
											&nbsp;
											<TelegramShareButton
												url={newsList.allNews.data.articles[newsid].url}
												quote={newsList.allNews.data.articles[newsid].title}>
												<TelegramIcon size={32} />
											</TelegramShareButton>

											

										</div>
									</div>
								}


								{
									newsType === 'teslaNews' &&
									!teslaNewsList.isFetching &&
									teslaNewsList.isError == false &&
									teslaNewsList.teslaNews.data &&

									<div>
										<div className="sn-img">
											<img style={{ width: '50%' }} src={teslaNewsList.teslaNews.data.articles[newsid].urlToImage ? teslaNewsList.teslaNews.data.articles[newsid].urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaailSXpzp_AbojwMyII4FSxu2KE4JyC7wPMlx5nFQ4MUEBUBa3rIO2lSMnBv1fTh0M4&usqp=CAU'} />
										</div>
										<div>
											<p><h3>{teslaNewsList.teslaNews.data.articles[newsid].title}</h3></p>
											<p><i className="fa fa-clock-o" aria-hidden="true"></i>{(popularNewsList.popularNews.data.articles[newsid].publishedAt).split("T")[0]} </p>
											<p>
												{teslaNewsList.teslaNews.data.articles[newsid].description}
											</p>

											<p>
												{teslaNewsList.teslaNews.data.articles[newsid].content}
											</p>
										</div>
										<div>
										<p style={{fontSize:'16px',fontWeight:'bold'}}>Share with :</p>
											<FacebookShareButton
												url={teslaNewsList.teslaNews.data.articles[newsid].url}
												quote={teslaNewsList.teslaNews.data.articles[newsid].title}>
												<FacebookIcon size={32} />
											</FacebookShareButton>
											&nbsp;
											<FacebookMessengerShareButton
												url={teslaNewsList.teslaNews.data.articles[newsid].url}
												quote={teslaNewsList.teslaNews.data.articles[newsid].title}>
												<FacebookMessengerIcon size={32} />
											</FacebookMessengerShareButton>
											&nbsp;
											<WhatsappShareButton
												url={teslaNewsList.teslaNews.data.articles[newsid].url}
												quote={teslaNewsList.teslaNews.data.articles[newsid].title}>
												<WhatsappIcon size={32} />
											</WhatsappShareButton>
											&nbsp;
											<TwitterShareButton
												url={teslaNewsList.teslaNews.data.articles[newsid].url}
												quote={teslaNewsList.teslaNews.data.articles[newsid].title}>
												<TwitterIcon size={32} />
											</TwitterShareButton>
											&nbsp;
											<LinkedinShareButton
												url={teslaNewsList.teslaNews.data.articles[newsid].url}
												quote={teslaNewsList.teslaNews.data.articles[newsid].title}>
												<LinkedinIcon size={32} />
											</LinkedinShareButton>
											&nbsp;
											<EmailShareButton
												url={teslaNewsList.teslaNews.data.articles[newsid].url}
												quote={teslaNewsList.teslaNews.data.articles[newsid].title}>
												<EmailIcon size={32} />
											</EmailShareButton>
											&nbsp;
											<TelegramShareButton
												url={teslaNewsList.teslaNews.data.articles[newsid].url}
												quote={teslaNewsList.teslaNews.data.articles[newsid].title}>
												<TelegramIcon size={32} />
											</TelegramShareButton>

										</div>
									</div>

								}

							</div>
							<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
								<div>
									<div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Tags</div>
								</div>
								<div className="clearfix"></div>
								<div className="fh5co_tags_all">
									<Link className="fh5co_tagg" to="/">Home</Link>
									<Link className="fh5co_tagg" to="/technews">Tech News</Link>
									<Link className="fh5co_tagg" to="/popularnews">Popular News</Link>
									<Link className="fh5co_tagg" to="/teslanews">Tesla's News</Link>

								</div>
								<div>
									<div className="fh5co_heading fh5co_heading_border_bottom pt-3 py-2 mb-4">Most Popular</div>
								</div>

								{popularNewsList.popularNews.data.articles.reduce((result, current, i) => {
									if (i > 0 && i < 6) {
										result.push(
											<div className="row pb-3" key={i}>
												<div className="col-5 align-self-center">
													<img src={current.urlToImage ? current.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaailSXpzp_AbojwMyII4FSxu2KE4JyC7wPMlx5nFQ4MUEBUBa3rIO2lSMnBv1fTh0M4&usqp=CAU'} alt="img" className="fh5co_most_trading" />
												</div>
												<div className="col-7 paddding">
													<div className="most_fh5co_treding_font" onClick={() => movetodetails(i, 'popularNews')}><a> {current.title}</a></div>
													<div className="most_fh5co_treding_font_123"> {(current.publishedAt).split("T")[0]}</div>
												</div>


											</div>

										);
									}
									return result;
								}, [])}

							</div>
						</div>
					</div>
				</div>

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
	const { currentNews, newsList, techNewsList, popularNewsList, teslaNewsList } = state;
	return {
		currentNews,
		newsList,
		techNewsList,
		popularNewsList,
		teslaNewsList
	};
}
export default connect(mapStateToProps)(NewsDetails)
