import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/main.css";
import { Auth0Provider } from "@auth0/auth0-react";

import { HashRouter } from "react-router-dom";

ReactDOM.render(
	
	<HashRouter>
		<Auth0Provider
	domain="dev-k5cw9jqa.us.auth0.com"
clientId="oiY3NQ43UQt9QEVAHpQaGTRfVDIj3hAN"
redirectUri={window.location.origin}>
		<App />
		</Auth0Provider>
	</HashRouter>
	,
	document.getElementById("root")
);
