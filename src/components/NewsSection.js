import React from 'react'
import { Redirect, useHistory, Link } from 'react-router-dom'
import { selectNews } from '../actions/actions';

export default function NewsSection(props) {
	const history = useHistory();

	const movetodetails = (newsid, newstype) => {
		const { newfun } = props
		newfun(selectNews(newsid, newstype))
		history.push("/newsdet");

	}
	return (
		<React.Fragment>
			<div className="container-fluid pb-4 pt-4 paddding">
				<div className="container paddding">
					<div className="row mx-0">
						<div className="col-md-8 animate-box" data-animate-effect="fadeInLeft">
							<div>
								<div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Tesla's News</div>
							</div>
							{props.teslaNews.data.articles.reduce((result, current, i) => {
								if (i > 0 && i < 11) {
									result.push(
										<div key={i} className="row pb-4">
											<div className="col-md-5">
												<div className="fh5co_hover_news_img">
													<div className="fh5co_news_img"><img src={current.urlToImage ? current.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaailSXpzp_AbojwMyII4FSxu2KE4JyC7wPMlx5nFQ4MUEBUBa3rIO2lSMnBv1fTh0M4&usqp=CAU'} alt="" /></div>
													<div></div>
												</div>
											</div>
											<div className="col-md-7 animate-box">
												<a onClick={() => movetodetails(i, 'teslaNews')} className="fh5co_magna py-2"> {current.title}
												</a> <a href="single.html" className="fh5co_mini_time py-3"> {(current.publishedAt).split("T")[0]} </a>
												<div className="fh5co_consectetur">
													{current.description}
												</div>
											</div>
										</div>
									);
								}
								return result;
							}, [])}


						</div>
						<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
							<div>
								<div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Tags</div>
							</div>
							<div className="clearfix"></div>
							<div className="fh5co_tags_all">
									<Link className="fh5co_tagg"  to="/">Home</Link>
									<Link className="fh5co_tagg"  to="/technews">Tech News</Link>
									<Link className="fh5co_tagg"  to="/popularnews">Popular News</Link>
									<Link className="fh5co_tagg"  to="/teslanews">Tesla's News</Link>
									
							</div>
							<div>
								<div className="fh5co_heading fh5co_heading_border_bottom pt-3 py-2 mb-4">Most Popular</div>
							</div>

							{props.popularNews.data.articles.reduce((result, current, i) => {
								if (i > 0 && i < 6) {
									result.push(
										<div key={i} className="row pb-3" key={i}>
											<div className="col-5 align-self-center">
												<img src={current.urlToImage ? current.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaailSXpzp_AbojwMyII4FSxu2KE4JyC7wPMlx5nFQ4MUEBUBa3rIO2lSMnBv1fTh0M4&usqp=CAU'} alt="img" className="fh5co_most_trading" />
											</div>
											<div className="col-7 paddding">
												<div className="most_fh5co_treding_font" onClick={() => movetodetails(i, 'popularNews')}> {current.title}</div>
												<div className="most_fh5co_treding_font_123"> {(current.publishedAt).split("T")[0]}</div>
											</div>
										</div>

									);
								}
								return result;
							}, [])}
							
						</div>
					</div>
					{/*
					<div className="row mx-0 animate-box" data-animate-effect="fadeInUp">
						<div className="col-12 text-center pb-4 pt-4">
							<a href="#" className="btn_mange_pagging"><i className="fa fa-long-arrow-left"></i>&nbsp;&nbsp; Previous</a>
							<a href="#" className="btn_pagging">1</a>
							<a href="#" className="btn_pagging">2</a>
							<a href="#" className="btn_pagging">3</a>
							<a href="#" className="btn_pagging">...</a>
							<a href="#" className="btn_mange_pagging">Next <i className="fa fa-long-arrow-right"></i>&nbsp;&nbsp; </a>
						</div>
					</div>
					*/}
				</div>
			</div>
		</React.Fragment>
	)
}
