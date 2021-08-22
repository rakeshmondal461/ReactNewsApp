import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Modal } from "react-bootstrap";

export default function Header(props) {
	const history = useHistory();

	const userName = localStorage.getItem("userName")
	const [value, setValue] = useState(0)

	const [show, setShow] = useState(false);
	const [searchValue, setSearchValue] = useState("")
	const queryParams = new URLSearchParams(window.location.search);
	const urlparam = queryParams.get('searchKey');

	const [visiblevalue, setVisiblevalue] = useState(false)

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		setSearchValue(urlparam)
	}, [])
	function forceUpdate() {
		setValue(value => value + 1);
	}




	const token = localStorage.getItem("token")
	const responseGoogle = (response) => {
		if (response.accessToken) {
			localStorage.setItem("token", response.accessToken);
			localStorage.setItem("userName", response.profileObj.name);
			history.push("/");
			forceUpdate()
		}
	}

	const responseFacebook = (response) => {
		if (response.accessToken) {
			localStorage.setItem("token", response.accessToken);
			localStorage.setItem("userName", response.name);
			history.push("/");
			handleClose()
			forceUpdate()

		}
	}

	const logoutcurrent = () => {
		localStorage.clear();
		forceUpdate()
	}

	const searchData = (e) => {
		props.sfun(e.target.value)
	}

	const toggleSearch = () => {
		if (visiblevalue === true) {
			setVisiblevalue(false)
		} else {
			setVisiblevalue(true)
		}
	}

	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-2 fh5co_padding_menu">
							<img src="https://cdn.freelogovectors.net/wp-content/uploads/2012/04/sky-news-logo.png" alt="img" className="fh5co_logo_width" />
						</div>
						<div className="col-12 col-md-10 align-self-center fh5co_mediya_right">
							<div className="text-center d-inline-block" style={{ marginBottom: '10px' }}>
								<div class="input-group rounded">
									{visiblevalue === true &&
										<input type="search" class="form-control rounded" placeholder="Search" onChange={searchData} value={searchValue} aria-label="Search"
											aria-describedby="search-addon" />
									}
									{visiblevalue === false &&
										<input type="search" style={{ border: 'none' }} class="form-control rounded" aria-label="Search"
											aria-describedby="search-addon" />
									}
									{props.sfun !== false &&
										<div className="text-center d-inline-block">
											<a className="fh5co_display_table" onClick={toggleSearch}><div className="fh5co_verticle_middle"><i className="fa fa-search"></i></div></a>
										</div>
									}
								</div>
							</div>



							{
								token &&
								<div className="text-center d-inline-block" style={{ verticalAlign: 'middle' }}>
									<div className="fh5co_verticle_middle"><h5 className="userprofile">{userName}</h5></div>
								</div>
							}

							{!token &&
								<div className="text-center d-inline-block" style={{ verticalAlign: 'middle' }}>
									<a className="fh5co_display_table"><div className="fh5co_verticle_middle">
										<GoogleLogin
											clientId="671629271944-ef6ego7fjabclq707qgkd0s5h11oeg6g.apps.googleusercontent.com"
											render={renderProps => (
												<i className="fa fa-google-plus" onClick={renderProps.onClick} disabled={renderProps.disabled}></i>
											)}
											buttonText="Login"
											onSuccess={responseGoogle}
											onFailure={responseGoogle}
											cookiePolicy={'single_host_origin'}
										/>

									</div></a>
								</div>
							}
							{!token &&
								<div className="text-center d-inline-block" style={{ verticalAlign: 'middle' }}>
									<a onClick={handleShow} target="_blank" className="fh5co_display_table"><div className="fh5co_verticle_middle">

										<i className="fa fa-facebook"></i>


									</div></a>
								</div>
							}
							{
								token &&
								<div className="text-center d-inline-block" style={{ verticalAlign: 'middle' }}>

									<a className="fh5co_display_table">
										<button className="btn btn-danger" style={{ cursor: 'pointer', borderRadius: '60px' }} onClick={logoutcurrent}>Logout</button>
									</a>
								</div>
							}
							<div className="clearfix"></div>
						</div>
					</div>
					<div>
						<Modal show={show} onHide={handleClose}>
							<Modal.Header closeButton>
								<Modal.Title>Log In</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}>
									<div className="loginform" >
										<form>
											<div>
												<FacebookLogin
													appId="343425807436477"
													autoLoad={false}
													fields="name,email,picture"
													scope="public_profile,user_friends"
													callback={responseFacebook}
													icon="fa fa-facebook" />
											</div>
										</form>
									</div>
								</div>

							</Modal.Body>
						</Modal>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
