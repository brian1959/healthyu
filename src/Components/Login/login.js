import React from "react";
import {withRouter} from 'react-router-dom';



function Login(props) {
	const login = () => {
		let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
		let uri = `${encodeURIComponent(window.location.origin)}/auth/callback?pgrtrn=${props.location.pathname}`;
		window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${uri}&response_type=code`;
	};
	
		return (

			props.button ? (
				<button className="login-button" onClick={login}>
				Get Started
						</button>	
			):(
				<div className="login-btn" onClick={login}>
				Login
						</div>
			)

		);
	}
export default withRouter(Login)
