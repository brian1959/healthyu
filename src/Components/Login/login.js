import React, { Component } from "react";

export default class Login extends Component {
	login = () => {
		let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
		let uri = `${encodeURIComponent(window.location.origin)}/auth/callback`;
		window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${uri}&response_type=code`;
	};

	render() {
		return (
			<div className="login-btn">
				<button className="login" onClick={this.login}>
					Login
				</button>
			</div>
		);
	}
}
