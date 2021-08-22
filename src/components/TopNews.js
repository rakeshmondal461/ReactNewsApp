import React from 'react'

import { Redirect, useHistory } from 'react-router-dom'
import { selectNews } from '../actions/actions';

export default function TopNews(props) {
	const history = useHistory();

	const movetodetails = (newsid, newstype) => {
		const { newfun } = props
		newfun(selectNews(newsid, newstype))
		history.push("/newsdet");

	}
	return (
		<React.Fragment>
			<div className="container-fluid paddding mb-5">
				<div className="row mx-0">

					{props.mydata.data.articles.reduce((result, current, i) => {
						if (i < 1) {
							result.push(
								<div key={i} className="col-md-6 col-12 paddding animate-box" data-animate-effect="fadeIn">
									<div className="fh5co_suceefh5co_height"><img src={current.urlToImage ? current.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaailSXpzp_AbojwMyII4FSxu2KE4JyC7wPMlx5nFQ4MUEBUBa3rIO2lSMnBv1fTh0M4&usqp=CAU'} alt="img" />
										<div className="fh5co_suceefh5co_height_position_absolute"></div>
										<div className="fh5co_suceefh5co_height_position_absolute_font">
											<div className=""><a href="#" className="color_fff"> <i className="fa fa-clock-o"></i>&nbsp;&nbsp;{(current.publishedAt).split("T")[0]}
											</a></div>
											<div className=""><a onClick={() => movetodetails(i, 'topNews')} className="fh5co_good_font"> {current.title} </a></div>
										</div>
									</div>
								</div>
							);
						}
						return result;
					}, [])}



					<div className="col-md-6">
						<div className="row">

							{props.mydata.data.articles.reduce((result, current, i) => {
								if (i > 0 && i < props.newslength) {
									result.push(
										<div key={i} className="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
											<div className="fh5co_suceefh5co_height_2"><img src={current.urlToImage ? current.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaailSXpzp_AbojwMyII4FSxu2KE4JyC7wPMlx5nFQ4MUEBUBa3rIO2lSMnBv1fTh0M4&usqp=CAU'} alt="img" />
												<div className="fh5co_suceefh5co_height_position_absolute"></div>
												<div className="fh5co_suceefh5co_height_position_absolute_font_2">
													<div className=""><a className="color_fff"> <i className="fa fa-clock-o"></i>&nbsp;&nbsp;{(current.publishedAt).split("T")[0]} </a></div>
													<div className=""><a onClick={() => movetodetails(i, 'topNews')} className="fh5co_good_font_2" >{current.title} </a></div>
												</div>
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
		</React.Fragment>
	)
}
