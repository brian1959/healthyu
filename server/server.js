require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const axios = require("axios");
const cors = require("cors");

const mc = require("./meal_controller");
const gc = require("./member_controller");

const app = express();

//db connection

app.use( express.static( `${__dirname}/../build` ) )

const {
	SERVER_PORT,
	SESSION_SECRET,
	REACT_APP_CLIENT_ID,
	REACT_APP_DOMAIN,
	CLIENT_SECRET,
	CONNECTION_STRING,
	NODE_ENV,
} = process.env;

massive(CONNECTION_STRING)
	.then((db) => {
		console.log("success")
		app.set("db", db);
	})
	.catch((err) => console.log(err));

//end db connection

app.use(express.json());
app.use(cors());

//session functionality

app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: true
	})
);

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
	try {
		let resWithToken = await axios.post(
			`https://${REACT_APP_DOMAIN}/oauth/token`,
			payload
		);
		//use token to get data
		let resWithUserData = await axios.get(
			`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`
		);

		let { email, given_name, family_name, sub } = resWithUserData.data;
		let db = app.get("db");
		let foundUser = await db.find_user([sub]);
		if (foundUser[0]) {
			req.session.user = foundUser[0];
			res.redirect(`/#${req.query.pgrtrn}`);
		} else {
			let createdUser = await db.create_user(given_name, family_name, email, sub);
			req.session.user = createdUser[0];
			res.redirect(`/#${req.query.pgrtrn}`);
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
app.get("/api/user-data", envCheck, (req, res) => {

	if (req.session.user) {
	  res.status(200).send(req.session.user);
	} else {
	  res.status(401).send("Unauthorized");
	}

  });
  
  app.get("/auth/logout", (req, res) => {
	req.session.destroy();
	res.redirect(process.env.REACT_APP_REDIRECT);
  });
  //end of session logging

app.get("/api/memberprivs", mc.getMemberPrivs);
app.get("/api/member", gc.getMember);
app.get("/api/accessprivs", mc.getAccessPrivs);
app.get("/api/homemeals", mc.getHomeMealTypes);
app.get("/api/pemeal", mc.getPickyeaterMealTypes);
app.post("/api/orderheader", mc.addOrderHeader);
app.post("/api/orderdetail", mc.addOrderDetail);

//end of session logging


app.listen(SERVER_PORT, () => {
	console.log(`Server evesdropping on port ${SERVER_PORT}.`);
});
