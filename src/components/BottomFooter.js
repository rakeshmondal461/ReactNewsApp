import React from 'react'
import { Link } from 'react-router-dom'
export default function BottomFooter() {
	return (
		<React.Fragment>
			<div className="container-fluid fh5co_footer_right_reserved">
				<div className="container">
					<div className="row  ">
						<div className="col-12 col-md-6 py-4 Reserved"> © Copyright 2021, All rights reserved. Design by Rakesh Mondal </div>
						<div className="col-12 col-md-6 spdp_right py-4">
							<Link className="footer_last_part_menu" to="/">Home</Link>
							<Link className="footer_last_part_menu" to="/technews">Tech News</Link>
							<Link className="footer_last_part_menu" to="/popularnews">Popular News</Link>
							<Link className="footer_last_part_menu" to="/teslanews">Tesla's News</Link>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
