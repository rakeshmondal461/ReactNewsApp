import React from 'react'

export default function TopHeader() {
	var myDate = new Date();
	let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
	let date = myDate.getDate();
	let month = monthsList[myDate.getMonth()];
	let year = myDate.getFullYear();
	let day = daysList[myDate.getDay()];

	let today = `${date} ${month} ${year}, ${day}`;

	return (
		<React.Fragment>
			<div className="container-fluid fh5co_header_bg">
				<div className="container">
					<div className="row">
						<div className="col-12 fh5co_mediya_center"><a  className="color_fff fh5co_mediya_setting"><i
							className="fa fa-clock-o"></i>&nbsp;&nbsp;&nbsp;{today}</a>
							<div className="d-inline-block fh5co_trading_posotion_relative"><a href="#" className="treding_btn">Trending</a>
								<div className="fh5co_treding_position_absolute"></div>
							</div>
							<a  className="color_fff fh5co_mediya_setting"></a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
