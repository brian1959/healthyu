require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const axios = require("axios");
//const cors = require("cors");

const mc = require("./meal_controller");
const gc = require("./member_controller");

const app = express();

//db connection

const {
  SERVER_PORT,
  SESSION_SECRET,
  REACT_APP_CLIENT_ID,
  REACT_APP_DOMAIN,
  CLIENT_SECRET,
  CONNECTION_STRING,
  NODE_ENV,
  AUTH_PROD
} = process.env;

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));
//app.use(cors());

//session functionality
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});



app.get("/auth/callback", async (req, res) => {
  //use code from query in payload for token
  const payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: "authorization_code",
    redirect_uri: AUTH_PROD
  };
  //trade the code for a token
  console.log("Payload", payload)
  let resWithToken = await axios.post(
    `https://${REACT_APP_DOMAIN}/oauth/token`,
    payload
  );
  //use token to get data
  let resWithUserData = await axios.get(
    `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
      resWithToken.data.access_token
    }`
  );

  let { email, name, picture, sub } = resWithUserData.data;
  console.log("User", resWithUserData.data)
  let db = req.app.get("db");
  let foundUser = await db.find_user([sub]);
  if (foundUser[0]) {
    console.log("User", foundUser[0])
    req.session.user = foundUser[0];
    res.redirect("/#/member");
  } else {
    let createdUser = await db.create_user(name, email, picture, sub);
    console.log("User", createdUser[0])
    req.session.user = createdUser[0];
    res.redirect("/#/pickyeater");
  }
  
});

function envCheck(req, res, next) {
  if (NODE_ENV === "dev") {
    req.app
      .get("db")
      .get_user_by_id()
      .then(userWithIdOne => {
        req.session.user = userWithIdOne[0];
        next();
      });
  } else {
    next(); 
  }
}

app.get('/api/guestprivs', mc.getGuestPrivs);
app.get("/api/member", gc.getMember);
//app.get("/api/user", gc.getGuestID);


//end of session logging

app.listen(SERVER_PORT, () => {
  console.log(`Server evesdropping on port ${SERVER_PORT}.`);
});
