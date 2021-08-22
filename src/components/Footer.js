import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect, useHistory } from 'react-router-dom'
import { selectNews } from '../actions/actions';

export default function Footer(props) {
	const history = useHistory();

	const movetodetails = (newsid, newstype) => {
		const { newfun } = props
		newfun(selectNews(newsid, newstype))
		history.push("/newsdet");

	}

	return (
		<React.Fragment>
			<div className="container-fluid fh5co_footer_bg pb-3">
				<div className="container animate-box">
					<div className="row">
						<div className="col-12 spdp_right py-5"><img src="https://cdn.freelogovectors.net/wp-content/uploads/2012/04/sky-news-logo.png" alt="img" className="footer_logo" /></div>
						<div className="clearfix"></div>
						<div className="col-12 col-md-4 col-lg-4">
							<div className="footer_main_title py-3"> About</div>
							<div className="footer_sub_about pb-3"> Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book.
							</div>

						</div>
						<div className="col-12 col-md-3 col-lg-3">
							<div className="footer_main_title py-3"> Category</div>
							<ul className="footer_menu">
								<li><Link to="/"><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Home</Link></li>
								<li><Link to="/technews"><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Tech News</Link></li>
								<li><Link to="/popularnews"><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Popular News</Link></li>
								<li><Link to="/teslanews"><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Tesla's News</Link></li>

							</ul>
						</div>
						<div className="col-12 col-md-5 col-lg-4 position_footer_relative">
							<div className="footer_main_title py-3" > Most Viewed Posts</div>
							{props.latestTech.data.articles.reduce((result, current, i) => {
								if (i >= 0 && i < 3) {
									result.push(
										<div key={i}>
											<div  className="footer_makes_sub_font">  {(current.publishedAt).split("T")[0]}</div>
											<a onClick={() => movetodetails(i, 'techNews')} className="footer_post pb-4"> {current.title} </a>
										</div>
									);
								}
								return result;
							}, [])}
						</div>

					</div>
					<div className="row justify-content-center pt-2 pb-4">
						<div className="col-12 col-md-8 col-lg-7 ">
							<div className="input-group">
								<span className="input-group-addon fh5co_footer_text_box" id="basic-addon1"><i className="fa fa-envelope"></i></span>
								<input type="text" className="form-control fh5co_footer_text_box" placeholder="Enter your email..." aria-describedby="basic-addon1" />
								<a href="/" className="input-group-addon fh5co_footer_subcribe" id="basic-addon12"> <i className="fa fa-paper-plane-o"></i>&nbsp;&nbsp;Subscribe</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
