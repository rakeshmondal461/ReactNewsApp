import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
	return (
		<React.Fragment>
			<div className="container-fluid bg-faded fh5co_padd_mediya padding_786">
				<div className="container padding_786" >
					<nav className="navbar navbar-toggleable-md navbar-light ">
						<button className="navbar-toggler navbar-toggler-right mt-3" type="button" data-toggle="collapse"
							data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
							aria-label="Toggle navigation"><span className="fa fa-bars"></span></button>
						<a className="navbar-brand" href="#"><img src="https://cdn.freelogovectors.net/wp-content/uploads/2012/04/sky-news-logo.png" alt="img" className="mobile_logo_width" /></a>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className={"nav-item "+props.navd.home}>
									<Link className="nav-link"  to="/">Home <span className="sr-only">(current)</span></Link>
								</li>
								<li className={"nav-item "+props.navd.techNews}>
									<Link className="nav-link" to="/technews">Tech News <span className="sr-only">(current)</span></Link>
								</li>
								<li className={"nav-item "+props.navd.popNews}>
									<Link className="nav-link" to="/popularnews">Popular News <span className="sr-only">(current)</span></Link>						
								</li>
								<li className={"nav-item "+props.navd.teslaNews}>
									<Link className="nav-link" to="/teslanews">Tesla's News <span className="sr-only">(current)</span></Link>						
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</React.Fragment>
	)
}
