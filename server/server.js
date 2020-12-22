require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const axios = require("axios");
//const cors = require("cors");

const mc = require("./meal_controller");
const gc = require("./member_controller");

const app = express();

const {
	SERVER_PORT,
	SESSION_SECRET,
	REACT_APP_CLIENT_ID,
	REACT_APP_DOMAIN,
	CLIENT_SECRET,
	CONNECTION_STRING,
	NODE_ENV,
} = process.env;

app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);

app.use(express.json());
//app.use(cors());

massive(CONNECTION_STRING)
	.then((db) => {
		app.set("db", db);
		console.log("DB connected");
	})
	.catch((err) => console.log(err));

app.get("/auth/callback", async (req, res) => {
	//use code from query in payload for token
	const payload = {
		client_id: REACT_APP_CLIENT_ID,
		client_secret: CLIENT_SECRET,
		code: req.query.code,
		grant_type: "authorization_code",
		redirect_uri: `http://${req.headers.host}/auth/callback`,
	};
	//trade the code for a token
	console.log("Payload", payload);

	try {
		let resWithToken = await axios.post(
			`https://${REACT_APP_DOMAIN}/oauth/token`,
			payload
		);
		//use token to get data
		let resWithUserData = await axios.get(
			`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`
		);
		console.log("User", resWithUserData.data);

		let { email, given_name, family_name, sub } = resWithUserData.data;
		let db = app.get("db");
		let foundUser = await db.find_user([sub]);
		if (foundUser[0]) {
			console.log("User", foundUser[0]);
			req.session.user = foundUser[0];
			res.redirect("/#/member");
		} else {
			let createdUser = await db.create_user(given_name, family_name, email, sub);
			console.log("User", createdUser[0]);
			req.session.user = createdUser[0];
			res.redirect("/#/pickyeaters");
		}
	} catch (err) {
		console.log(err);
	}
});

function envCheck(req, res, next) {
	if (NODE_ENV === "dev") {
		req.app
			.get("db")
			.get_user_by_id()
			.then((userWithIdOne) => {
				req.session.user = userWithIdOne[0];
				next();
			});
	} else {
		next();
	}
}

app.get("/api/memberprivs", mc.getMemberPrivs);
app.get("/api/member", gc.getMember);
//app.get("/api/user", gc.getGuestID);
app.post("/api/orderheader", mc.addOrderHeader);
app.post("/api/orderdetail", mc.addOrderDetail);

//end of session logging

app.listen(SERVER_PORT, () => {
	console.log(`Server evesdropping on port ${SERVER_PORT}.`);
});
