require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const axios = require("axios");
const cors = require("cors");


const mc = require("./meal_controller");
const gc = require("./member_controller");

const app = express();

//db connection

const {
  SERVER_PORT,
  SECRET,
  REACT_APP_CLIENT_ID,
  REACT_APP_DOMAIN,
  CLIENT_SECRET,
  CONNECTION_STRING,
  NODE_ENV,
  AUTH_PROD
} = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));
app.use(cors());

//session functionality




app.get('/api/guestprivs', mc.getGuestPrivs);
app.get("/api/user", gc.getGuestID);


app.listen(SERVER_PORT, () => {
  console.log(`Server evesdropping on port ${SERVER_PORT}.`);
});
