import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { selectNews } from '../actions/actions';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function TrendingNews(props) {
	const history = useHistory();

	const movetodetails = (newsid, newstype) => {
		const { newfun } = props
		newfun(selectNews(newsid, newstype))
		history.push("/newsdet");

	}

	return (
		<React.Fragment>
			<div className="container-fluid pt-3">
				<div className="container animate-box" data-animate-effect="fadeIn">
					<div>
						<div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Trending</div>
					</div>
					<OwlCarousel className='owl-theme' loop margin={10} items={3} nav>


						{props.latestTech.data.articles.reduce((result, current, i) => {
							if (i >= 0 && i < props.latestTech.data.totalResults) {
								result.push(


									<div className="item px-2" key={i}>
										<div className="fh5co_latest_trading_img_position_relative">
											<div className="fh5co_latest_trading_img"><img src={current.urlToImage ? current.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaailSXpzp_AbojwMyII4FSxu2KE4JyC7wPMlx5nFQ4MUEBUBa3rIO2lSMnBv1fTh0M4&usqp=CAU'} alt="image"
											/></div>
											<div className="fh5co_latest_trading_img_position_absolute"></div>
											<div className="fh5co_latest_trading_img_position_absolute_1">
												<a onClick={() => movetodetails(i, 'techNews')} className="text-white"> {current.title} </a>
												<div className="fh5co_latest_trading_date_and_name_color"> {(current.publishedAt).split("T")[0]}</div>
											</div>
										</div>
									</div>
								);
							}
							return result;
						}, [])}

					</OwlCarousel>
				</div>
			</div>
		</React.Fragment>
	)
}
