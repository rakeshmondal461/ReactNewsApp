import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { selectNews } from '../actions/actions';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function PopularNews(props) {
	const history = useHistory();

	const movetodetails = (newsid, newstype) => {
		const { newfun } = props
		newfun(selectNews(newsid, newstype))
		history.push("/newsdet");

	}
	return (
		<React.Fragment>
			<div className="container-fluid pb-4 pt-5">
				<div className="container animate-box">
					<div>
						<div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Popular News</div>
					</div>
					<OwlCarousel className='owl-theme' loop margin={10} items={3} nav>

						{props.popularNews.data.articles.reduce((result, current, i) => {
							if (i > 0 && i < 15) {
								result.push(
									<div key={i} className="item px-2" onClick={() => movetodetails(i, 'popularNews')}>
										<div className="fh5co_hover_news_img">
											<div className="fh5co_news_img"><img src={current.urlToImage ? current.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaailSXpzp_AbojwMyII4FSxu2KE4JyC7wPMlx5nFQ4MUEBUBa3rIO2lSMnBv1fTh0M4&usqp=CAU'} alt="" /></div>
											<div>
												<a onClick={() => movetodetails(i, 'popularNews')} className="d-block fh5co_small_post_heading"><span className="">{current.title}</span></a>
												<div className="c_g"><i className="fa fa-clock-o"></i> {(current.publishedAt).split("T")[0]}</div>
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
